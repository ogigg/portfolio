const express = require('express')
const app = express()
const port = 5001
const hostname = 'localhost';

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.send('Hello test!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))