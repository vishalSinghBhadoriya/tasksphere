import { lazy, Suspense } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";

// Lazy Loaded Pages
const Dashboard = lazy(() =>
  import("./pages/Dashboard/Dashboard")
);

const Users = lazy(() =>
  import("./pages/Users/Users")
);

const Projects = lazy(() =>
  import("./pages/Projects/Projects")
);

const Tasks = lazy(() =>
  import("./pages/Tasks/Tasks")
);

const Analytics = lazy(() =>
  import("./pages/Analytics/Analytics")
);

const Settings = lazy(() =>
  import("./pages/Settings/Settings")
);

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated =
    localStorage.getItem("token");

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        {/* Public Route */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={<h1>404 Page Not Found</h1>}
        />

      </Routes>
    </Suspense>
  );
}

export default App;