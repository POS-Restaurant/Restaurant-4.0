const express = require('express');
const StaffRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Staff = require('../Models/Staff.model');

StaffRoutes.post("/", async (req, res) => {

});



module.exports = StaffRoutes;


