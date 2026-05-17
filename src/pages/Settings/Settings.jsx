import DashboardLayout from "../../components/layout/DashboardLayout";

import Card from "../../components/common/Card";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { toggleTheme } from "../../redux/features/themeSlice";

function Settings() {
  const dispatch = useDispatch();

  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  const user = useSelector(
    (state) => state.auth.user
  );

  return (
    <DashboardLayout>
      
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your account preferences
          </p>
        </div>

        {/* Profile Section */}
        <Card>

          <h2 className="text-xl font-bold mb-6">
            Profile Information
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-6">

            {/* Avatar */}
            <img
              src={`https://ui-avatars.com/api/?name=${user?.name}`}
              alt="profile"
              className="w-24 h-24 rounded-full"
            />

            {/* User Info */}
            <div className="space-y-4 flex-1">

              <div>
                <label className="text-sm text-gray-500">
                  Full Name
                </label>

                <input
                  type="text"
                  value={user?.name || ""}
                  readOnly
                  className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-3 bg-zinc-50"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-3 bg-zinc-50"
                />
              </div>

            </div>

          </div>

        </Card>

        {/* Preferences */}
        <Card>

          <h2 className="text-xl font-bold mb-6">
            Preferences
          </h2>

          <div className="space-y-6">

            {/* Dark Mode */}
            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-medium">
                  Dark Mode
                </h3>

                <p className="text-sm text-gray-500">
                  Enable dark dashboard theme
                </p>
              </div>

              <button
                onClick={() =>
                  dispatch(toggleTheme())
                }
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
                ${
                  darkMode
                    ? "bg-black justify-end"
                    : "bg-zinc-300 justify-start"
                }`}
              >
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </button>

            </div>

            {/* Email Notifications */}
            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-medium">
                  Email Notifications
                </h3>

                <p className="text-sm text-gray-500">
                  Receive email updates
                </p>
              </div>

              <button className="w-14 h-8 bg-black rounded-full flex items-center justify-end p-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </button>

            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-medium">
                  Push Notifications
                </h3>

                <p className="text-sm text-gray-500">
                  Receive push alerts
                </p>
              </div>

              <button className="w-14 h-8 bg-zinc-300 rounded-full flex items-center justify-start p-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </button>

            </div>

          </div>

        </Card>

        {/* Security */}
        <Card>

          <h2 className="text-xl font-bold mb-6">
            Security
          </h2>

          <div className="space-y-4">

            <button className="w-full md:w-auto bg-black text-white px-5 py-3 rounded-xl hover:scale-[1.02] transition-all">
              Change Password
            </button>

            <button className="w-full md:w-auto border border-zinc-300 px-5 py-3 rounded-xl hover:bg-zinc-100 transition-all">
              Enable Two-Factor Authentication
            </button>

          </div>

        </Card>

      </div>

    </DashboardLayout>
  );
}

export default Settings;