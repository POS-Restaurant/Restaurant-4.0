const express = require('express');
const ClientRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Client = require('../Models/Client.model');


ClientRoutes.post("/", async (req, res) => {
    // return res.json({ status:403,msg: "Password is Invalid!" });
    const token = jwt.sign({ id: "1234" }, config.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
        token,
        Customer: {
            id: "1233",
            name: "456",
        },
    });
});


module.exports = ClientRoutes;

