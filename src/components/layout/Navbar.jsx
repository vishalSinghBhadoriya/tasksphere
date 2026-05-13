import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../redux/features/themeSlice";

function Navbar() {
  const dispatch = useDispatch();

  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

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

    </div>
  );
}

export default Navbar;