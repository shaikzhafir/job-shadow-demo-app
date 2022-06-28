const Book = require("./models/book");

const seedBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "0395482945",
    genre: "Fantasy",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "1234566789",
    genre: "Fantasy",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "2567876789",
    genre: "Fiction",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "1234567891",
    genre: "Classics",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "1234567892",
    genre: "Classics",
  },
];

const seedDB = async function () {
  await Book.deleteMany({});
  await Book.insertMany(seedBooks);
} 

module.exports = seedDB();
