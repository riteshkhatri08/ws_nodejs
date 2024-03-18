import express from "express";
import dotenv from "dotenv";
import initdb from "./database.js";

// create express app instance
const app = express();

// To load properties from .env file
dotenv.config();

// connect db
initdb();

// define app port
const PORT = process.env.PORT || 3000;

//add a  GET request mapping
app.get("/hello", (req, res) => {
  console.log(new Date(), "INFO - Served request at /hello");
  res.send("Hey there !");
});

// Add another route that returns 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "joke1", content: "Ha" },
    { id: 2, title: "joke2", content: "HaHa" },
    { id: 3, title: "joke3", content: "HaHaHa" },
    { id: 4, title: "joke4", content: "HaHaHaHa" },
    { id: 5, title: "joke5", content: "HaHaHaHaHa" },
  ];

  res.send(jokes);
});

// start app to listen for requests on port 3000
app.listen(PORT, () => {
  // invoke this callback function when app is ready to listen on input port and hostname
  console.log(`Express App is listening on address - http://localhost:${PORT}`);
});
