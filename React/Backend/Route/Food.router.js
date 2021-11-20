const express = require('express');
const FoodRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Food = require('../Models/Food.model');
let Client = require('../Models/Client.model');
// Food user validation

FoodRoutes.get("/get/", async (req, res) => {
    console.log(req.query.id);
Food.find ((err,food)=>{
    res.json(food);
})
});

FoodRoutes.get("/get/menu", async (req, res) => {
    Food.find ({Restaurant:req.query.id},async(err,results)=>{
        res.json({result:results});
    })
});
FoodRoutes.get("/get/food", (req, res) => {
    console.log(req.query);
 Food.find({id:req.query.id},function(err,food){
    res.json(food);
})
});


FoodRoutes.post("/edit/food", async (req, res) => {
Food.findByIdAndUpdate(req.body.params.id, req.body.params,function (err, results) {
    if (err) {
        console.log(err);
    }
    else {
        res.json(results);
    }
})
});
FoodRoutes.post("/add/food", async (req, res) => {
    Food.create( req.body.params,function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(results);
        }
    })
    });
FoodRoutes.post("/del/food", async (req, res) => {
    Food.findByIdAndRemove(req.body.params.id, req.body.params,function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(results);
        }
    })
    });
module.exports = FoodRoutes;

