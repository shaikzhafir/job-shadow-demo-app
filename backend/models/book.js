const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  isbn: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    default:
      "https://easydrawingart.com/wp-content/uploads/2019/06/How-to-draw-a-book.jpg",
  },
});

module.exports = mongoose.model("book", bookSchema);
