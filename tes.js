const http = require("http");

let server = http.createServer((req, res) => {
  console.log("tes hidupkan server");
  res.writeHead(200, { "content-Type": "text/html" });
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("server siap jalan");
});
