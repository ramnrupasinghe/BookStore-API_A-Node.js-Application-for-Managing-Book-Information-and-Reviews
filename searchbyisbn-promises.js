// Task 11: Search by ISBN – Using Promises
app.get('/books-isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    axios.get(`https://api.example.com/books/${isbn}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send(error.message));
});
