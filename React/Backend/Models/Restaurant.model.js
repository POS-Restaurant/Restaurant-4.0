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
    foodList: {
        type: Array
    },
    tableList: {
        type: Array
    }
    ,
    managerID: {
        type: String
    }
    ,
    chefIDs: {
        type: Array
    },
    img:{
        type:String
    },
}
);

module.exports = mongoose.model('Restaurant', Restaurant, "Restaurant");
