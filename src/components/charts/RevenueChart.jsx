import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import Card from "../common/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function RevenueChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Revenue",

        data: [
          12000,
          19000,
          15000,
          25000,
          22000,
          30000,
        ],

        borderColor: "#000",

        backgroundColor: "rgba(0,0,0,0.1)",

        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Card>
      <h2 className="text-xl font-bold mb-5">
        Revenue Overview
      </h2>

      <Line
        data={data}
        options={options}
      />
    </Card>
  );
}

export default RevenueChart;