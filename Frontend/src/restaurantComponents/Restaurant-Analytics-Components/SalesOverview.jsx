import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { detailedSalesOverview } from "../../dummyData/salesOverviewData"; // Import the data

function SalesOverview() {
  const [salesData, setSalesData] = useState(detailedSalesOverview);

  // Prepare chart data for monthly orders
  const prepareChartData = (data) => {
    const labels = data.map((item) => item.date || item.day || item.hour);
    const orders = data.map((item) => item.orders);

    return {
      labels: labels,
      datasets: [
        {
          label: "Orders",
          data: orders,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    };
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Sales Overview Section */}
      <h2 className="text-2xl font-semibold">Sales Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {salesData.summary.map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-medium">{item.label}:</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      

      {/* Today's Data */}
      <h3 className="text-xl font-semibold mt-6">Daily Sales Overview</h3>
      <div className="mt-4">
        <Line
          data={prepareChartData(salesData.timeFrames.today.hourlyBreakdown)}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Orders by Hour",
              },
            },
          }}
        />
      </div>

      {/* Weekly Order Overview */}
      <h3 className="text-xl font-semibold mt-6">Weekly Sales Overview</h3>
      <div className="mt-4">
        <Line
          data={prepareChartData(salesData.timeFrames.thisWeek.dailyBreakdown)}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Orders by Day",
              },
            },
          }}
        />
      </div>

      {/* Monthly Sales Chart */}
      <h3 className="text-xl font-semibold mt-6">Monthly Sales Overview</h3>
      <div className="mt-4">
        <Line
          data={prepareChartData(salesData.timeFrames.thisMonth.dateBreakdown)}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Orders by Date",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default SalesOverview;
