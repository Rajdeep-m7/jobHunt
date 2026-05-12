import JobCard from "./JobCard";

const Oppotunities = () => {
  return (
    <div className="p-5">
      <div>
        <p className="text-3xl font-bold">
          Explore New <span className="text-blue-600">Opportunities</span>
        </p>
        <p className="text-xs text-gray-800">
          Launch your professional future today with top employers hiring on
          jobHunt
        </p>
      </div>
      <div className="flex justify-center gap-5 items-center my-3">
        <button className="border border-gray-600 hover:border-blue-600 hover:text-blue-600 rounded px-2 p-1 font-bold">
          Management
        </button>
        <button className="border border-gray-600 hover:border-blue-600 hover:text-blue-600 rounded px-2 p-1 font-bold">
          Marketing & Sale
        </button>
        <button className="border border-gray-600 hover:border-blue-600 hover:text-blue-600 rounded px-2 p-1 font-bold">
          Design
        </button>
        <button className="border border-gray-600 hover:border-blue-600 hover:text-blue-600 rounded px-2 p-1 font-bold">
          Retail and Product
        </button>
        <button className="border border-gray-600 hover:border-blue-600 hover:text-blue-600 rounded px-2 p-1 font-bold">
          Development
        </button>
      </div>
      <div className="flex gap-5 flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <JobCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Oppotunities;
