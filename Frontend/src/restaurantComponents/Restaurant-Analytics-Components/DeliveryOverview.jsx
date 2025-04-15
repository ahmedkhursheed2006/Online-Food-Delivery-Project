import React from "react";
import { deliveryOverviewData } from "../../dummyData/deliveryOverviewData";

const DeliveryOverview = () => {
  const summary = deliveryOverviewData?.summary || {};
  const deliveries = deliveryOverviewData?.deliveries || [];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Delivery Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium">Total Deliveries</h3>
          <p>{summary.totalDeliveries}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium">Total Revenue</h3>
          <p>${summary.totalRevenue}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium">Average Delivery Time</h3>
          <p>{summary.averageDeliveryTime}</p>
        </div>
      </div>

      {/* Delivery Satisfaction */}
      <div className="p-4 bg-gray-100 rounded-lg mt-4">
        <h3 className="text-lg font-medium">Delivery Satisfaction Rating</h3>
        <p>{summary.deliverySatisfactionRating} / 5</p>
      </div>

      {/* Peak Delivery Time */}
      <div className="p-4 bg-gray-100 rounded-lg mt-4">
        <h3 className="text-lg font-medium">Peak Delivery Time</h3>
        <p>{summary.peakDeliveryTime}</p>
      </div>

      {/* Delivery Table */}
      <h3 className="text-xl font-semibold mt-6">Delivery List</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Delivery ID</th>
              <th className="px-4 py-2 border">Time</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Driver</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{delivery.deliveryId}</td>
                <td className="px-4 py-2 border">{delivery.time}</td>
                <td className="px-4 py-2 border">{delivery.status}</td>
                <td className="px-4 py-2 border">{delivery.location}</td>
                <td className="px-4 py-2 border">{delivery.driver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryOverview;
