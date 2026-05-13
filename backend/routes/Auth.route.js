import express from "express";
import { login, logout, signUp } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signUp",signUp);
authRouter.post("/logout",logout);

export default authRouter;