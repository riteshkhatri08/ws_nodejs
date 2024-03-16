// In the routes.js file, we will build routes to handle various client requests and send an appropriate response to the browser
//  We will also be writing code here to save user input in a separate file in our server.

const requestListener = (req, res) => {
  //  GRAB URL
  const url = req.url;

  // Take action if url  = "/"
  if (url === "/") {
    // RETURN BELOW HTML CODE for "/" Request
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>All the Feels</title></head>");
    res.write(
      '<body><h1>Hey there, welcome to the mood tracker!</h1><p>Enter your mood below and hit send to save your mood.</p><form action = "/mood" method="POST"><input type = "text" name="mood"><button type = "submit">Send</button></body>'
    );
    res.write("</html>");
    return res.end();
  }

  console.log("URL --- " + url);
  if (url === "/mood") {
    // RETURN BELOW HTML CODE for "/" Request
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>All the Feels</title></head>");
    res.write(
      '<body><h1>Hey there, welcome to the mood tracker!</h1><p>Your mood has been recorded</p><button type = "submit" onclick=\'location.href = "localhost:3000/"\'>OK !!</button></body>'
    );
    res.write("</html>");
    return res.end();
  }
};
module.exports = requestListener;
