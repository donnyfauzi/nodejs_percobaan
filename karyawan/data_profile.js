// let nama = "donny";
// let alamat = "jakarta";

// // console.log(nama + alamat);
// module.exports = {
//   nama,
//   alamat,
// };

// by function
let nama = "donny";
let alamat = "jakarta";

function biodata() {
  return `nama " ${nama}\n alamat: ${alamat}\n pekerjaan : Programer`;
}

// console.log(nama + alamat);
module.exports = {
  nama,
  alamat,
  cetakbiodata: biodata(),
};
