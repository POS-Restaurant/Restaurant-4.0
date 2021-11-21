const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Food = new Schema({
    id: {
        type: String,
        unique: true
    },
    Restaurant: {
        type: String
    },
    name: {
        type: String,
        unique: true
    },
    kind: {
        type: String
    },
    img: {
        type:String
    },
    protein: {
        type:Date
    },
    material: {
        type:String
    }
    ,
    decoration: {
        type:String
    }
    ,
    rating: {
        type: Number
    },
    price:{
        type:Number
    }
}
);

module.exports = mongoose.model('Food', Food, "Food");
