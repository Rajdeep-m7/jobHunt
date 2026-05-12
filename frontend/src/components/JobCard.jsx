import image from "../assets/image copy 9.png";
import { PiBagFill } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
const JobCard = () => {
  return (
    <div className="bg-white rounded p-3">
      <div>
        <div className="flex gap-2 justify-between items-center">
          <img src={image} className="h-10 w-10 rounded" />
          <div>
            <p>Hotel Udaan , Darjeeling</p>
            <p>Sr. Graphic Designer</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="flex justify-between items-center gap-1">
            <PiBagFill /> Design
          </p>
          <p className="flex justify-between items-center gap-1">
            <CiClock2 />
            Full time
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
