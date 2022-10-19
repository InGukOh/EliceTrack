var express = require("express");
var Book = require("../models/book");
var router = express.Router();

// 4. 모든 book 데이터를 조회하는 라우터를 완성하세요.

router.use('/', async (req, res) => {
  const book = await Book.find().lean();
  res.send(book);
});

/*
router.use('/', async (req, res) => {
  const book = await Book.find().lean();
  book[0]._id = book[0]._id.toHexString();
  book[0] = JSON.stringify(book);
  console.log(book);
  res.send(book.toString());
});
*/

module.exports = router;