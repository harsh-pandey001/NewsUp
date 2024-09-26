const axios = require('axios');
const Article = require('../models/article');


const fetchLatestNews = async () => {
    try {
        await Article.deleteMany({});
        const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-08-26&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`);

        if (response.status !== 200) {
            throw new Error(`Failed to fetch articles: ${response.status}`);
        }

        for (const article of response.data.articles) {
            const sourceName = article.source.name || 'Unknown Source';
            const newArticle = new Article({
                source: {
                    name: sourceName,
                    id: article.source.id || 'unknown_id', 
                },
                author: article.author || 'Unknown Author',
                title: article.title || 'No Title',
                description: article.description || 'No Description',
                url: article.url || '',
                urlToImage: article.urlToImage || '',
                publishedAt: new Date(article.publishedAt) || new Date(),
                content: article.content || 'No Content',
            });

            try {
                await newArticle.save();
            } catch (err) {
                console.error('Error saving article:', err.message);
            }
        }

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