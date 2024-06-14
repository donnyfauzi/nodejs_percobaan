const http  = require("http");
const URL   = require("url");
const qs    = require("querystring");
const port  = 3000;
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});

db.connect()

let server = http.createServer(function (req, res) {
    let url_asli        = req.url;
    let url_querystring = URL.parse(url_asli).query;
    let url_object = qs.parse(url_querystring);
    
    res.writeHead(200, { "content-type": "text/html" })
    db.query(`SELECT * FROM karyawan WHERE nama = ?`,[url_object.nama], function (errorsql, hasil) {
        if (errorsql) throw errorsql

        let datakaryawan = ""
        
      for (const i in hasil)
       {
        datakaryawan +=
            `<ul>
              <li> Nama : ${hasil[i].nama}</li>
              <li>Alamat : ${hasil[i].alamat}</li>
              <li>gol darah : ${hasil[i].golongan_darah}</li>
             </ul>`;
              
               
                
        }
        res.write(datakaryawan)
        res.end
    })
})

server.listen(port, function (){
  console.log(`server sudah on,buka http://localhost:${port}`)
})



  