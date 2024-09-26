const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    source: {
        name: { type: String, required: true },
        id: { type: String },
    },
    author: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    urlToImage: { type: String },
    publishedAt: { type: Date, required: true },
    content: { type: String },
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;