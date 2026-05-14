import { useEffect, useState } from "react";
import api from "../config/axios";
import { useNavigate } from "react-router";

const Admindashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);

        const res = await api.get("/job/getjobsForRecruiter");

        setJobs(res.data.jobs || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/job/delete/${id}`);

      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.log(err);
      alert("Failed to delete job");
    }
  };

  const handleStatusChange = async (id) => {
    try {
      const res = await api.patch(`/job/changeStatus/${id}`);

      setJobs((prev) =>
        prev.map((job) => (job._id === id ? res.data.job : job)),
      );
    } catch (err) {
      console.log(err);
      alert("Failed to update status");
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center text-lg font-semibold">
        Loading Jobs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Recruiter Job Dashboard
            </h1>

            <p className="text-sm text-gray-500 mt-1">Manage all posted jobs</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-275">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Company
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Designation
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Salary
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Job Type
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Location
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-12 text-gray-500 font-medium"
                  >
                    No Jobs Found
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr
                    key={job._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-all duration-150"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            job.bannerImage || "https://placehold.co/60x60/png"
                          }
                          alt="banner"
                          className="w-12 h-12 rounded-lg object-cover border"
                        />

                        <div>
                          <h2 className="font-semibold text-gray-800 text-sm">
                            {job.companyName}
                          </h2>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700 font-medium">
                      {job.designation}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      ₹ {job.salary?.toLocaleString()}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {job.category}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {job.jobType}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {job.location}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleStatusChange(job._id)}
                          className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                            job.status === "active"
                              ? "bg-green-500"
                              : "bg-gray-400"
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                              job.status === "active"
                                ? "translate-x-7"
                                : "translate-x-0"
                            }`}
                          />
                        </button>

                        <span
                          className={`text-sm font-medium ${
                            job.status === "active"
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {job.status === "active" ? "Active" : "Paused"}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3 text-sm">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          View
                        </button>

                        <span className="text-gray-300">|</span>

                        <button
                          onClick={() => navigate(`/recruiter/edit/${job._id}`)}
                          className="text-gray-700 hover:text-black font-medium"
                        >
                          Edit
                        </button>

                        <span className="text-gray-300">|</span>

                        <button
                          onClick={() => handleDelete(job._id)}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
