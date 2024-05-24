// Task 5: Get a book review
app.get('/books/:isbn/review', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        const response = await axios.get(`https://api.example.com/books/${isbn}/review`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
