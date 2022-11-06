/* 
App.js
Main application file, sets up the server and database connection and listens for API requests 
*/
const express = require("express");
const router = require("./routers/taskRouter");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 8000;

mongoose
  .connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
