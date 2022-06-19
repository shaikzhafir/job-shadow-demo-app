const mongoose = require("mongoose");
const Book = require("./models/book");

mongoose.connect("mongodb://mongouser:mongopassword@localhost:32017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.on("open", () => console.log("connected to db"));

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

const seedDB = async () => {
  await Book.deleteMany({});
  await Book.insertMany(seedBooks);
};

seedDB()
  .then(() => {
    console.log("seeded db");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
