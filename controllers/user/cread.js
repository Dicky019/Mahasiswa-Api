const User = require("../../models/user");
const error = require("../../error/error");

const cread = async (req, res) => {
  try {
    //   destructuring object
    const {
      nama,
      nim,
      jenis_kelamin,
      perguruan_tinggi,
      program_studi,
      jenjang,
    } = req.body;

    // initialize models database
    const newUser = new User({
      nama,
      nim,
      jenis_kelamin,
      perguruan_tinggi,
      program_studi,
      jenjang,
    });

    // await = menjalankan kode models user
    await newUser.save();

    // menampilkan newuser ketika di save postman
    res.json({ message: "berhasil menginput data" });
  } catch (err) {
    error(err, res);
  }
};

module.exports = cread;
