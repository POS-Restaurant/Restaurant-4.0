const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Client = new Schema({
    id: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    Bday: {
        type: Date
    },
    sex: {
        type: Number
    },
    listOrder: {
        type: Array
    },
    money:{
        type: Number
    }
}
);

module.exports = mongoose.model('Client', Client, "Client");
