const express = require("express");
const app = express();
const port = 3000;

const db = require("./config/db");

app.get("/", (req, res) => res.json({ Hello_Word: "Hello World!" }));

app.use(express.urlencoded({ extended: true }));

db.authenticate().then(() => console.log("berhasil terkoneksi"));

// Cread User
const cread = require('./controllers/user/cread')
app.post("/creadUser", async (req, res) => {
  cread(req,res)
});

// Get All User
const getAll = require('./controllers/user/getAll')
app.get("/getUserAll", async (req, res) => {
  getAll(res);
});

// Find User
const findUser = require('./controllers/user/find')
app.get("/getUser/:id", async (req, res) => {
  findUser(req,res)
});

// Delete User
const deleteUser = require('./controllers/user/delete')
app.delete("/deleteUser/:id", async (req, res) => {
    deleteUser(req,res)
});

// Update User
const update = require('./controllers/user/update')
app.put("/updateUser/:id", async (req, res) => {
  update(req,res)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
