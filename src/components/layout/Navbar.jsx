import {
  Bell,
  Menu,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  logout,
} from "../../redux/features/authSlice";

import {
  toggleTheme,
} from "../../redux/features/themeSlice";

import {
  toggleSidebar,
} from "../../redux/features/sidebarSlice";

function Navbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] =
  useState(false);
  const [
  isNotificationOpen,
  setIsNotificationOpen,
] = useState(false);
const dropdownRef = useRef(null);
const notificationRef =
  useRef(null);
  const notifications = [
  {
    id: 1,
    title: "New user registered",
    time: "2 min ago",
  },

  {
    id: 2,
    title: "Project updated",
    time: "10 min ago",
  },

  {
    id: 3,
    title: "Task completed",
    time: "1 hour ago",
  },
];
  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  const user = useSelector(
    (state) => state.auth.user
  );

  const handleLogout = () => {
    localStorage.removeItem("user");

    dispatch(logout());

    navigate("/");
  };
useEffect(() => {
  const handleClickOutside = (
    event
  ) => {
    if (
  dropdownRef.current &&
  !dropdownRef.current.contains(
    event.target
  )
) {
  setIsDropdownOpen(false);
}

if (
  notificationRef.current &&
  !notificationRef.current.contains(
    event.target
  )
) {
  setIsNotificationOpen(false);
}
  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);
  return (
    <div className="bg-white dark:bg-zinc-900 border-b px-4 md:px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            dispatch(toggleSidebar())
          }
          className="lg:hidden"
        >
          <Menu size={26} />
        </button>

        <div>
          <h2 className="text-xl font-bold">
            Dashboard
          </h2>

          <p className="text-sm text-gray-500">
            Welcome back 👋
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Theme Toggle */}
        <button
          onClick={() =>
            dispatch(toggleTheme())
          }
          className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center"
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* Notifications */}
 <div
  ref={notificationRef}
  className="relative"
>
  
  <button
    onClick={() =>
      setIsNotificationOpen(
        !isNotificationOpen
      )
    }
    className="relative w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center"
  >
    
    <Bell size={18} />

   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
  {notifications.length}
</span>

  </button>
  {isNotificationOpen && (
  <div className="absolute top-14 right-0 w-80 bg-white rounded-2xl shadow-lg border border-zinc-200 z-50 overflow-hidden">
    
    {/* Header */}
    <div className="p-4 border-b">
      <h3 className="font-semibold text-lg">
        Notifications
      </h3>
    </div>

    {/* Notification List */}
    <div className="max-h-96 overflow-y-auto">

      {notifications.map(
        (notification) => (
          <div
            key={notification.id}
            className="p-4 border-b hover:bg-zinc-50 transition-all cursor-pointer"
          >
            
            <h4 className="font-medium text-sm">
              {notification.title}
            </h4>

            <p className="text-xs text-gray-500 mt-1">
              {notification.time}
            </p>

          </div>
        )
      )}

    </div>

  </div>
)}
</div>
        {/* Profile */}
        <div
        ref={dropdownRef}
  onClick={() =>
    setIsDropdownOpen(
      !isDropdownOpen
    )
  }
  className="relative flex items-center gap-3 cursor-pointer"
> 

          <img
            src={`https://ui-avatars.com/api/?name=${user?.name}`}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div className="hidden md:block">
            <h4 className="font-semibold text-sm">
              {user?.name}
            </h4>

            <p className="text-xs text-gray-500">
              {user?.role}
            </p>
          </div>

          <ChevronDown size={18} />
          {isDropdownOpen && (
  <div className="absolute top-14 right-0 w-52 bg-white rounded-2xl shadow-lg border border-zinc-200 p-2 z-50">
    
    <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-100 transition-all">
      My Profile
    </button>

    <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-100 transition-all">
      Settings
    </button>

    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all"
    >
      Logout
    </button>

  </div>
)}

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hidden md:block"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;