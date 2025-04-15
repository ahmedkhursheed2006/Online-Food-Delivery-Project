import React from "react";
import { Link } from "react-router";
function SignupPage() {
  return (
    <div className="flex items-end justify-center h-screen w-full bg-[url(/Login-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center justify-center h-9/10 w-9/10 bg-[url(/Login-bg.jpg)] bg-cover bg-center bg-no-repeat shadow-[0_0_100px_70px_rgba(0,0,0,0.1)] shadow-black">
        <div
          className="flex flex-col items-center justify-around py-2 border-2 border-black rounded-2xl 
          w-[350px] h-9/10 shadow-[0_0_100px_70px_rgba(0,0,0,0.1)] shadow-black hover:scale-105  transition-all duration-300 ease-in-out"
        >
          <h3 className="text-white text-5xl font-bold text-shadow-xs text-shadow-white">
            Register
          </h3>
          <form className="flex flex-col gap-10 w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-[#444] bg-white/95 p-2 text-base outline-0 shadow-white shadow-[0_0_2px_1px_rgba(0,0,0,0.1)]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-[#444] bg-white/95 p-2 text-base outline-0 shadow-white shadow-[0_0_2px_1px_rgba(0,0,0,0.1)]"
            />
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="text-[#444] bg-white/95 p-2 text-base outline-0 shadow-white shadow-[0_0_2px_1px_rgba(0,0,0,0.1)]"
            />
            <button
              type="submit"
              className="text-white bg-black/95 text-lg p-2 font-bold"
            >
              Register
            </button>
          </form>
          <p className="text-white text-base font-bold">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#E53015] border-b-[#FCECC7] hover:border-b-[#E53015] border-b-2 hover:text-[#FCECC7] text-lg text-shadow-2xs text-shadow-[#FCECC7]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
