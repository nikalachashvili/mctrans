const userRouter = require("express").Router();

const { addUser } = require("../function/users/add.js");
const { getUser } = require("../function/users/list.js");

userRouter.post("/login", getUser);            
userRouter.post("/register", addUser);              

module.exports = userRouter;
