const mongoose = require('mongoose');


// Define collection and schema for login
let Pill = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    dateOfReceipt: {
        type: Date
    },
    state:{
        type: String
    },
    total:{
        type: Number
    }
});

module.exports = mongoose.model('Pill', Pill, "Pill");
