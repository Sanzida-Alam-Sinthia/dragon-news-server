const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./data/catagories.json');
// const news = require('./data/news.json');

// app.get('/', (req, res) => {
//     res.send('News API Running');
// });

app.get('/news-catagories', (req, res) => {
    res.send(catagories)
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})