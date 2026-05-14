import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
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
import ProtectedRoute from "./routes/ProtectedRoute";
import { lazy, Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Login />} />
     <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

      <Route path="/users" element={<Users />} />
      <Route path="/projects" element={<Projects />} />
<Route path="/tasks" element={<Tasks />} />
<Route path="/analytics" element={<Analytics />} />
<Route path="/settings" element={<Settings />} />
    </Routes>
    </Suspense>
  );
}

export default App;