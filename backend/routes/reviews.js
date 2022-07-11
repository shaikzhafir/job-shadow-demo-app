var express = require("express");
const Review = require("../models/reviews");
var router = express.Router();

/* GET reviews listing. */
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* get review based on book ID */
router.get("/:id", async (req, res, next) => {
  try {
    res.review = await Review.find({
      bookID: req.params.id,
    }).exec((err, review) => {
      if (err) {
        return res
          .status(404)
          .json({ message: "cannot find Review", error: err });
      }
      console.log(review);
      return res.status(200).json(review);
    });
  } catch (error) {
    return res.status(500).json({
      message: "Getting a Review with ID failed!",
      error: err,
    });
  }
});

router.post("/", async (req, res, next) => {
  const review = new Review({
    bookID: req.body.bookID,
    reviewText: req.body.reviewText,
    date: req.body.date,
    rating: req.body.rating,
  });
  try {
    const result = await review.save();
    res.status(201).json({
      message: "Review created successfully",
      createdReview: {
        _id: result._id,
        bookID: result.bookID,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Creating a Review failed!",
      error: err,
    });
  }
});

module.exports = router;
