const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 3000;

http
  .createServer((request, response) => {
    console.log("Port Number : " + port);
    // MIME type text/html
    response.writeHead(200, { "Content-Type": "text/html" });
    // reading content of file
    fs.readFile("index.html", (err, data) => {
      // checking for errors
      if (err) throw err;
      console.log("Operation Success");
      // sending the response
      response.end(data);
    });
  })
  .listen(port, host);
