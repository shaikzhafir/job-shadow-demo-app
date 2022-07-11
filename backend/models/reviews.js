const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  bookID: {
    type: String,
    required: true,
  },

  reviewText: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("review", reviewSchema);
