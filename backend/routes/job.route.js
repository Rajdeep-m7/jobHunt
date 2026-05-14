import express from "express"
import { isAuthenticated } from "../middleware/auth.middleware.js";
import { createJob } from "../controller/job.controller.js";

const jobRouter = express.Router();

jobRouter.post("/addjob",isAuthenticated ,createJob );

export default jobRouter;