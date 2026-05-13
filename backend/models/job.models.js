import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
    companyName: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },

    salary: {
        type: Number,
        required: true,
    },

    jobType: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Internship", "Remote"],
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    bannerImage: {
        type: String,
    },

    skills: [
        {
            type: String,
        },
    ],

    description: {
        type: String,
        required: true,
    },
    },{
        timestamps:true,
    }
)

const Job = mongoose.model("Job",jobSchema);

export default Job;