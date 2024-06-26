var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const dotenv = require("dotenv").config()
var logger = require('morgan');
const connectDb = require("./config/db")
const cors = require("cors")
// const connectCoachFinderDb = require('./config/coachFinderDb')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var phoneBookRouter = require("./routes/phonebook")
var coachFinderRouter = require("./routes/coachfinder")

connectDb()

// connectCoachFinderDb()

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/api/phonebook", phoneBookRouter)

app.use("/api/coachfinder", coachFinderRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
