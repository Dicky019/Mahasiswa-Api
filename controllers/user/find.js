const User = require("../../models/user");
const error = require("../../error/error");
const findUser =  async (req,res ) => {
    try {
        const id = req.params.id;
    
        const getUser = await User.findOne({
          where: { id: id },
        });
    
        res.json(getUser);
      } catch (err) {
        error(err,res)
      }
}

module.exports = findUser;