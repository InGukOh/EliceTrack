var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//1. mongoose를 import 하세요.
const mongoose = require('mongoose');
var api = require('./routes');

var port = 8080;
var db = 'mongodb://localhost/example';

var books = require('./routes/books');

var Book = require("./models/book");

mongoose.connect(db);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/books', books);

//2. routes 폴더를 api 로 import 해서 이를 app.use 로 '/api' 경로를 사용하세요.
app.use('/api', api);

app.get('/', async function (req, res) {
  console.log('app starting on port: ' + port);

  //const book = await Book.find().lean();
  //book[0]._id = book[0]._id.toHexString();
  //book[0] = JSON.stringify(book);
  //console.log(book);
  //res.send(book.toString());

  res.send("result")
});

app.listen(port, function () {
  console.log('app listening on port: ' + port);
});
