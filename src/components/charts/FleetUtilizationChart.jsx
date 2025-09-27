import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register everything needed for bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function FleetUtilizationChart() {
  const data = {
    labels: ["SUV", "Sedan", "Hatchback", "Electric", "Luxury"],
    datasets: [
      {
        label: "Utilization %",
        data: [85, 70, 60, 90, 50],
        backgroundColor: [
          "rgba(59,130,246,0.7)", // blue
          "rgba(236,72,153,0.7)", // pink
          "rgba(34,197,94,0.7)",  // green
          "rgba(251,191,36,0.7)", // yellow
          "rgba(168,85,247,0.7)", // purple
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 👈 avoids canvas re-use conflicts
    plugins: {
      legend: {
        labels: { color: "white" },
      },
      title: {
        display: true,
        text: "Fleet Utilization",
        color: "white",
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="h-80 w-full">
      <Bar data={data} options={options} />
    </div>
  );
}