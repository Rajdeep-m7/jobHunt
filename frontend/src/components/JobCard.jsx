import { useState } from "react";
import image from "../assets/image copy 9.png";
import { PiBagFill } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

const JobCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white rounded-lg p-3 max-w-80 shadow">
        <div>
          <div className="flex gap-2 justify-start items-center">
            <img src={image} className="h-12 w-12 rounded" />
            <div>
              <p className="font-semibold">Hotel Udaan , Darjeeling</p>
              <p>Sr. Graphic Designer</p>
            </div>
          </div>

          <div className="flex justify-start my-1 gap-5 items-center">
            <p className="flex justify-between items-center gap-1">
              <PiBagFill className="text-blue-600" /> Design
            </p>

            <p className="flex justify-between items-center gap-1">
              <CiClock2 className="text-blue-600" />
              Full time
            </p>
          </div>

          <div>
            <p className="text-gray-800 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore esse, dolor error, earum consequatur fugit quia dicta vitae quidem aperiam, nostrum repudiandae ea repellendus voluptatibus labore! Minus laborum cumque quisquam.
            </p>
          </div>

          <div className="flex gap-2 my-2 overflow-clip flex-wrap">
            <p className="bg-gray-200 border border-gray-400 rounded px-2 text-xs text-gray-800">
              Figma
            </p>

            <p className="bg-gray-200 border border-gray-400 rounded px-2 text-xs text-gray-800">
              Adobe Photoshop
            </p>

            <p className="bg-gray-200 border border-gray-400 rounded px-2 text-xs text-gray-800">
              Design
            </p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <button
              onClick={() => setOpen(true)}
              className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-3 py-1 rounded cursor-pointer"
            >
              Apply now
            </button>

            <p>Salary upto 15k</p>
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
              <img src={image} className="h-14 w-14 rounded" />

              <div>
                <h2 className="font-bold text-lg">
                  Sr. Graphic Designer
                </h2>

                <p className="text-sm text-gray-600">
                  Hotel Udaan, Darjeeling
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita error pariatur similique ea a quasi. Enim vero ut consectetur hic, adipisci corrupti? Adipisci ab tenetur dolorum voluptatem, eaque doloremque autem.
            </p>

            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Resume Link
                </label>

                <input
                  type="url"
                  placeholder="Paste resume link"
                  className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobCard;