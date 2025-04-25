import React, { useState, useEffect } from "react";
import { useAdminStore } from "../useStores/useAdminStore";
function UserOverview() {
  const { fetchedData, getAllCustomers } = useAdminStore();
  const [searchType, setSearchType] = useState("name");

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getAllCustomers();
  }, []);
  console.log(fetchedData);
  const [filteredUsers, setFilteredUsers] = useState(fetchedData);
  useEffect(() => {
    console.log("Fetched Data:", fetchedData);
    setFilteredUsers(fetchedData); // update whenever fetchedData updates
  }, [fetchedData]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(fetchedData);
    } else {
      const results = fetchedData.filter((user) => {
        const value = user[searchType];
        return value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredUsers(results);
    }
  }, [searchTerm, searchType]);

  return (
    <div className="p-6 bg-white/99 rounded-lg shadow-md w-full h-screen flex flex-col">
      <header className="text-right flex justify-between items-center">
        <h4 className="text-[#1566E5] text-3xl font-semibold">User Overview</h4>
      </header>

      <div className="flex items-center mt-4">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border p-2 rounded mr-2 bg-[#1566E5] text-white outline-0 hover:bg-[#103a7e]"
        >
          <option value="name">Name</option>
          <option value="id">ID</option>
          <option value="email">Email</option>
        </select>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full max-w-sm "
        />
      </div>

      <section className="mt-6 overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((customer) => (
                <tr key={customer.id}>
                  <td className="border px-4 py-2">{customer._id}</td>
                  <td className="border px-4 py-2">{customer.name}</td>
                  <td className="border px-4 py-2">{customer.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default UserOverview;
