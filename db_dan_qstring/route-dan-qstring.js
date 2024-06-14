const http = require("http");
const URL = require("url");
const qs = require("querystring");
const port = 3000;
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});
db.connect();

http
  .createServer(function (req, res) {
    let url_asli = req.url;
    let url_pathname = URL.parse(url_asli).pathname;
    let url_querystring = URL.parse(url_asli).query;
    let url_object = qs.parse(url_querystring);

    switch (url_pathname) {
      case "/":
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>Beranda</h1>");
        res.end();
        break;
      case "/karyawan/nama":
        res.writeHead(200, { "Content-Type": "text/html" });
        db.query(
          `SELECT * FROM karyawan WHERE nama = ?`,
          [url_object.q],
          function (errorSql, hasil) {
            if (errorSql) throw errorSql;

            let datakaryawan = "";
            if (hasil.length > 0) {
              for (const i in hasil) {
                datakaryawan +=
                `<ul>
                <li>Nama: ${hasil[i].nama}</li>
                <li>Alamat: ${hasil[i].alamat}</li>
                <li>JK: ${hasil[i].jenis_kelamin == "L" ? "Laki" : "Perempuan"}</li>
                </ul>`;
              }
            } else {
              datakaryawan = `<h2>Tidak ada karyawan dengan nama ${url_object.q}</h2>`;
            }

            res.write(datakaryawan);
            res.end();
          }
        );
        break;
      case "/karyawan/jenis-kelamin":
        res.writeHead(200, { "Content-Type": "text/html" });
        db.query(
          `SELECT * FROM karyawan WHERE jenis_kelamin = ?`,
          [url_object.q],
          function (errorSql, hasil) {
            if (errorSql) throw errorSql;

            let datakaryawan = "";
            if (hasil.length > 0) {
              for (const i in hasil) {
                datakaryawan += `<ul>
                            <li>Nama: ${hasil[i].nama}</li>
                            <li>Alamat: ${hasil[i].alamat}</li>
                            <li>JK: ${
                              hasil[i].jenis_kelamin == "L"
                                ? "Laki"
                                : "Perempuan"
                            }</li>
                        </ul>`;
              }
            } else {
              datakaryawan = `<h2>Tidak ada karyawan dengan jenis kelamin ${url_object.q}</h2>`;
            }

            res.write(datakaryawan);
            res.end();
          }
        );
        break;
      default:
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("<h1>404!! Halaman tidak ditemukan</h1>");
        res.end();
        break;
    }
  })
  .listen(port, function () {
    console.log(`server sudah on, buka http://localhost:${port}`);
  });
