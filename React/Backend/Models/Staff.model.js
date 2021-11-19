const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Order = new Schema({
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
    },
    FoodIDs:{
        type: Array
    },
    total:{
        type: Number
    }
}
);

module.exports = mongoose.model('Order', Order, "Order");
