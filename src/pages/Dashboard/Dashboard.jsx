import DashboardLayout from "../../components/layout/DashboardLayout";

import DashboardStats from "./DashboardStats";

import RevenueChart from "../../components/charts/RevenueChart";

import UsersChart from "../../components/charts/UsersChart";

import TasksChart from "../../components/charts/TasksChart";

import RecentActivity from "./RecentActivity";
function Dashboard() {
  return (
    <DashboardLayout>
      
      <div className="space-y-6">

        <DashboardStats />

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