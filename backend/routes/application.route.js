import express from "express";
import { applyJob, deleteApplication, getApplications } from "../controller/application.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";


const applicationRouter = express.Router();

applicationRouter.post("/apply/:id",applyJob);

applicationRouter.get("/applications",isAuthenticated,getApplications);

applicationRouter.delete("/delete/:id",isAuthenticated,deleteApplication);

export default applicationRouter;