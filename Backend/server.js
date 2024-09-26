const express = require('express');
const connectDB = require("./config/db");
const dotenv = require('dotenv');
const cors = require('cors');
const cron = require('node-cron');
const { fetchLatestNews } = require('./controllers/newsController');

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
cron.schedule('*/2 * * * *', () => {
    console.log('Fetching latest news...');
    fetchLatestNews();
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend api')
})

const newsRoutes = require('./routes/newsRoutes');
app.use('/api/news', newsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
