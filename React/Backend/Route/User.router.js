const express = require("express");
const UserRoutes = express.Router();
const config = require("../configure.js");
const jwt = require("jsonwebtoken");

let User = require("../Models/Client.model");

UserRoutes.post("/change_pass", async (req, res) => {
    const filter = { _id: req.query.id };
    const update = { password: req.query.newPass };
    await User.findOneAndUpdate(filter, update, (err, result) => {
        if (err) res.json(err);
        else res.json("Change password successfully");
    });
});

module.exports = UserRoutes;