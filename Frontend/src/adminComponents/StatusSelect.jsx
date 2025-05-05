import { useState } from "react";

function StatusSelect({ currentStatus, onChangeStatus }) {
  const statusOptions = [
    { label: "Active", value: "active", style: "bg-green-200 text-green-800" },
    {
      label: "Warned",
      value: "warned",
      style: "bg-yellow-200 text-yellow-800",
    },
    { label: "Banned", value: "banned", style: "bg-red-200 text-red-800" },
    { label: "Deleted", value: "deleted", style: "bg-gray-200 text-gray-800" },
  ];

  const handleChange = (e) => {
    onChangeStatus(e.target.value);
  };

  const selectedOption = statusOptions.find(
    (opt) => opt.value === currentStatus
  );

  return (
    <select
      value={currentStatus}
      onChange={handleChange}
      className={`p-2 rounded ${selectedOption?.style} font-semibold`}
    >
      {statusOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default StatusSelect;
