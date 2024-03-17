const express = require("express");
// create express app instance
const app = express();

// define app port
const PORT = 3000;
//add a  GET request mapping
app.get("/hello", (req, res) => {
  console.log(new Date(), "INFO - Served request at /hello");
  res.send("Hey there !");
});
// start app to listen for requests on port 3000
app.listen(PORT, () => {
  // invoke this callback function when app is ready to listen on input port and hostname
  console.log(`Express is listening on address - http://localhost:${PORT}`);
});
 