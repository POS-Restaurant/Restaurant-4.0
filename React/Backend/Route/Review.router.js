const express = require("express");
const ReviewRoutes = express.Router();
const config = require("../configure.js");
const jwt = require("jsonwebtoken");

let Review = require("../Models/Review.model");

ReviewRoutes.post("/add", async (req, res)=>{
    try {
        const { customer, idRes, rating, comment } = req.body;
        const newReview = new Review({
            customer,
            idRes,
            rating,
            comment
          });        
        const addNewReview = await newReview.save(); 
        res.send({success: "Đánh giá thành công"})
    } catch (err) {
        res.status(400).json({success: "Đánh giá thất bại"});
    }
}
);


module.exports = ReviewRoutes;

