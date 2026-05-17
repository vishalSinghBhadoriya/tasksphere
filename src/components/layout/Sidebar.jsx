import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import logo from "../../assets/TaskSphere-logo.png";
import { NavLink } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { closeSidebar } from "../../redux/features/sidebarSlice";
function Sidebar() {
  const dispatch = useDispatch();

const isSidebarOpen =
  useSelector(
    (state) =>
      state.sidebar.isSidebarOpen
  );
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <Users size={20} />,
    },
    {
      title: "Projects",
      path: "/projects",
      icon: <FolderKanban size={20} />,
    },
    {
      title: "Tasks",
      path: "/tasks",
      icon: <CheckSquare size={20} />,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={20} />,
       role: "admin",
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

return (
  <>
    
    {/* Overlay */}
    {isSidebarOpen && (
      <div
        onClick={() =>
          dispatch(closeSidebar())
        }
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
      />
    )}

    <div
      className={`
        fixed top-0 left-0 z-50
        w-64 h-screen bg-zinc-900 text-white p-5
        transition-transform duration-300

        ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0
      `}
    >

      <img
        src={logo}
        className="mb-10 mt-1"
      />

      <ul className="space-y-2">

        {menuItems.map((item) => (
          <li key={item.title}>

            <NavLink
              onClick={() =>
                dispatch(closeSidebar())
              }
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
              {item.icon}

              <span>{item.title}</span>

            </NavLink>

          </li>
        ))}

      </ul>

    </div>

  </>
);
}

export default Sidebar;