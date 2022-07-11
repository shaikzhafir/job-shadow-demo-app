const Book = require("../models/book");
const Review = require("../models/reviews");

const seedReviews = async function () {
  await Review.deleteMany({});
  let books = await Book.find();
  books.forEach(async (book) => {
    const review = new Review({
      reviewText: "random review test ",
      date: new Date(),
      rating: Math.ceil(Math.random() * 5),
      bookID: book._id,
    });

    try {
      await review.save();
    } catch (error) {
      console.error("failed to save review");
    }
  });
};

module.exports = seedReviews;
