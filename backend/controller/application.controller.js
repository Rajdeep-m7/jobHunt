import Application from "../models/application.models.js";
import Job from "../models/job.models.js";

export const applyJob = async (req, res) => {
  const { id } = req.params;

  const { name, email, phoneNumber, resumeLink } = req.body;

  try {
    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    const application = await Application.create({
      job: id,
      name,
      email,
      phoneNumber,
      resumeLink,
    });

    return res.status(201).json({
      message: "Application submitted",
      application,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getApplications = async (req, res) => {
  try {
    const jobs = await Job.find({
      recruiter: req.user.id,
    });

    const jobIds = jobs.map((job) => job._id);

    const applications = await Application.find({
      job: { $in: jobIds },
    }).populate("job");

    return res.status(200).json({
      applications,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteApplication = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    await Application.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
