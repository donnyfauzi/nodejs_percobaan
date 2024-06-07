let gajiPokok = 4000000;
let tunjangan = 750000;
let bpjs = (2.5 / 100) * gajiPokok;
let netGaji = gajiPokok + tunjangan - bpjs;

function slipGaji() {
  let hasil =
    `gaji karyawan bulan juni \n` +
    `======================== \n` +
    `gaji pokok : ${gajiPokok}\n` +
    `tunjangan : ${tunjangan}\n` +
    `potongan BPJS : ${bpjs}\n` +
    `net gaji : ${netGaji}\n`;

  return hasil;
}

module.exports = {
  cetak_slipGaji: slipGaji(),
};
