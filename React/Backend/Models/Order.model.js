const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Order = new Schema({
    id: {
        type: String,
        unique: true
    },
    Restaurant: {
        type: String
    },
    statAs:{
        type: string
    },
    FoodIDs:{
        type: Array
    },
    FoodAmount:{
        type: Array
    },
    total:{
        type: Number
    }
}
);

module.exports = mongoose.model('Food', Food, "Food");
