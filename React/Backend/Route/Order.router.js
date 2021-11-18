const express = require('express');
const OrderRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Order = require('../Models/Order.model');

OrderRoutes.post("/", async (req, res) => {

});



module.exports = OrderRoutes;


