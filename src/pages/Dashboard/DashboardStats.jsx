import Card from "../../components/common/Card";

function DashboardStats({ stats }) {
  const statsData = [
    {
      title: "Total Users",
      value: stats.totalUsers,
    },

    {
      title: "Active Projects",
      value: stats.activeProjects,
    },

    {
      title: "Completed Tasks",
      value: stats.completedTasks,
    },

    {
      title: "Revenue",
      value: `₹${stats.revenue.toLocaleString()}`,
    },
    {
  title: "Total Users",
  value: stats.totalUsers,
  growth: "+12%",
},
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
      {statsData.map((item, index) => (
        <Card
          key={index}
          className="hover:shadow-md transition-all duration-300"
        >
          
          <h3 className="text-gray-500 text-sm">
            {item.title}
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {item.value}
          </h1>
          <p className="text-green-500 text-sm mt-2">
  {item.growth} this month
</p>
        </Card>
      ))}

    </div>
  );
}

export default DashboardStats;