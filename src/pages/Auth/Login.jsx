import {
  useState,
} from "react";

import {
  useDispatch,
} from "react-redux";

import {
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  loginSuccess,
} from "../../redux/features/authSlice";

import {
  loginUser,
} from "../../services/authService";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      username: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser({
        username:
          formData.username,

        password:
          formData.password,
      });

      const user = {
        id: data.id,

        name: `${data.firstName} ${data.lastName}`,

        email: data.email,

        role: "Admin",

        image: data.image,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "token",
        data.token
      );

      dispatch(
        loginSuccess({
          user,

          token: data.token,
        })
      );

      toast.success(
        "Login successful"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

        {/* Header */}
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold">
            TaskSphere
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Username */}
          <div>

            <label className="text-sm text-gray-500">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              required
            />

          </div>

          {/* Password */}
          <div>

            <label className="text-sm text-gray-500">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full mt-2 border border-zinc-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              required
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-zinc-100 rounded-xl text-sm text-gray-600">

          <p className="font-medium mb-2">
            Demo Credentials
          </p>

          <p>
            Username: emilys
          </p>

          <p>
            Password: emilyspass
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;