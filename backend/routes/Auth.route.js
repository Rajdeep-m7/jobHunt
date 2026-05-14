import express from "express";
import { login, logout, signUp } from "../controller/auth.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import User from "../models/user.models.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signUp",signUp);
authRouter.post("/logout",logout);

authRouter.get("/me",isAuthenticated ,async(req , res)=>{
    const user = await User.findById(req.user.id).select("-password");

    res.json({
      user,
    });
})

export default authRouter;