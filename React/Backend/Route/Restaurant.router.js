const express = require('express');
const RestaurantRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');
let Food = require('../Models/Food.model');

let Restaurant = require('../Models/Restaurant.model');

RestaurantRoutes.get("/get/ResInfo:id", async (req, res) => {
    let id = Restaurant(req.query.id);
    await Restaurant.findById(id, function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(results);
        }
    });
});
RestaurantRoutes.get("/get/res_info", async (req, res) => {
    Restaurant.find({_id: req.query.id}, (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({results});
        }
    });
});
RestaurantRoutes.get("/list", (req, res) => {
    Restaurant.find(function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({results});
        }
    });
});
RestaurantRoutes.get("/get/menu",  (req, res) => {
    
    
});
RestaurantRoutes.get("/delete/menu", (req, res) => {
    Food.remove({},(err,results)=>{
        res.json('Removed');
    });
    
});

RestaurantRoutes.post("/delete/ResInfo", async (req, res) => {
    await Restaurant.find({ id: req.query.id }, function (err, result) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = RestaurantRoutes;

