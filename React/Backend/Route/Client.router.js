const express = require('express');
const ClientRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Client = require('../Models/Client.model');


ClientRoutes.post("/", async (req, res) => {

});


module.exports = ClientRoutes;

