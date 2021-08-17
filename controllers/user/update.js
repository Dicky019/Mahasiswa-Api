const User = require("../../models/user");
const error = require("../../error/error");

const update = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const id = req.params.id;

    const updateUser = await User.update(
      {
        username,
        email,
        password,
      },
      { where: { id: id } }
    );

    await updateUser;

    res.json({message:"berhasil di update"});
  } catch (err) {
    error(err, res);
  }
};

module.exports = update;
