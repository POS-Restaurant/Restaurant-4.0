const mongoose = require('mongoose');


// Define collection and schema for login
let Order = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    dateOfPurchase: {
        type: Date
    },
    dateOfReceipt: {
        type: Date
    },
    state:{
        type: String
    },
    listFood: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
    listNum: [{
        type: Number,
    }],
    listNote: [{
        type: String,
    }],
    total:{
        type: Number
    }
});

module.exports = mongoose.model('Order', Order, "Order");
