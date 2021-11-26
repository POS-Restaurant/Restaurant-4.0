const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Review = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    rating: {type: Number },
    comment: {type: String },
    idRes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    idFood: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    },
});

module.exports = mongoose.model('Review', Review, "Review");
