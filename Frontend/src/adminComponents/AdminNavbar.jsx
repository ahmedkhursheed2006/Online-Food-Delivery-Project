import React from "react";
function AdminNavbar() {
  return (
    <header className="flex justify-start gap-5 items-center bg-white/80 shadow-md p-4">
      <img src="/DoorDash-Admin-v2.png" alt="" className="h-15 w-25"/>
      <h3 className=" font-bold text-[#1566E5] text-4xl">
        {" "}
        Welcome , [admin.name]
      </h3>
    </header>
  );
}

export default AdminNavbar;
