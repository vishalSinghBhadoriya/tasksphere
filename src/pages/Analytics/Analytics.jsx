import DashboardLayout from "../../components/layout/DashboardLayout";

import Card from "../../components/common/Card";

import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
} from "lucide-react";

import RevenueChart from "../../components/charts/RevenueChart";

import UsersChart from "../../components/charts/UsersChart";

import TasksChart from "../../components/charts/TasksChart";

function Analytics() {
  const analyticsStats = [
    {
      id: 1,
      title: "Total Revenue",

      value: "₹2,45,000",

      growth: "+18%",

      icon: <DollarSign size={22} />,
    },

    {
      id: 2,
      title: "User Growth",

      value: "12,430",

      growth: "+12%",

      icon: <Users size={22} />,
    },

    {
      id: 3,
      title: "Performance",

      value: "89%",

      growth: "+6%",

      icon: <TrendingUp size={22} />,
    },

    {
      id: 4,
      title: "Activity Rate",

      value: "76%",

      growth: "+9%",

      icon: <Activity size={22} />,
    },
  ];

  const trafficSources = [
    {
      source: "Direct",
      percentage: 45,
    },

    {
      source: "Social Media",
      percentage: 30,
    },

    {
      source: "Search Engine",
      percentage: 15,
    },

    {
      source: "Referral",
      percentage: 10,
    },
  ];

  return (
    <DashboardLayout>
      
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Analytics
          </h1>

          <p className="text-gray-500 mt-1">
            Monitor platform insights and performance
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {analyticsStats.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-md transition-all"
            >
              
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-gray-500 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>

                  <p className="text-green-500 text-sm mt-2">
                    {item.growth} this month
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center">
                  {item.icon}
                </div>

              </div>

            </Card>
          ))}

        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Revenue */}
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>

          {/* Traffic Sources */}
          <Card>
            
            <h2 className="text-xl font-bold mb-6">
              Traffic Sources
            </h2>

            <div className="space-y-5">

              {trafficSources.map(
                (item, index) => (
                  <div key={index}>
                    
                    <div className="flex items-center justify-between mb-2">

                      <span className="text-sm font-medium">
                        {item.source}
                      </span>

                      <span className="text-sm text-gray-500">
                        {item.percentage}%
                      </span>

                    </div>

                    <div className="w-full h-3 bg-zinc-200 rounded-full overflow-hidden">
                      
                      <div
                        className="h-full bg-black rounded-full"
                        style={{
                          width: `${item.percentage}%`,
                        }}
                      />

                    </div>

                  </div>
                )
              )}

            </div>

          </Card>

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <UsersChart />

          <TasksChart />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Analytics;