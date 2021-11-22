const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Order = new Schema({
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    customer: {
        type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
        num: {type: Number},
        ref: 'Food'
    }],
    total:{
        type: Number
    }
});

module.exports = mongoose.model('Order', Order, "Order");
