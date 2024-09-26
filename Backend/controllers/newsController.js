const axios = require('axios');
const Article = require('../models/article');


const fetchLatestNews = async () => {
    try {
        await Article.deleteMany({});
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`);

        if (response.status !== 200) {
            throw new Error(`Failed to fetch articles: ${response.status}`);
        }

        const articles = response.data.articles.map(article => ({
            source: {
                name: article.source.name || 'Unknown Source',
                id: article.source.id
            },
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: new Date(article.publishedAt),
            content: article.content
        }));

        await Article.insertMany(articles);

        console.log('Articles saved successfully');
    } catch (error) {
        console.error('Error fetching news:', error.message);
    }
};


const fetchLatestNewsHandler = async (req, res) => {
    try {
        await fetchLatestNews();
        res.status(200).json({ message: 'Articles fetched and saved successfully' });
    } catch (error) {
        console.error('Error during fetch latest news handler:', error.message);
        res.status(500).json({ message: 'Error fetching news' });
    }
};


const getAllNews = async (req, res) => {
    try {
        const articles = await Article.find().sort({ publishedAt: -1 });
        res.status(200).json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching articles' });
    }
};

module.exports = { fetchLatestNewsHandler, getAllNews,fetchLatestNews};