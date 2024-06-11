const mySql = require("mysql2");

const database = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});

database.connect();

try {
  let sql = `DELETE FROM karyawan WHERE id = 2;`;
  database.query(sql, function (errorSql, hasil) {
    if (errorSql) throw errorSql;

    if (hasil.affectedRows > 0) {
      console.log(`berhasil hapus ${hasil.affectedRows} data`);
    } else {
      console.log(`gagal`);
    }
  });

  database.end();
} catch (error) {
  console.log(error);
}
