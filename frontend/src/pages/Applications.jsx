import { useEffect, useState } from "react";
import api from "../config/axios";
import RecruiterHeader from "../components/RecruiterHeader";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await api.get("/application/applications");

        setApplications(res.data.applications || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/application/delete/${id}`);

      setApplications((prev) =>
        prev.filter((application) => application._id !== id),
      );

      alert("Application deleted");
    } catch (error) {
      console.log(error);

      alert("Failed to delete");
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
      <div className="w-full min-h-screen bg-gray-100 p-5">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-5">
          <h1 className="text-2xl font-bold mb-5">Job Applications</h1>

          {applications.length === 0 ? (
            <p className="text-gray-500">No applications found</p>
          ) : (
            <div className="space-y-4">
              {applications.map((application) => (
                <div
                  key={application._id}
                  className="border rounded-lg p-4 flex justify-between items-center"
                >
                  <div className="space-y-1">
                    <p className="font-semibold text-lg">{application.name}</p>

                    <p className="text-sm text-gray-600">{application.email}</p>

                    <p className="text-sm text-gray-600">
                      {application.phoneNumber}
                    </p>

                    <p className="text-sm">
                      Job:{" "}
                      <span className="font-medium">
                        {application.job?.designation}
                      </span>
                    </p>

                    <a
                      href={application.resumeLink}
                      target="_blank"
                      className="text-blue-600 text-sm underline"
                    >
                      View Resume
                    </a>
                  </div>

                  <button
                    onClick={() => handleDelete(application._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Applications;
