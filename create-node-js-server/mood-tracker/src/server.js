



const startServer = function () {
  // In the server.js file, we will we will import all the necessary components to set up a server.
  // Server will be set up to listen for client requests.
  // There are several core modules available in Node.js. Among these, http core module has the ability to launch a server.
  console.log("hello");
  const http = require("http");

  // One of the functionalities of http module is the createServer() method.
  // This method creates a server and accepts a requestListener function that has two parameters: HTTP request(req) and response(res).
  // However, we will be passing routes here instead as we will be defining requestListener in routes.js.

  const routes = require("./routes");
  const server = http.createServer(routes);

  // Lastly, our server needs to listen for incoming requests from the browser.
  // We accomplish that by using the listen() method to create a listener on a specified port.
  // Pass in 3000 as an argument in server.listen() method.

  server.listen(3000);
};

module.exports = startServer;
