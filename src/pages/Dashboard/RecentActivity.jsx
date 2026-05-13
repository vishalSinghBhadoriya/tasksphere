import Card from "../../components/common/Card";

function RecentActivity() {
  const activities = [
    "Rahul updated Task Dashboard UI",
    "Vishal completed Authentication Module",
    "New project created",
    "User added to team",
  ];

  return (
    <Card>
      <h2 className="text-xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-b pb-3 text-gray-600"
          >
            {activity}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentActivity;