import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../config/axios";
import RecruiterHeader from "./RecruiterHeader";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    companyName: "",
    designation: "",
    salary: "",
    jobType: "",
    category: "",
    location: "",
    bannerImage: "",
    skills: "",
    description: "",
  });

  const categories = [
    "Management",
    "Marketing & Sale",
    "Design",
    "Retail and Product",
    "Development",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/job/${id}`);

        const job = res.data.job;

        setFormData({
          companyName: job.companyName || "",
          designation: job.designation || "",
          salary: job.salary || "",
          jobType: job.jobType || "",
          category: job.category || "",
          location: job.location || "",
          bannerImage: job.bannerImage || "",
          skills: job.skills?.join(", ") || "",
          description: job.description || "",
        });

      } catch (error) {
        console.log(error);
        alert("Failed to fetch job");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,

        salary: Number(formData.salary),

        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      };

      await api.put(`/job/edit/${id}`, payload);

      alert("Job updated successfully");

      navigate("/recruiter/home");

    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
        "Failed to update job"
      );
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
    <RecruiterHeader />
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Edit Job
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Company Name
            </label>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Designation
              </label>

              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Salary
              </label>

              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Job Type
              </label>

              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="">Select Job Type</option>

                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="">Select Category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Banner Image URL
              </label>

              <input
                type="text"
                name="bannerImage"
                value={formData.bannerImage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Skills
            </label>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="8"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div className="flex gap-4 pt-2">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md"
            >
              Update Job
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
    </>
  );
};

export default EditJob;