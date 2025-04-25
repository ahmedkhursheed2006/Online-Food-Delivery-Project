import React, { useState } from "react";
import { Link } from "react-router";
import { useAdminStore } from "../useStores/useAdminStore";
export default function LoginPage() {
  const { login, isLoggingIn } = useAdminStore();

  const [formData, setFormData] = useState({
    adminEmail: "",
    adminPassword: "",
  });
  const validateForm = () => {
    if (!formData.adminEmail.trim()) return toast.error("Email is Required!");
    if (!formData.adminPassword) return toast.error("Password is Required!");
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) login(formData);
  };
  return (
    <div className="flex items-end justify-center h-screen w-full bg-[url(/Login-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center justify-center h-9/10 w-9/10 bg-[url(/Login-bg.jpg)] bg-cover bg-center bg-no-repeat shadow-[0_0_100px_70px_rgba(0,0,0,0.1)] shadow-black">
        <div
          className="flex flex-col items-center justify-around py-2 border-2 border-black rounded-2xl 
      w-[350px] h-9/10 shadow-[0_0_100px_70px_rgba(0,0,0,0.1)] shadow-black hover:scale-105  transition-all duration-300 ease-in-out"
        >
          <h3 className="text-white text-center text-5xl font-bold text-shadow-xs text-shadow-white">
            Admin Login
          </h3>
          <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.adminEmail}
              onChange={(e) =>
                setFormData({ ...formData, adminEmail: e.target.value })
              }
              className="text-[#444] bg-white/95 p-2 text-base outline-0 shadow-white shadow-[0_0_2px_1px_rgba(0,0,0,0.1)]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.adminPassword}
              onChange={(e) =>
                setFormData({ ...formData, adminPassword: e.target.value })
              }
              className="text-[#444] bg-white/95 p-2 text-base outline-0 shadow-white shadow-[0_0_2px_1px_rgba(0,0,0,0.1)]"
            />
            <button
              type="submit"
              className="text-white bg-black/95 text-lg p-2 font-bold cursor-pointer"
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>  
    </div>
  );
}
