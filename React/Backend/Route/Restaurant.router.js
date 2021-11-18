const express = require('express');
const RestaurantRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Restaurant = require('../Models/Restaurant.model');


RestaurantRoutes.post("/", async (req, res) => {

});


module.exports = RestaurantRoutes;

