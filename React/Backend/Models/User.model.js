const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for login
let User = new Schema({
    id: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model("User", User, "User");
