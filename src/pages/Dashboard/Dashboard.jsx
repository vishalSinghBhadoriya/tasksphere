import DashboardLayout from "../../components/layout/DashboardLayout";

import DashboardStats from "./DashboardStats";
import AnalyticsSection from "./AnalyticsSection";
import RecentActivity from "./RecentActivity";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        
        <DashboardStats />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          <div className="xl:col-span-2">
            <AnalyticsSection />
          </div>

          <RecentActivity />
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;