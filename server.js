const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('room');
});
app.listen(3030, (req, res) => {
    console.log('Listening ');
});
