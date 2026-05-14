import { Link } from "react-router"
import Admindashboard from "../components/Admindashboard"
import RecruiterHeader from "../components/RecruiterHeader"
const RecruiterHome = () => {
  return (
    <div>
      <RecruiterHeader />
      <div className="p-5 bg-gray-100">
          <h1 className="text-2xl text-blue-600 font-bold mb-5">All Live Jobs</h1>
          <Link to="/recruiter/job" className="px-2 p-1 bg-blue-600 rounded-md text-white font-bold my-5">Add/Post Job</Link>
      </div>
      <Admindashboard />
    </div>
  )
}

export default RecruiterHome
