import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";

import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";
import UserJobs from "./pages/UserJobs";

import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import RecruiterHome from "./pages/RecruiterHome";
import AddJobs from "./pages/AddJobs";

const RootRedirect = () => {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role === "recruiter") {
    return <Navigate to="/recruiter" replace />;
  }

  return <Navigate to="/user" replace />;
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/login" element={<AuthForm />} />

        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/jobs"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/home"
          element={
            <ProtectedRoute allowedRoles={["recruiter"]}>
              <RecruiterHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/job"
          element={
            <ProtectedRoute allowedRoles={["recruiter"]}>
              <AddJobs />
            </ProtectedRoute>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;