const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const User = require("./models/userModel");
const userRoute = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/", userRoute);

app.listen(4001, () => {
  console.log("App is running on port 4002");
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB CONNECTED SUCCESFULLY");
  })
  .catch((err) => {
    console.log("error", err);
  });
