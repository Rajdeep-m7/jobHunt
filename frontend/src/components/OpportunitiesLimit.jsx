/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import api from "../config/axios";
import JobCard from "./JobCard";

const categories = [
  "All",
  "Management",
  "Marketing & Sale",
  "Design",
  "Retail and Product",
  "Development",
];

const OpportunitiesLimit = () => {
  const [jobs, setJobs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const fetchAllJobs = async () => {
    try {
      setLoading(true);

      const res = await api.get("/job/allJobs");

      setJobs(res.data.jobs || []);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  const fetchJobsByCategory = async (category) => {
    try {
      setLoading(true);

      setActiveCategory(category);

      if (category === "All") {
        return fetchAllJobs();
      }

      const res = await api.get(
        `/job/getjobsByCategory/${category}`
      );

      setJobs(res.data.jobs || []);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="p-5">

      <div>
        <p className="text-4xl font-bold">
          Explore New{" "}
          <span className="text-blue-600">
            Opportunities
          </span>
        </p>

        <p className="text-xs text-gray-800">
          Launch your professional future today
          with top employers hiring on jobHunt
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 items-center my-5">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              fetchJobsByCategory(category)
            }
            className={`border rounded px-4 py-2 font-bold transition-all duration-200 ${
              activeCategory === category
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-600 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

      <div className="flex max-w-7xl mx-auto justify-center items-center gap-5 flex-wrap">

        {loading ? (
          <p className="text-lg font-semibold">
            Loading Jobs...
          </p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500 text-lg">
            No Jobs Found
          </p>
        ) : (
          jobs.slice(0,8).map((job) => (
            <JobCard
              key={job._id}
              job={job}
            />
          ))
        )}

      </div>
    </div>
  );
};

export default OpportunitiesLimit;