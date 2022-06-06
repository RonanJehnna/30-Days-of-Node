const http = require("http");

const host = "127.0.0.1";
const port = 3000;
console.log("Server will listen at : " + host + ":" + port);
http
  .createServer((request, response) => {
    // MIME Type application/json
    response.writeHead(200, { "Content-Type": "application/json" });
    // Create a JSON
    let json_response = {
      status: 200,
      message: "successful",
      result: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      code: 2000,
    };
    console.log("Server Running");
    response.end(JSON.stringify(json_response));
  })
  .listen(port, host);
