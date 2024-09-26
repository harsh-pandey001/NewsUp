const express = require('express');
const { fetchLatestNewsHandler, getAllNews } = require('../controllers/newsController');
const router = express.Router();


router.get('/fetch', fetchLatestNewsHandler);


router.get('/', getAllNews);

module.exports = router;