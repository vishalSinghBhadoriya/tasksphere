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

function Sidebar() {
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
    <div className="w-64 bg-zinc-900 text-white h-screen p-5 fixed top-0 left-0">
      <img src={logo} className="mb-10 mt-1"></img>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.title}>
            
            <NavLink
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
  );
}

export default Sidebar;