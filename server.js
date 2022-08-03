require("dotenv/config");
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Username: ' + process.env.USER + ' executando em : ' + process.env.PASSWORD);
})

app.listen(port, () => {
    console.log(`Acesse em http://localhost:${port}`);
})