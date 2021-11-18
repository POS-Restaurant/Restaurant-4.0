const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const session = require('express-session');
const fileupload = require('express-fileupload');

const mongoose = require("mongoose");

const config = require("./configure.js");

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );

const FoodRoutes = require("./Route/Food.router");
const OrderRoutes = require("./Route/Order.router");
const RestaurantRoutes = require("./Route/Restaurant.router");
const ClientRoutes = require("./Route/Client.router");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/Food/", FoodRoutes);
app.use("/Order/", OrderRoutes);
app.use("/Restaurant/", OrderRoutes);
app.use("/Client/", ClientRoutes);

app.use(
  session({
    secret: "kjcxlchiy48236",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(
  fileupload({
    useTempFiles: true,
  })
);
app.use("/public/", express.static("public"));

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
