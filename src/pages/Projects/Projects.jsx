import DashboardLayout from "../../components/layout/DashboardLayout";

import Card from "../../components/common/Card";

import Badge from "../../components/common/Badge";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "TaskSphere Dashboard",
      description:
        "Admin dashboard management system",

      progress: 80,

      status: "Active",

      members: ["V", "A", "R"],
    },

    {
      id: 2,
      name: "E-Commerce Platform",
      description:
        "Modern online shopping application",

      progress: 45,

      status: "Pending",

      members: ["S", "K"],
    },

    {
      id: 3,
      name: "CRM Dashboard",
      description:
        "Customer management system",

      progress: 100,

      status: "Completed",

      members: ["P", "D", "N"],
    },
  ];

  return (
    <DashboardLayout>
      
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all ongoing projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project) => (
            <Card key={project.id}>
              
              {/* Top */}
              <div className="flex items-start justify-between">
                
                <div>
                  <h2 className="text-xl font-semibold">
                    {project.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    {project.description}
                  </p>
                </div>

                <Badge
                  type={
                    project.status ===
                    "Completed"
                      ? "success"
                      : project.status ===
                        "Pending"
                      ? "warning"
                      : "default"
                  }
                >
                  {project.status}
                </Badge>

              </div>

              {/* Progress */}
              <div className="mt-6">
                
                <div className="flex items-center justify-between mb-2">
                  
                  <span className="text-sm text-gray-500">
                    Progress
                  </span>

                  <span className="text-sm font-medium">
                    {project.progress}%
                  </span>

                </div>

                <div className="w-full h-3 bg-zinc-200 rounded-full overflow-hidden">
                  
                  <div
                    className="h-full bg-black rounded-full"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />

                </div>

              </div>

              {/* Members */}
              <div className="mt-6 flex items-center justify-between">

                <div className="flex -space-x-2">

                  {project.members.map(
                    (member, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm border-2 border-white"
                      >
                        {member}
                      </div>
                    )
                  )}

                </div>

                <button className="text-sm font-medium hover:underline">
                  View Details
                </button>

              </div>

            </Card>
          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Projects;