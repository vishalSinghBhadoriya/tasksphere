import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import Card from "../common/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function UsersChart() {
  const data = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
    ],

    datasets: [
      {
        label: "New Users",

        data: [12, 19, 7, 15, 22],

        backgroundColor: "#18181b",
      },
    ],
  };

  return (
    <Card>
      <h2 className="text-xl font-bold mb-5">
        User Analytics
      </h2>

      <Bar data={data} />
    </Card>
  );
}

export default UsersChart;