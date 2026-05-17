import DashboardLayout from "../../components/layout/DashboardLayout";

import Badge from "../../components/common/Badge";

import Card from "../../components/common/Card";

function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Build Dashboard UI",

      priority: "High",

      status: "In Progress",

      dueDate: "20 May 2026",

      assignedTo: "Vishal",
    },

    {
      id: 2,
      title: "Fix Authentication Bug",

      priority: "Medium",

      status: "Pending",

      dueDate: "25 May 2026",

      assignedTo: "Rahul",
    },

    {
      id: 3,
      title: "API Integration",

      priority: "Low",

      status: "Completed",

      dueDate: "18 May 2026",

      assignedTo: "Aman",
    },

    {
      id: 4,
      title: "Optimize Dashboard",

      priority: "High",

      status: "In Review",

      dueDate: "30 May 2026",

      assignedTo: "Karan",
    },
  ];

  const getPriorityBadge = (
    priority
  ) => {
    switch (priority) {
      case "High":
        return "danger";

      case "Medium":
        return "warning";

      case "Low":
        return "success";

      default:
        return "default";
    }
  };

  const getStatusBadge = (
    status
  ) => {
    switch (status) {
      case "Completed":
        return "success";

      case "Pending":
        return "warning";

      case "In Progress":
        return "default";

      case "In Review":
        return "default";

      default:
        return "default";
    }
  };

  return (
    <DashboardLayout>
      
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Tasks
          </h1>

          <p className="text-gray-500 mt-1">
            Track and manage tasks
          </p>
        </div>

        {/* Table */}
        <Card className="overflow-x-auto">

          <table className="w-full text-left min-w-[800px]">
            
            {/* Head */}
            <thead className="border-b bg-zinc-50">
              
              <tr>
                <th className="p-4">
                  Task
                </th>

                <th className="p-4">
                  Priority
                </th>

                <th className="p-4">
                  Status
                </th>

                <th className="p-4">
                  Due Date
                </th>

                <th className="p-4">
                  Assigned To
                </th>

                <th className="p-4">
                  Actions
                </th>
              </tr>

            </thead>

            {/* Body */}
            <tbody>

              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b hover:bg-zinc-50 transition-all"
                >
                  
                  {/* Task */}
                  <td className="p-4 font-medium">
                    {task.title}
                  </td>

                  {/* Priority */}
                  <td className="p-4">
                    <Badge
                      type={getPriorityBadge(
                        task.priority
                      )}
                    >
                      {task.priority}
                    </Badge>
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <Badge
                      type={getStatusBadge(
                        task.status
                      )}
                    >
                      {task.status}
                    </Badge>
                  </td>

                  {/* Due Date */}
                  <td className="p-4 text-gray-500">
                    {task.dueDate}
                  </td>

                  {/* Assigned User */}
                  <td className="p-4">

                    <div className="flex items-center gap-3">
                      
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                        {task.assignedTo
                          .charAt(0)}
                      </div>

                      <span>
                        {task.assignedTo}
                      </span>

                    </div>

                  </td>

                  {/* Actions */}
                  <td className="p-4">

                    <button className="text-sm font-medium hover:underline">
                      View
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </Card>

      </div>

    </DashboardLayout>
  );
}

export default Tasks;