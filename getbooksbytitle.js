// Task 4: Get all books based on title
app.get('/books/title/:title', async (req, res) => {
    const bookTitle = req.params.title;
    try {
        const response = await axios.get(`https://api.example.com/books?title=${bookTitle}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
