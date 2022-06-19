var express = require("express");
const Book = require("../models/book");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    genre: req.body.genre,
  });
  try {
    const result = await book.save();
    res.status(201).json({
      message: "Book created successfully",
      createdBook: {
        _id: result._id,
        title: result.title,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Creating a book failed!",
      error: err,
    });
  }
});

module.exports = router;
