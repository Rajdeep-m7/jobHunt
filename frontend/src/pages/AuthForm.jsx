import { useState } from "react";
import { useNavigate } from "react-router";

import api from "../config/axios";
import { useAuth } from "../context/AuthContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData(e.target);

      const data = Object.fromEntries(formData.entries());

      let res;
      if (isLogin) {
        res = await api.post("/auth/login", {
          email: data.email,
          password: data.password,
        });
      }

      else {
        res = await api.post("/auth/signUp", {
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role,
        });
      }

      console.log(res.data);

      setUser(res.data.user);

      e.target.reset();

      if (res.data.user.role === "recruiter") {
        navigate("/recruiter/home");
      } else {
        navigate("/user");
      }

    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
        "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 via-blue-300 to-white flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-gray-500 mt-2">
            {isLogin
              ? "Login to your JobHunt account"
              : "Sign up and find your dream job"}
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >

          {!isLogin && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>
          )}

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Role
              </label>

              <select
                name="role"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="user">
                  Job Seeker
                </option>

                <option value="recruiter">
                  Recruiter
                </option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-700 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;