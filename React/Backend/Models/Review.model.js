const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Review = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client'
    },
    rating: {type: Number, required: true },
    comment: {type: String, required: true },
    name: {type: String, required: true },
});

module.exports = mongoose.model('Review', Review, "Review");
