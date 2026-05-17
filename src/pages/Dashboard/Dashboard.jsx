import DashboardLayout from "../../components/layout/DashboardLayout";

import DashboardStats from "./DashboardStats";

import RevenueChart from "../../components/charts/RevenueChart";

import UsersChart from "../../components/charts/UsersChart";

import TasksChart from "../../components/charts/TasksChart";

import RecentActivity from "./RecentActivity";
import {
  useEffect,
  useState,
} from "react";
import { getDashboardStats } from "../../services/dashboardService";
import Loader from "../../components/common/Loader";
function Dashboard() {
  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats =
    async () => {
      try {
        setLoading(true);

        const data =
          await getDashboardStats();

        setStats(data);
      } catch (err) {
        setError(
          "Failed to load dashboard stats"
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="text-red-500">
          {error}
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      
      <div className="space-y-6">

        <DashboardStats stats={stats} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">
            <RevenueChart />
          </div>

          <TasksChart />

        </div>

        <UsersChart />

        <RecentActivity />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;