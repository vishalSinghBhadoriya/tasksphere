import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Login from "./pages/Auth/Login";
import Projects from "./pages/Projects/Projects";
import Tasks from "./pages/Tasks/Tasks";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/projects" element={<Projects />} />
<Route path="/tasks" element={<Tasks />} />
<Route path="/analytics" element={<Analytics />} />
<Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;