import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

import Card from "../common/Card";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function TasksChart() {
  const data = {
    labels: [
      "Completed",
      "Pending",
      "In Progress",
    ],

    datasets: [
      {
        data: [65, 20, 15],

        backgroundColor: [
          "#18181b",
          "#71717a",
          "#d4d4d8",
        ],
      },
    ],
  };

  return (
    <Card>
      <h2 className="text-xl font-bold mb-5">
        Task Status
      </h2>

      <div className="max-w-[300px] mx-auto">
        <Doughnut data={data} />
      </div>
    </Card>
  );
}

export default TasksChart;