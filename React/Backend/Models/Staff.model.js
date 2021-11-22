const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Staff = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    type : {
        type: String
    }
}
);

module.exports = mongoose.model('Staff', Staff, "Staff");
