const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let subObj = new Schema({
    note:{
        type: String
    },
    num: {
        type: Number
    }
});

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
    listOrder: {
        type: [subObj],
        required: false
    },
    money:{
        type: Number
    },
    idRes: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    isChef: {
        type: Boolean,
        required: true,
        default: false
    },
    isCustomer: {
        type: Boolean,
        required: true,
        default: true
    },
    isManager: {
        type: Boolean,
        required: true,
        default: false
    },
}
);
module.exports = mongoose.model('Client', Client, "Client");
