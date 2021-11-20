const express = require('express');
const ClientRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Client = require('../Models/Client.model');


ClientRoutes.get("/username",(req,res)=>{
    Client.find((err,results)=>{res.json(results[0])})
})


ClientRoutes.post('/changepwd', (req,res)=>{
    console.log(req.query.name);//{ name: 'VHP' }
    Client.updateOne({name: req.query.name},{name: req.query.newname},(err,results)=>{res.json(req.query.newname)})
})



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

module.exports = ClientRoutes;

