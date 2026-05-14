import { useState } from "react";
import image from "../assets/image.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import api from "../config/axios";
import { NavLink, useNavigate } from "react-router";

const RecruiterHeader = () => {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.post("/auth/logout");
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-5 space-x-3 p-5 shadow border-b border-gray-100 relative">
        <div>
          <img src={image} className="w-35 h-8" />
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between gap-5 items-center text-gray-700">
            <NavLink
              to="/recruiter/home"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Job Management
            </NavLink>

            <NavLink
              to="/recruiter/applications"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Job Applications
            </NavLink>
            <NavLink
              to="/recruiter/job"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Add job
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:block">
          <button
            onClick={handleLogout}
            className="bg-blue-500 p-1 px-2 font-semibold rounded text-white"
          >
            Logout
          </button>
        </div>

        <div className="md:hidden">
          {open ? (
            <RxCross1 className="h-7 w-7" onClick={toggleButton} />
          ) : (
            <GiHamburgerMenu className="h-7 w-7" onClick={toggleButton} />
          )}
        </div>
      </div>

      <div
        className={`absolute top-15 z-10 w-full bg-white border-b border-gray-100 shadow p-5
  transition-all duration-500 ease-in-out overflow-hidden transform
  ${
    open
      ? "opacity-100 translate-y-0 max-h-96"
      : "opacity-0 -translate-y-5 max-h-0 pointer-events-none"
  }`}
      >
        <div className="flex flex-col gap-5 justify-between items-center">
          <ul className="flex flex-col justify-between gap-5 items-center text-gray-700">
            <NavLink
              to="/recruiter/home"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Job Management
            </NavLink>

            <NavLink
              to="/recruiter/applications"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Job Applications
            </NavLink>
            <NavLink
              to="/recruiter/job"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Add job
            </NavLink>
          </ul>

          <button
            onClick={handleLogout}
            className="bg-blue-500 p-1 px-2 font-semibold rounded text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterHeader;
