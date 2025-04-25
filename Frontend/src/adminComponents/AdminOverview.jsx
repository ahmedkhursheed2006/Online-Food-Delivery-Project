import React, { useState, useEffect } from "react";
import { userData } from "../dummyData/userData";
import { adminForm } from "../dummyData/adminSignupForm";
import { useAdminStore } from "../useStores/useAdminStore";
function AdminOverview() {
  const [searchType, setSearchType] = useState("name");
  const [cardOpen, setCardOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { signup, getAllAdmins, fetchedData } = useAdminStore();

  useEffect(() => {
    getAllAdmins();
  }, []);
  console.log("Fethced Data: ", fetchedData);

  const [filteredUsers, setFilteredUsers] = useState(fetchedData);

  useEffect(() => {
    console.log("Fetched Data:", fetchedData);
    setFilteredUsers(fetchedData); // update whenever fetchedData updates
  }, [fetchedData]);

  const initialFormState = adminForm.reduce((acc, input) => {
    acc[input.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Dynamically update the field that changed
    }));
  };
  const validateForm = () => {
    for (let key in formData) {
      console.log(formData);
      if (!formData[key]) {
        return toast.error(`${key} is required`); // If any field is empty, return false
      }
    }
    return true; // All fields are filled
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) {
      signup(formData);
      setCardOpen(false);
      getAllAdmins();
      setFormData(initialFormState);
    }
  };

  const handleClose = () => {
    setCardOpen(false);
    setFormData(initialFormState);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(fetchedData);
    } else {
      const results = fetchedData.filter((admin) => {
        const value = admin[searchType];
        return value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredUsers(results);
    }
  }, [searchTerm, searchType, fetchedData]);

  return (
    <div className="relative p-6 bg-white/99 rounded-lg shadow-md w-full h-screen flex flex-col">
      <header className="text-right flex justify-between items-center">
        <h4 className="text-[#1566E5] text-3xl font-semibold">
          Admin Overview
        </h4>
        <button
          className="text-[#1566E5] text-xl p-1 font-semibold border-[#666] border-2 rounded-full cursor-pointer"
          onClick={() => setCardOpen(true)}
        >
          Add Admin
        </button>
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
              filteredUsers.map((admin) => (
                <tr key={admin.id}>
                  <td className="border px-4 py-2">{admin._id}</td>
                  <td className="border px-4 py-2">{admin.adminName}</td>
                  <td className="border px-4 py-2">{admin.adminEmail}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No Deliveries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
      <div
        className={`${
          cardOpen ? "" : "hidden"
        } absolute w-full h-full bg-black/50 top-0 right-0`}
      ></div>
      <form
        onSubmit={handleSubmit}
        className={`${
          cardOpen ? "visible" : "hidden"
        } absolute top-[10%] left-[20%] bg-white shadow-2xl shadow-black h-[450px] w-[450px] z-10 overflow-y-scroll hide-scrollbar p-2 rounded-xl`}
      >
        <div className="relative">
          <p
            className="absolute right-2 cursor-pointer"
            onClick={handleClose}
          >
            ❌
          </p>
          <h3 className="text-center font-semibold text-xl">Admin Signup</h3>
          {adminForm.map((inputField, index) => (
            <div key={index} className="flex flex-col gap-2 mb-4">
              <label htmlFor={inputField.name} className="text-sm font-medium">
                * {inputField.label}:
              </label>

              {inputField.type === "radio" ? (
                <div className="flex gap-4">
                  {inputField.options.map((option, optIndex) => (
                    <label key={optIndex} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={inputField.name}
                        value={option.value}
                        checked={formData[inputField.name] === option.value}
                        onChange={handleChange}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={inputField.type}
                  name={inputField.name}
                  id={inputField.id}
                  value={formData[inputField.name]}
                  onChange={handleChange}
                  placeholder={inputField.placeholder}
                  className="formInput"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-[#1566E5] text-white w-full text-lg cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminOverview;
