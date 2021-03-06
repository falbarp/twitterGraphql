require ('dotenv').config('')
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var uri = process.env.uriDB
var options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
    .connect(uri, options)
    .then(function () { return app.listen(3100, console.log("Server is running")); })
    .catch(function (error) {
    throw error;
});
