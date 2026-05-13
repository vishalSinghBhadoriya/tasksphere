import Card from "../../components/common/Card";

function DashboardStats() {
  const stats = [
    {
      title: "Total Users",
      value: "12,430",
    },
    {
      title: "Projects",
      value: "320",
    },
    {
      title: "Revenue",
      value: "₹2,40,000",
    },
    {
      title: "Tasks Completed",
      value: "1,204",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <Card key={index}>
          <h3 className="text-gray-500 text-sm">
            {item.title}
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {item.value}
          </h1>
        </Card>
      ))}
    </div>
  );
}

export default DashboardStats;