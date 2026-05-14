import { useState } from "react";
import api from "../config/axios";
import { PiBagFill } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    resumeLink: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleApply = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post(`/application/apply/${job._id}`, formData);

      alert(res.data.message);

      setOpen(false);

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        resumeLink: "",
      });
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed to apply");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white rounded-lg p-4 max-w-80 min-w-64 shadow hover:shadow-lg transition-all duration-300">
        <div className="w-full">
          <div className="flex gap-3 justify-start items-center">
            <img
              src={job.bannerImage || "https://placehold.co/60x60/png"}
              className="h-14 w-14 rounded object-cover"
              alt="company"
            />

            <div>
              <p className="font-semibold text-gray-800">{job.companyName}</p>

              <p className="text-sm text-gray-600">{job.designation}</p>
            </div>
          </div>

          <div className="flex justify-start my-3 gap-5 items-center flex-wrap">
            <p className="flex justify-between items-center gap-1 text-sm">
              <PiBagFill className="text-blue-600" />
              {job.category}
            </p>

            <p className="flex justify-between items-center gap-1 text-sm">
              <CiClock2 className="text-blue-600" />
              {job.jobType}
            </p>
          </div>

          <div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {job.description?.slice(0, 120)}...
            </p>
          </div>

          <div className="flex gap-2 my-3 overflow-hidden flex-wrap">
            {job.skills?.map((skill, index) => (
              <p
                key={index}
                className="bg-gray-200 border border-gray-300 rounded px-2 py-1 text-xs text-gray-800"
              >
                {skill}
              </p>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setOpen(true)}
              className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-3 py-1 rounded cursor-pointer transition-all duration-200"
            >
              Apply now
            </button>

            <p className="font-semibold text-gray-700 text-sm">
              ₹ {job.salary}
            </p>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3">
          <div className="bg-white w-full max-w-md rounded-xl p-5 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="flex gap-3 items-center mb-4">
              <img
                src={job.bannerImage || "https://placehold.co/60x60/png"}
                className="h-14 w-14 rounded object-cover"
                alt="company"
              />

              <div>
                <h2 className="font-bold text-lg">{job.designation}</h2>

                <p className="text-sm text-gray-600">
                  {job.companyName}, {job.location}
                </p>
              </div>
            </div>

            <div className="max-h-40 overflow-y-auto mb-4 pr-2">
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {job.description}
              </p>
            </div>

            <div className="flex gap-2 mb-5 flex-wrap">
              {job.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            <form onSubmit={handleApply} className="space-y-3">
              <div>
                <label className="text-sm font-medium">Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>

                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Resume Link</label>

                <input
                  type="url"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  placeholder="Paste resume link"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobCard;
