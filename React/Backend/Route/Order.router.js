const express = require('express');
const OrderRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Order = require('../Models/Order.model');

// OrderRoutes.post("/", async (req, res) => {

// });

// OrderRoutes.get("/list", (req, res) => {
//     Order.find(function (err, results) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.json({results});
//         }
//     });
// });

OrderRoutes.get("/get/list", (req, res) => {
    console.log(req.query);
    Order.find({restaurant:req.query.id},(err,results)=>{
        if (err) {
            console.log(err);
        }
        else {
            res.json({results});
        }
    })
});

OrderRoutes.post("/update/state", async (req, res) => {
    Order.findOneAndUpdate({_id:req.body.params.id}, req.body.params, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json("Thay đổi thành công");
        }
    })
});

module.exports = OrderRoutes;


