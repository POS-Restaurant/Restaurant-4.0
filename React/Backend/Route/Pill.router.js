const express = require('express');
const PillRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Client = require('../Models/Client.model');
let Pill = require('../Models/Pill.model')
PillRoutes.post("/", async (req, res) => {

    try {
        const { name } = req.body;
        const customer = await Pill.find({ customer: name });
        res.send({success: "Success", PillList: customer})

    } catch (err) {
        res.status(400).json({success: "Fail"});
    }

});

PillRoutes.post("/updateMoney", async (req, res) => {

    try {
        const { name , amount, stas } = req.body;
        const Clinet = await Client.findOne({ _id: name });
        let count = 0;
        if (stas =="Nạp")
            count = Number(Clinet.money)+Number(amount);
        else{
            count = Number(Clinet.money)-Number(amount);
            if (count < 0)
            res.send({success: "Not enough money"})
        }
        const newCus = new Pill({
            customer: name,
            dateOfReceipt: new Date(),
            state: stas,
            total: amount
          });        
        const Check2 = await newCus.save(); 
        const Check1 = await Client.findOneAndUpdate({ _id: name }, {money: count});
        res.send({success: "Success",customer: Clinet})
    } catch (err) {
        res.status(400).json({success: "Fail"});
    }

});
module.exports = PillRoutes;