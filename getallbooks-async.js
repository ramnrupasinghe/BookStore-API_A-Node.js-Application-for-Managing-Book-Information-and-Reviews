// Task 10: Get all books – Using async callback function
app.get('/books-async', (req, res) => {
    axios.get('https://api.example.com/books')
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send(error.message));
});
