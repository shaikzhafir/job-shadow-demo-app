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

router.get("/:id", async (req, res, next) => {
  try {
    res.book = await Book.findById(req.params.id);
    if (!res.book) {
      return res.status(404).json({ message: "cannot find book" });
    }
    res.status(200).json(res.book);
  } catch (error) {
    return res.status(500).json({
      message: "Getting a book with ID failed!",
      error: err,
    });
  }
});

router.post("/", async (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    genre: req.body.genre,
    imageUrl: req.body.imageUrl,
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
