const express = require('express');
const ClientRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Client = require('../Models/Client.model');

ClientRoutes.get("/get/list", (req, res) => {
    console.log(req.query);
    Client.find({restaurant:req.query.id},(err,results)=>{
        if (err) {
            console.log(err);
        }
        else {
            res.json({results});
        }
    })
});

ClientRoutes.post("/", async (req, res) => {
    // return res.json({ status:403,msg: "Password is Invalid!" });
    try {
        const { username, password } = req.body;
        // const customer = await Client.findOne({ username: username });

        // if (username == "" || password == "")
        //     return res.json({ status:403,msg: "Username or Password fields are empty" });

        // if (!customer)
        //     return res.json({ status:403,msg: "Invalid Username"});

        // if (password !== customer.password)
        //     return res.json({ status:403,msg: "Password is Invalid!" });

        //jwt secret
        const token = jwt.sign({ id: "1234" }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            Customer: {
                id:username,
                name:password,
            },
        });


    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }
});

ClientRoutes.post("/search", async (req, res) => {
    // return res.json({ status:403,msg: "Password is Invalid!" });
    try {
        const { username, password } = req.body;
        // const customer = await Client.findOne({ username: username });

        // if (username == "" || password == "")
        //     return res.json({ status:403,msg: "Username or Password fields are empty" });

        // if (!customer)
        //     return res.json({ status:403,msg: "Invalid Username"});

        // if (password !== customer.password)
        //     return res.json({ status:403,msg: "Password is Invalid!" });

        //jwt secret
        const token = jwt.sign({ id: "1234" }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            Customer: {
                id:username,
                name:password,
            },
        });


    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }
});

ClientRoutes.post("/update/money", async (req, res) => {
    Client.findOneAndUpdate({_id:req.body.params.id}, req.body.params, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json("Thay đổi thành công");
        }
    })
});

module.exports = ClientRoutes;

