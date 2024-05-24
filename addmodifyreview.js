// Task 8: Add/modify a book review
app.post('/books/:isbn/review', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        const response = await axios.post(`https://api.example.com/books/${isbn}/review`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
