const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login


let Client = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    pwd:{
        type:String
    },
    bday: {
        type: Date
    },
    sex: {
        type: Number
    },
    listOrder: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    money:{
        type: Number
    },
    idRes: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    
    userType: {
        type: String,
        required: true,
        default: false
    },
}
);
module.exports = mongoose.model('Client', Client, "Client");
