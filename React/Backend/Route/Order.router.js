const express = require('express');
const OrderRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Order = require('../Models/Order.model');
let Client = require('../Models/Client.model');
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

OrderRoutes.post("/", async (req, res)=>{
    try {
        const { customer , restaurant, dateOfPurchase, dateOfReceipt, listFood, listNote, listNum, total } = req.body;
        const Clinet = await Client.findOne({ _id: customer });
        count = Number(Clinet.money)-total;
        if (count<0){
            res.send({success:"Not enough money"});
            return;
        }
        let state = "Pending";
        const newCus = new Order({
            customer,
            restaurant,
            state,
            dateOfPurchase,
            dateOfReceipt,
            listFood,
            listNote,
            listNum,
            total
          });        
        const Check2 = await newCus.save(); 
        const Check1 = await Client.findOneAndUpdate({ _id: customer }, {money: count});
        res.send({success: "Success",customer: Clinet})
    } catch (err) {
        res.status(400).json({success: "Fail"});
    }
}
);

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
OrderRoutes.get("/get/my_orders", (req, res) => {
    console.log(req.query);
    Order.find({customer:req.query.idCus, restaurant:req.query.idRes },(err,results)=>{
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


