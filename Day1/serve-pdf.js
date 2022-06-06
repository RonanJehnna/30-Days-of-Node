const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 3000;
console.log("Server will listen at :  127.0.0.1:3000 ");
http
  .createServer((request, response) => {
    // MIME Type application/pdf
    response.writeHead(200, { "Content-Type": "application/pdf" });

    fs.readFile("index.pdf", (error, data) => {
      if (error) response.json({ status: "error", msg: error });
      else {
        response.write(data);
        response.end();
      }
    });
  })
  .listen(port, host);
