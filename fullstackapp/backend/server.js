const express = require("express");
// create express app instance
const app = express();

// Load properties from .env file
require("dotenv").config();

// define app port
const PORT = process.env.PORT;

//add a  GET request mapping
app.get("/hello", (req, res) => {
  console.log(new Date(), "INFO - Served request at /hello");
  res.send("Hey there !");
});

// start app to listen for requests on port 3000
app.listen(PORT, () => {
  // invoke this callback function when app is ready to listen on input port and hostname
  console.log(`Express App is listening on address - http://localhost:${PORT}`);
});
