const http = require("http");
const fs = require("fs");
const port = 3000;

let server = http.createServer(function (request, respon) {
  if (request.url == "/") {
    respon.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./view/utama.html").pipe(respon);
    //fs.createReadStream()=> membaca file yang diinginkan
    //pipa() => pengirim file yang sudah dibaca
  } else if (request.url == "/beranda") {
    respon.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./view/beranda.html").pipe(respon);
  } else if (request.url == "/profile") {
    respon.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./view/profile.html").pipe(respon);
  } else {
    respon.writeHead(404, { "content-type": "text/html" });
    respon.write("<h1>404 not found</h1>");
    respon.end();
  }
});

server.listen(port, () => {
  console.log(`server sudah on,buka http://localhost:${port}`);
});
