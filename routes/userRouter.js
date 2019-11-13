const express = require("express");
const User = require("../src/controller/user");
const userRouter = express.Router();
userRouter.get("/", User.getAllUser);
userRouter.post("/signup", User.createUser);
userRouter.post("/signin", User.signinUser);
module.exports = userRouter;
