var createError = require("http-errors");
var cors = require("cors");
var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var seed = require("./seed/seedBooks");
var seedReviews = require("./seed/seedReviews");
require("dotenv").config();
const Book = require("./models/book");

var indexRouter = require("./routes/index");
var booksRouter = require("./routes/books");
var reviewsRouter = require("./routes/reviews");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.on("open", () => console.log("connected to db"));

// check if theres existing entries in mongodb
Book.find()
  .then((result) => {
    if (result.length == 0) {
      seed
        .then(() => {
          console.log("seeded db");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("using existing data");
    }
  })
  .catch((err) => console.log(err));

seedReviews()
  .then(() => {
    console.log("seeded reviews");
  })
  .catch((err) => {
    console.error("error");
  });

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/", indexRouter);
app.use("/books", booksRouter);
app.use("/reviews", reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
