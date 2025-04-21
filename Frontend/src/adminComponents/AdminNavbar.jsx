import React from "react";
import {useAdminStore} from "../useStores/useAdminStore"

function AdminNavbar() {
  const {authAdmin, logout} = useAdminStore();
  return (
    <header className="flex justify-between gap-5 items-center bg-white/80 shadow-md p-4">
      <img src="/DoorDash-Admin-v2.png" alt="" className="h-15 w-25"/>
      <h3 className=" font-bold text-[#1566E5] text-4xl">
        {" "}
        Welcome, {authAdmin.adminRole}  {authAdmin.adminName}
      </h3>
      <div>
        <button onClick={()=> logout()} className="bg-white rounded-full p-2 text-[#1566E5] border-[#666] border-2 font-bold text-xl cursor-pointer">Logout</button>
      </div>
    </header>
  );
}

export default AdminNavbar;
