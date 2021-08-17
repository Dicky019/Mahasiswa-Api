const error = (err, res) => {
  console.error(err.message);
  res.status(500).send("server error");
};

module.exports = error;
