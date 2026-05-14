import express from "express"
import { isAuthenticated } from "../middleware/auth.middleware.js";
import { changeStatus, createJob, deleteJob, editJob, getAllJobs, getJobsBycategory,  getJobsForRecruiter, getOneJob } from "../controller/job.controller.js";

const jobRouter = express.Router();

jobRouter.post("/addjob",isAuthenticated ,createJob );
jobRouter.get("/allJobs",getAllJobs);
jobRouter.get("/getjobsByCategory/:category",getJobsBycategory);
jobRouter.get("/getjobsForRecruiter",isAuthenticated,getJobsForRecruiter);
jobRouter.patch("/changeStatus/:id",isAuthenticated,changeStatus);
jobRouter.delete("/delete/:id", isAuthenticated , deleteJob);
jobRouter.put("/edit/:id" , isAuthenticated , editJob);
jobRouter.get("/:id",getOneJob);

export default jobRouter;