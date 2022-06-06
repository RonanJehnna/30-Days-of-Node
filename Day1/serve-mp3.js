const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 3000;

http
  .createServer((request, response) => {
    console.log("Post Number : ", port);
    // MIME Type audio/mp3
    response.writeHead(200, { "Content-Type": "audio/mp3" });
    fs.exists("audio.mp3", (exists) => {
      if (exists) {
        var rstream = fs.createReadStream("audio.mp3");
        rstream.pipe(response);
      } else {
        response.end("Its a 404");
      }
    });
  })
  .listen(port, host);
