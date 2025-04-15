import React from "react";

function footer() {
  return (
    <footer className="bg-black/50 w-full py-[50px]">
      <h2 className="text-center text-[70px] underline irish-grover text-[#E53015] bg-[#FCECC7]/90">
        Customer Support
      </h2>
      <div className="flex items-center justify-around mt-10 text-3xl bg-[#FCECC7]/90 py-2">
        <ul className="flex flex-col gap-10 text-left inter-custom list-disc text-[#E53015]">
          <li>FAQ</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <form className="flex flex-col gap-10 justify-between bg-[#FCECC7]/90 size-[30rem] border-2 border-[#E53015] rounded-md">
          <h3 className="inter-custom text-center text-[#E53015] pt-5">Submit a Complaint</h3>
          <input  type="text" placeholder="Reason" className="text-[#555] bg-white  text-lg py-2 pr-10 pl-2 outline-none" />
          <input  type="text" placeholder="Description" className="text-[#555] bg-white  text-lg py-2 pr-10 pl-2 pb-[180px] outline-none"/>
          <button type="submit" className="uppercase text-lg inter-custom bg-[#E53015] text-white p-2 pb-0">submit</button>
        </form>
      </div>
    </footer>
  );
}

export default footer;
