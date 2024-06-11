const mySql = require("mysql2");

const database = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});

database.connect();
no;

try {
  let sql = `UPDATE karyawan SET nama = "honey", alamat = "bali" WHERE id = 2;`;
  database.query(sql, function (errorSql, hasil) {
    if (errorSql) throw errorSql;

    if (hasil.affectedRows > 0) {
      console.log(`berhasil edit ${hasil.affectedRows} data`);
    } else {
      console.log(`gagal`);
    }
  });

  database.end();
} catch (error) {
  console.log(error);
}
