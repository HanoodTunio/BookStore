const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Book = mongoose.model("book", bookSchema);

module.exports = Book;