//   get variable values from '.env config file'
require("dotenv").config();

const serverStart = function () {
  const express = require("express");
  const app = express();

  // get portnumber from .env files
  const port = process.env.PORT;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

module.exports = serverStart;
