import { useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  return (
    <div className="flex">
      
      <Sidebar />

      <div
        className={`flex-1 min-h-screen ml-64 transition-all duration-300
        ${
          darkMode
            ? "bg-zinc-900 "
            : "bg-zinc-100 text-black"
        }`}
      >
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </div>

    </div>
  );
}

export default DashboardLayout;