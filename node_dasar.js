let nama = "Aji";
let alamat = "Jakarta";
let gajian = 100000 * 30 - 35000;

// menggunakan modul http yg sudah disiapkan oleh node.js
// modul http berfungsi untuk
// membuat komputer kita bisa diakses dari luar
// (dengan menggunakan internet)
// localhost adalah replika (dummy) dari situs web asli tapi hanya jalan di komputer kita
// untuk keperluan pengembangan/pembuatan aplikasi
const http = require("http");

let server = http.createServer((req, res) => {
  // mendefinisikan status code dan tipe konten yg ingin diberikan ke user
  res.writeHead(200, { "Content-Type": "text/html" });

  // isi konten
  res.end("<h1>" + nama + "</h1>" + " " + alamat + " " + gajian + "m");
});

// konfigurasi port yg ingin digunakan
// karena port default (80) sudah dipakai oleh software lain
// jadi kita pakai port yg free
server.listen(3000, () => {
  console.log("server sudah siap jalan");
});
