// Task 9: Delete book review added by that particular user
app.delete('/books/:isbn/review', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        const response = await axios.delete(`https://api.example.com/books/${isbn}/review`, { data: req.body });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
