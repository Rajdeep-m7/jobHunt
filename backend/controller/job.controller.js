import Job from "../models/job.models.js";

export const createJob = async(req , res)=>{
    
    const {companyName , designation , salary , jobType , category , location , bannerImage , skills , description} = req.body;

    try {
        if( !companyName || !designation || !salary || !jobType || !category || !location || !description){
            return res.status(400).json({
                message:"Missing Form Data"
            })
        }

        const newJob = await Job.create({
           recruiter: req.user.id,
           companyName , designation , salary , jobType , category , location , bannerImage , skills , description,
           status: "active"
        })

        return res.status(201).json({
            message:"new job create",
            newJob
        })

    } catch (error) {
        return res.status(500).json({
        message: "Internal server error",
        error: error.message,
    });
    }
}

export const getAllJobs = async(req , res)=>{
    try {
        const jobs = await Job.find();

        if(jobs.length == 0){
            return res.status(404).json({
                message:"no job found"
            })
        }

        return res.status(200).json({
            success:true,
            jobs
        })

    } catch (error) {
        return res.status(500).json({
        message: "Internal server error",
        error: error.message, 
    });
}
}

export const getJobsBycategory = async(req , res)=>{
    const {category}= req.params;

    try {
        const jobs = await Job.find({category});

        if(jobs.length == 0){
            return res.status(404).json({
                message:"no job found"
            })
        }

        return res.status(200).json({
            success:true,
            jobs
        })

    } catch (error) {
        return res.status(500).json({
        message: "Internal server error",
        error: error.message, 
    });
    }
}

export const getJobsForRecruiter = async(req , res)=>{
    const id= req.user.id;

    try {
        const jobs = await Job.find({ recruiter:id })

        res.status(200).json({
            success: true,
            jobs
        })
    } catch (error) {
        return res.status(500).json({
        message: "Internal server error",
        error: error.message,
    });
    }
}

export const changeStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    job.status = job.status === "active" ? "paused" : "active";

    await job.save();

    return res.status(200).json({
      success: true,
      message: "Job status updated",
      job,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const editJob = async (req, res) => {
  const { id } = req.params;

  const {
    companyName,
    designation,
    salary,
    jobType,
    category,
    location,
    bannerImage,
    skills,
    description,
  } = req.body;

  try {
    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    job.companyName = companyName || job.companyName;
    job.designation = designation || job.designation;
    job.salary = salary || job.salary;
    job.jobType = jobType || job.jobType;
    job.category = category || job.category;
    job.location = location || job.location;
    job.bannerImage = bannerImage || job.bannerImage;
    job.skills = skills || job.skills;
    job.description = description || job.description;

    await job.save();

    return res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};