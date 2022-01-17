require ('dotenv').config('');
var mongoose = require('mongoose');
var express = require("express");
var Twit = require('twit');
var app = express();

var T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret:process.env.consumer_secret ,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: 60 * 1000,
    strictSSL: true, 
});
var uri = process.env.uriDB
var options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
    .connect(uri, options)
    .then(function () { return app.listen(3001, console.log("Server is running")); })
    .catch(function (error) {
    throw error;
});
var Schema = mongoose.Schema;

var tweetSchema = new Schema({}, { "strict": false });

var TweetS = mongoose.model('Tweet', tweetSchema);

app.get('/scrapper', function (req, res) {
    var search = req.query.search;
    var stream = T.stream('statuses/filter', { track: search });
    stream.on('tweet', function (obj) {
        var TwitterData = new TweetS(obj); 
        TwitterData.save(); 
        console.log(obj);
    });
});
