
const express = require('express');
const db = require('./database')
const app = express();

const port = 3500;

app.get('/', (req, res) => {
    res.send('Hello, you are now using the express package.')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})