const User = require("../../models/user");
const error = require("../../error/error")

const getAll = async (res) =>{ try {
    const getAllUser = await User.findAll({});
    const dataUser = {
      total_user : getAllUser.length,
      data : getAllUser
    }
    res.json(dataUser);
  } catch (err) {
    error(err,res);
  }
}

module.exports = getAll;