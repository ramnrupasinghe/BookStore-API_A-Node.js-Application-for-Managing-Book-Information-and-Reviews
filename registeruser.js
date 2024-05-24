// Task 6: Register new user
app.post('/register', async (req, res) => {
    try {
        const response = await axios.post('https://api.example.com/register', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
