import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../redux/features/themeSlice";
import { logout } from "../../redux/features/authSlice";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();

  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );
  const navigate = useNavigate();
const handleLogout = () => {
  localStorage.removeItem("user");

  dispatch(logout());

  navigate("/");
};
  return (
    <div className="bg-white shadow px-6 py-4 flex items-center justify-between">
      
      <h2 className="text-xl font-semibold">
        Welcome Back
      </h2>

      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
      <button
  onClick={handleLogout}
  className="bg-red-500 text-white px-4 py-2 rounded-lg ml-3"
>
  Logout
</button>

    </div>
  );
}

export default Navbar;