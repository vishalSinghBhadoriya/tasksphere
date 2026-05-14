import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { login } from "../../redux/features/authSlice";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const fakeUser = {
      email,
      name: "Vishal",
      role: "admin",
    };

    localStorage.setItem(
      "user",
      JSON.stringify(fakeUser)
    );

    dispatch(login(fakeUser));

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          TaskSphere Login
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Login
          </button>

        </div>

      </form>

    </div>
  );
}

export default Login;