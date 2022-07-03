const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        UserId: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("post", postSchema)