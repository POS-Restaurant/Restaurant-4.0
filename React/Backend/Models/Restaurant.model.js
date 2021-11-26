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
    rateNum: {
        type: Number
    },
    listReview: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    listFood: [{
        type: Schema.Types.ObjectId,
    }],
    tableList: {
        type: Array
    },
    managerID: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
    ,
    chefIDs: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    img:{
        type:String
    },
    imgOverview:[{
        type:String
    }],
}
);

module.exports = mongoose.model('Restaurant', Restaurant, "Restaurant");
