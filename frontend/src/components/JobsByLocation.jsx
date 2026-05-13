import India from "../assets/India.png";
import America from "../assets/America.png";
import NewZeland from "../assets/NewZeland.png";
import Canada from "../assets/Canada.png";
const JobsByLocation = () => {
  return (
    <div className="mt-5 p-5">
      <h1 className="text-2xl font-bold">
        Jobs By <span className="text-blue-600">Locations</span>
      </h1>
      <p>Find your favourite jobs and get the benefits of yourself</p>
      <div className="flex flex-wrap justify-around gap-5 items-center my-5">
        <div className="bg-white p-3 rounded flex gap-3">
          <img src={India} className="h-25 w-auto" />
          <div>
            <p className="text-lg font-bold text-blue-600">India</p>
            <p>76 Vacancies</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded flex gap-3">
          <img src={NewZeland} className="h-25 w-auto" />
          <div>
            <p className="text-lg font-bold text-blue-600">New Zeland</p>
            <p>76 Vacancies</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded flex gap-3">
          <img src={America} className="h-25 w-auto" />
          <div>
            <p className="text-lg font-bold text-blue-600">USA</p>
            <p>76 Vacancies</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded flex gap-3">
          <img src={Canada} className="h-25 w-auto" />
          <div>
            <p className="text-lg font-bold text-blue-600">Canada</p>
            <p>76 Vacancies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsByLocation;
