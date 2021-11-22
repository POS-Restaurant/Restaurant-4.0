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
    Bday: {
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
    }
}
);

module.exports = mongoose.model('Client', Client, "Client");
