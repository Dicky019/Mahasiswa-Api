const sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "mahasiswa",
  {
    nama: { type: sequelize.STRING },
    nim : { type: sequelize.STRING },
    jenis_kelamin: { type: sequelize.STRING },
    perguruan_tinggi: { type: sequelize.STRING },
    program_studi: { type: sequelize.STRING },
    jenjang: { type: sequelize.STRING },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
