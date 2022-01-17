var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tweetSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    lang: {
        type: String,
        required: true,
    },
    reply_count: {
        type: Number,
        required: false,
    },
}, { timestamps: true });
module.exports = mongoose.model("Tweet", tweetSchema);
