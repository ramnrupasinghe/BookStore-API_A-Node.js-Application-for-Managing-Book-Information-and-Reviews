// Task 1: Get the book list available in the shop
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/books', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/books');
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
