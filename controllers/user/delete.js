const User = require("../../models/user");
const error = require("../../error/error");

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteUser = await User.destroy({
      where: { id: id },
    });

    await deleteUser;

    res.json({message:"berhasil di hapus"});
  } catch (err) {
      error(err,res)
  }
};

module.exports = deleteUser;
