//panggil
const mySql = require("mysql2");

const database = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});

try {
  database.query("SELECT * FROM karyawan ", function (error, hasil) {
    if (error) {
      throw error;
    } else {
      console.log(hasil);
    }
  });
} catch (err) {
  console.log(err);
}
