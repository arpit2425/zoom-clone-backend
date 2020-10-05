const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(3030, (req, res) => {
    console.log('Listening ');
});
