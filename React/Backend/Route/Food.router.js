const express = require('express');
const FoodRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Food = require('../Models/Food.model');
let Client = require('../Models/Client.model');
// Food user validation

// FoodRoutes.get("/get/", async (req, res) => {
//     console.log(req.query.id);
// Food.find ((err,food)=>{
//     res.json(food);
// })
// });
FoodRoutes.get("/list", (req, res) => {
    Food.find(function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({results});
        }
    });
});


FoodRoutes.get("/get/list_food_res", (req, res) => {
    console.log(req.query);
    Food.find ({Restaurant:req.query.id},(err, results)=>{
        res.json({results});
    })
});
FoodRoutes.get("/get/menu", (req, res) => {
    console.log(req.query);
    Food.find ({Restaurant:req.query.id},(err,results)=>{
        res.json({result:results});
    })
});
FoodRoutes.get("/get/food", (req, res) => {
    console.log(req.query);
 Food.findById(req.query.id,function(err,food){
    res.json(food);
})
});

FoodRoutes.post("/update/rating", async (req, res) => {
    Food.findByIdAndUpdate({_id: req.body.params.id}, req.body.params,function (err, results) {
    if (err) {
        console.log(err);
    }
    else {
        res.json("Thay đổi thành công");
    }
})
});

FoodRoutes.post("/edit/food", async (req, res) => {
    console.log(req.body.params);
    Food.findByIdAndUpdate(req.body.params._id, req.body.params,function (err, results) {
    if (err) {
        console.log(err);
    }
    else {
        res.json("Thay đổi thành công");
    }
})
});
FoodRoutes.post("/delete/food", async (req, res) => {
    Food.findByIdAndRemove(req.body.params._id,function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({msg:'Xóa món ăn thành công'});
        }
    })
    });
FoodRoutes.post("/add/food", async (req, res) => {
    Food.create( req.body.params,function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({msg:"Thêm món ăn thành công"});
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

