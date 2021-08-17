const sequelize = require("sequelize");

const db = new sequelize("mahasiswa", "root", "", {
  dialect: "mysql",

  query: {
    raw: true,
  },
  logging: true,
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true,
  },
  timezone: "+09:00", //for writing to database
});

db.sync({});

module.exports = db;
