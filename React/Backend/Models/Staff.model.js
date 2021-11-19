const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Staff = new Schema({
    id: {
        type: String,
        unique: true
    },
    name:{
        type: String
    },
    phone:{
        type: String
    },
    email: {
        type: String
    },
    Bday: {
        type: Date
    },
    sex: {
        type: Number
    },
    IDres: {
        type: String
    },
    type : {
        type: String
    }
}
);

module.exports = mongoose.model('Staff', Staff, "Staff");
