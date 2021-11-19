const express = require('express');
const FoodRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Food = require('../Models/Food.model');
let Client = require('../Models/Client.model');
// Food user validation

FoodRoutes.post("/", async (req, res) => {

});



module.exports = FoodRoutes;

