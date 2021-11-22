const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Restaurant = new Schema({
    name: {
        type: String
    },
    address: {
        type: String,
    },
    rateScore: {
        type: Number
    },
    listFood: [{
        type: Schema.Types.ObjectId,
        num: {type: Number},
        ref: 'Food'
    }],
    tableList: {
        type: Array
    },
    managerID: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    }
    ,
    chefIDs: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },
    img:{
        type:String
    },
}
);

module.exports = mongoose.model('Restaurant', Restaurant, "Restaurant");
