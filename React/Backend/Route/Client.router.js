const express = require("express");
const ClientRoutes = express.Router();
const config = require("../configure.js");
const jwt = require("jsonwebtoken");

let Client = require("../Models/Client.model");

ClientRoutes.get("/username", (req, res) => {
    Client.find((err, results) => {
        res.json(results[0]);
    });
});

ClientRoutes.get("/username",(req,res)=>{
    Client.find((err,results)=>{res.json(results[0])})
})


ClientRoutes.post('/changepwd', (req,res)=>{
    console.log(req.query.name);//{ name: 'VHP' }
    Client.updateOne({name: req.query.name},{name: req.query.newname},(err,results)=>{res.json(req.query.newname)})
})


ClientRoutes.post('/changepwd', (req,res)=>{
    console.log(req.query.name);//{ name: 'VHP' }
    Client.updateOne({name: req.query.name},{name: req.query.newname},(err,results)=>{res.json(req.query.newname)})
})

ClientRoutes.post('/update', (req,res)=>{
    console.log(req.query);
    Client.updateOne({_id: req.query.id},req.query,(err,results)=>{res.json(req.query)});
});
ClientRoutes.get("/login", (req, res) => {
    Client.findOne({email:req.query.email,pwd:req.query.pwd},function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(results);
        }
    });
});


ClientRoutes.get("/list", (req, res) => {
    Client.find(function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({results});
        }
    });
});
ClientRoutes.post('/insert/pwd',(req,res)=>{
    Client.updateMany({},{pwd:'123456'},function(err,results){
        if(err)throw(err);
        res.json(results);
    })
})
ClientRoutes.post('/insert/pwd',(req,res)=>{
    const input=req.body.params;
    
    Client.findOneAndUpdate({_id:input.id,pwd:input.pwd},{pwd:input.newpwd},function(err,results){
        if(err)throw(err);
        res.json(results);
    })
})
ClientRoutes.post('/register',(req,res)=>{
    const input=req.body.params;
    const token = jwt.sign({ id: "1234" }, config.JWT_SECRET, { expiresIn: '1h' });
    
    Client.insertMany([{name:input.name, email:input.email, pwd:input.pwd}],function(err,results){
        if(err)res.status(200).json({msg:"Lỗi đăng ký!"});
else{         const token = jwt.sign({ id: "1234" }, config.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
        token,msg:"Đăng ký thành công!"
    });
};})})


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
        const token = jwt.sign({ id: "1234" }, config.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({
            token,
            Customer: {
                id: username,
                name: password,
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
        const token = jwt.sign({ id: "1234" }, config.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({
            token,
            Customer: {
                id: username,
                name: password,
            },
        });
    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }
});

ClientRoutes.post("/change_pass", async (req, res) => {
    const filter = { _id: req.query.id };
    const update = { password: req.query.newPass };
    await Client.findOneAndUpdate(filter, update, (err, result) => {
        if (err) res.json(err);
        else res.json("Successfully removed");
    });
});

// RestaurantRoutes.post("/delete/ResInfo", async (req, res) => {
//     await Restaurant.find({ id: req.query.id }, function (err, result) {
//         if (err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = ClientRoutes;
