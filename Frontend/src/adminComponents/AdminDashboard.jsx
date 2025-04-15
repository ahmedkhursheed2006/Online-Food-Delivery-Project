import React, { useState } from "react";
import { adminDummyData } from "../dummyData/adminDummyData";
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
function Dashboard() {
  const prepareChartData = (data) => {
    const labels = data.map((item) => item.month);
    const users = data.map((item) => item.users || item.sales);

    return {
      labels: labels,
      datasets: [
        {
          data: users,
          borderColor: "#1566E5",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    };
  };

  return (
    <div className="p-6 bg-white/99 rounded-lg shadow-md w-full h-screen flex flex-col">
      <header className="text-right flex justify-between items-center">
        <h4 className="text-[#1566E5] text-3xl font-semibold">
          Admin Dashboard
        </h4>
        <button className="text-xl p-1 bg-[#1566E5] text-white ">
          Generate Report
        </button>
      </header>
      <section className="flex justify-between items-center mt-3 gap-2">
        <section className="flex flex-col justify-around items-center w-[80%]">
          <ul className="flex justify-between items-center rounded-xl gap-3 w-full">
            {adminDummyData.summary.map((item, index) => (
              <li
                key={index}
                className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-lg my-2"
              >
                <span className="text-[#1566E5] font-bold">{item.title}</span>
                <span className="text-black font-semibold">{item.value}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 items-center w-full h-[300px] ">
            <div className="border-2 border-[#f4f5f7] rounded-md h-full w-2/5">
              <Line
                data={prepareChartData(adminDummyData.userCharts.data)}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "User Growth",
                    },
                  },
                }}
              />
            </div>
            <div className="border-2 border-[#f4f5f7] rounded-md h-full w-3/5">
              <Line
                data={prepareChartData(adminDummyData.salesCharts.data)}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Sales Data",
                    },
                  },
                }}
              />
            </div>
          </div>
        </section>
        <div className="flex flex-col justify-between mt-3 gap-2 bg-gray-100 rounded-lg p-1 w-[20%] h-full">
          <h3 className="text-base font-bold text-[#1566E5] text-center ">
            Top Selling Categories
          </h3>
          <table className="border-2 border-[#f4f5f7] rounded-2xl h-full gap-3 ">
            <thead>
              <tr className="text-[#1566E5] font-bold text-left text-xs">
                <th className="pl-3">Category</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {adminDummyData.topSellingCategories.map((item, index) => (
                <tr key={index} className="text-left text-sm">
                  <td className="pl-3">{item.category}</td>
                  <td>{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="flex justify-between items-center mt-3 gap-2">
        <div className="flex flex-col justify-between items-center size-25 overflow-y-scroll hide-scrollbar border-2 border-[#f4f5f7] bg-gray-100 rounded-lg h-[150px] w-2/10">
          <h3 className="text-sm font-bold text-[#1566E5]">Recent Orders</h3>
          {adminDummyData.recentOrders.map((item, index) => (
            <span key={index} className="text-xs ">
              {item.orderId}
            </span>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center w-full overflow-y-scroll hide-scrollbar border-2 border-[#f4f5f7] bg-gray-100 rounded-lg h-[150px]">
          <h3 className="text-sm font-bold text-[#1566E5]">
            Recent Complaints
          </h3>
          <table className="border-2 border-[#f4f5f7] rounded-2xl h-full w-full">
            <thead>
              <tr className="text-[#1566E5] font-bold text-left text-xs ">
                <th>Complaint ID</th>
                <th>Customer</th>
                <th>Issue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {adminDummyData.complaints.map((item, index) => (
                <tr key={index} className="text-left text-xs">
                  <td>{item.complaintId}</td>
                  <td>{item.customerName}</td>
                  <td>{item.issue}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
