const Book = require("../models/book");

const seedBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "0395482945",
    genre: "Fantasy",
    imageUrl: "https://m.media-amazon.com/images/I/517d67O44mL._AC_SY580_.jpg",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "1234566789",
    genre: "Fantasy",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41t9lnhXuFL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "2567876789",
    genre: "Fiction",
    imageUrl: "https://m.media-amazon.com/images/I/71nXPGovoTL._AC_UL320_.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "1234567891",
    genre: "Classics",
    imageUrl: "https://m.media-amazon.com/images/I/61z0MrB6qOS._AC_UL320_.jpg",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "1234567892",
    genre: "Classics",
    imageUrl: "https://m.media-amazon.com/images/I/914u+JexlCL._AC_UL320_.jpg",
  },
];

const seedDB = async function () {
  await Book.deleteMany({});
  await Book.insertMany(seedBooks);
};

module.exports = seedDB();
