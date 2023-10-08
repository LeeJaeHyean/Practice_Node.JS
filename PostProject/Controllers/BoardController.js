const port = 3000;
const express = require("express");
const ejs = require('ejs');
const path = require('path');
const boardDtoModuel = requrie('./BoardDto');
const boardDaoModuel = requrie('./BoardDao');

const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(session({
    secret : "1234",
    resave : false,
    saveUninitialized : true,
    cookie : { secure : true }
}));

app.listen(port, () => {
    console.log(`express app listening on Port Number ${port}`);
});

app.get('/write', (req, res) => {
    
}) ;

app.get('/delete', (req, res) => {

});

app.get('/viewBoard', (req, res) => {

});

app.get('/update', (req, res) => {

});

app.get('/search', (req, res) => {

});