const mongoose = require("mongoose")


// the model - the rules the entries need to follow
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength :[3,"{PATH} must have at least 3 chars"]
    },
    image: {
        type: String,
        required:[true,"{PATH} is required"]
    },
    releaseYear: {
        type: Number,
        required: [true, "please provide a date"],
        min:[1800,"must be valid "]
    },
    seen: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie
