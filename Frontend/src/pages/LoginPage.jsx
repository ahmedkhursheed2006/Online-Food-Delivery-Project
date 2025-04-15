import React, { useState } from "react";
import { Link } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log("Token response:", tokenResponse);
          const tokenResponseDecoded = jwtDecode(tokenResponse.access_token);
          console.log(tokenResponseDecoded); 
        },
        onError: () => {
          console.log('Login Failed');
        }
      });
  return (
    <div className="flex items-end justify-center h-screen w-full bg-[url(/Login-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center justify-center h-9/10 w-9/10 bg-[url(/Login-bg.jpg)] bg-cover bg-center bg-no-repeat shadow-[0_0_100px_70px_rgba(0,0,0,0.1)] shadow-black">
        <div
          className="flex flex-col items-center justify-around py-2 border-2 border-black rounded-2xl 
      w-[350px] h-9/10 shadow-[0_0_100px_70px_rgba(0,0,0,0.1)] shadow-black hover:scale-105  transition-all duration-300 ease-in-out"
        >
          <h3 className="text-white text-5xl font-bold text-shadow-xs text-shadow-white">
            Login
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
            <button
              type="submit"
              className="text-white bg-black/95 text-lg p-2 font-bold"
            >
              Login
            </button>
          </form>
          <p className="flex flex-col justify-center items-center text-white underline gap-1">
            or Login with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="size-10 bg-white rounded-full p-1"
              onClick={() => login()}
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </p>
          <p className="text-white text-base font-bold">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#E53015] border-b-[#FCECC7] hover:border-b-[#E53015] border-b-2 hover:text-[#FCECC7] text-lg text-shadow-2xs text-shadow-[#FCECC7]"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
