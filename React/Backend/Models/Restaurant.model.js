const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Restaurant = new Schema({
    id: {
        type: String,
        unique: true
    },
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
    }
}
);

module.exports = mongoose.model('Restaurant', Restaurant, "Restaurant");
