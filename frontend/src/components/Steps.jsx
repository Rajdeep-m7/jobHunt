import { BsPersonPlusFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { PiNotebookFill } from "react-icons/pi";
const Steps = () => {
  return (
    <div className="p-5">
        <div>
            <h1 className="text-4xl font-bold">Follow Easy <span className="text-blue-600">4 Steps</span></h1>
            <p className="text-sm text-gray-800 my-1">Submit applications quickly through JobHunt’s user-friendly, streamlined platform.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 items-center my-5">
            <div className="text-center max-w-80 bg-white rounded p-3">
                <p className="bg-blue-600 p-3 max-w-fit rounded text-white mx-auto"><BsPersonPlusFill /></p>
                <p className="text-lg font-bold">Create Your Profile</p>
                <p className="text-gray-800 text-sm">Sign up on JobHunt, build an impressive professional profile, and showcase your skills. A strong profile boosts your chances of landing interviews faster than ever!</p>
            </div>
            <div className="text-center max-w-80 bg-blue-600 rounded p-3 ">
                <p className="bg-white p-3 max-w-fit rounded text-blue-600 mx-auto"><IoSearch /></p>
                <p className="text-lg font-bold text-white">Search Best Jobs</p>
                <p className=" text-sm text-white">Use JobHunt’s advanced filters to explore thousands of opportunities. Find jobs that perfectly match your skills, experience, and career goals without wasting precious time.</p>
            </div>
            <div className="text-center max-w-80 bg-white rounded p-3 ">
                <p className="text-white p-3 max-w-fit rounded bg-blue-600 mx-auto"><PiNotebookFill /></p>
                <p className="text-lg font-bold">Apply In Seconds</p>
                <p className=" text-sm text-gray-800">Submit applications effortlessly through our streamlined system. Upload your resume, add a personalized message, and get your application to top employers within minutes!</p>
            </div>
            <div className="text-center max-w-80 bg-white rounded p-3 ">
                <p className="text-white p-3 max-w-fit rounded bg-blue-600 mx-auto"><BsPersonCheckFill /></p>
                <p className="text-lg font-bold">Get Hire Fast</p>
                <p className=" text-sm text-gray-800">Receive interview requests, negotiate offers, and start your new journey. JobHunt makes the hiring process fast, easy, and rewarding for every ambitious professional.</p>
            </div>
        </div>
    </div>
  )
}

export default Steps