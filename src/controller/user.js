const User = require("../models/User");
const jwt = require("jsonwebtoken");
// const generateToken = require("../src/lib/token");

require("dotenv").config();

var payload = {
  data1: "Data 1",
  data2: "Data 2",
  data3: "Data 3",
  data4: "Data 4"
};
console.log(process.env.JWT_SECRET);
module.exports = {
  async getAllUser(req, res) {
    try {
      const userCollection = await User.find({});
      res.status(201).send(userCollection);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  async createUser(req, res, next) {
    try {
      const { id, password } = req.body;
      const existAccount = await User.findOne({ where: id });
      if (existAccount) {
        return res.status(409).json({ code: 409, message: "Already Exist Id" });
      }
      await User.create({ id, password });
      return res.json({ message: "Sign Up success!" });
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async signinUser(req, res) {
    try {
      const { id, password } = req.body;
      await User.findOne({ where: { id: id } }).then(user => {
        if (!user) {
          return res.status(404).send("User Not Found");
        }
        if (user.dataValues.password === password) {
          const token = jwt.sign(
            { exp: Math.floor(Date.now() / 1000) + 60 },
            process.env.JWT_SECRET
          );
          console.log(token);
          return res.status(200).send("Login is Success");
        } else {
          return res.status(401).send("Invalid Password!");
        }
      });
    } catch (e) {
      res.status(500).send(e);
    }
  }
};
