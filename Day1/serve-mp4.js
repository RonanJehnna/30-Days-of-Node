var http = require("http");
var fs = require("fs");

const host = "127.0.0.1";
const port = 3000;

http
  .createServer(function (req, res) {
    console.log("Port Number :" + port);
    // MIME type 'video/mp4'
    res.writeHead(200, { "Content-Type": "video/mp4" });
    fs.exists("video.mp4", function (exists) {
      if (exists) {
        var rstream = fs.createReadStream("video.mp4");
        rstream.pipe(res);
      } else {
        res.send("Its a 404");
        res.end();
      }
    });
  })
  .listen(port, host);
