const mySql = require("mysql2");

const database = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});

database.connect();

try {
  let sql = `INSERT INTO karyawan
  (nama, alamat, no_telepon, golongan_darah, jenis_kelamin, departemen_id, jabatan_id)
  VALUES
  ("Naruto", "Jakarta", "081299990000", "A", "L", 1, 2)`;
  database.query(sql, function (errorSql, hasil) {
    if (errorSql) throw errorSql;

    if (hasil.affectedRows > 0) {
      console.log(`berhasil memasukan ${hasil.affectedRows} data`);
    } else {
      console.log(`gagal`);
    }
  });

  database.end();
} catch (error) {
  console.log(error);
}
