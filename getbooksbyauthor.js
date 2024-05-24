// Task 3: Get all books by the author
app.get('/books/author/:name', async (req, res) => {
    const authorName = req.params.name;
    try {
        const response = await axios.get(`https://api.example.com/books?author=${authorName}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
