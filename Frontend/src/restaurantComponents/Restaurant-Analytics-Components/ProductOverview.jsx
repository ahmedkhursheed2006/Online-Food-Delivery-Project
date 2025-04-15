import React from "react";
import { productOverviewData } from "../../dummyData/productOverviewData";

const ProductOverview = () => {
  const summary = productOverviewData?.summary || {};
  const products = productOverviewData?.products || [];

  const summaryItems = [
    { title: "Total Products", value: String(summary.totalProducts ?? "0") },
    { title: "Total Orders", value: String(summary.totalOrders ?? "0") },
    { title: "Total Revenue", value: `$${summary.totalRevenue ?? "0"}` },
    { title: "Top Rated Product", value: summary.topRatedProduct?.name ?? "N/A" },
    { title: "Top Rating", value: String(summary.topRatedProduct?.rating ?? "0") },
    { title: "Reviews", value: String(summary.reviews ?? "0") },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Product Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {summaryItems.map((item, idx) => (
          <div key={idx} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Product Table */}
      <h3 className="text-xl font-semibold mt-6">Product List</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Orders</th>
              <th className="px-4 py-2 border">Revenue</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.category}</td>
                <td className="px-4 py-2 border">{String(product.orders ?? "0")}</td>
                <td className="px-4 py-2 border">${String(product.revenue ?? "0.00")}</td>
                <td className="px-4 py-2 border">{String(product.rating ?? "0.0")}</td>
                <td className="px-4 py-2 border">{product.dateAdded ?? "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductOverview;