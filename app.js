const express = require('express');
const app = express();
const path = require('path');
const db = require('./database');
const port = 3000;

const publicDirectory = path.join(__dirname, './public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));



app.get('/', (req,res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Server is Listening on port: ${port}`);
});