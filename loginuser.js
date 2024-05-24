// Task 7: Login as a registered user
app.post('/login', async (req, res) => {
    try {
        const response = await axios.post('https://api.example.com/login', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
