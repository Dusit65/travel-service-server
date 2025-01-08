const express = require("express"); // call express module to create web server
require("dotenv").config(); // call to use .env

const app = express(); // create web server
const PORT = process.env.PORT || 3000;

//test call web server
app.get("/", (req, res) => {
  res.json({ message: "Hello from server port " + PORT + " DTI SAU 555" }); //send message
});

//create web server connection from client/user
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
