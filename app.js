var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
const path = require("path");

var indexRouter = require("./routes/index");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

module.exports = app;
