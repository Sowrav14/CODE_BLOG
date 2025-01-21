import { Request, Response } from "express";
import { userCont } from "../Controllers/user.controller";

const express = require("express");
const userRouter = express.Router();
const cors = require("cors")

// Routes here...

userRouter.get('/', (req : Request, res : Response) => {
    res.json("hi there");
})

userRouter.get("/login", userCont.logIn);
userRouter.put("/signup", userCont.singUp);



module.exports = userRouter;