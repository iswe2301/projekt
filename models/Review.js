const mongoose = require("mongoose"); // Inkluderar mongoose

// Skapar ett schema för recensioner till DB
const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Du måste ange namn"]
    },
    rating: {
        type: Number,
        required: [true, "Du måste välja en rating"],
        min: [1, "Rating måste vara minst 1"], // Specar ratingens skala 1-5
        max: [5, "Rating får inte vara högre än 5"]
    },
    comment: {
        type: String,
        required: [true, "Du måste lämna en kommentar"]
    },
    date: {
        type: Date,
        default: Date.now // Aktuellt datum som standard, när recensionen gjordes
    }
});

const Review = mongoose.model("Review", reviewSchema, "reviews"); // Skapar en mongoose-model av schemat med namnet Review, hamnar i collectionen reviews
module.exports = Review; // Exporterar Review