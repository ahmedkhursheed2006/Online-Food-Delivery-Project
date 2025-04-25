import React, { useState } from "react";
import { Link } from "react-router";
import { useCustomerStore } from "../useStores/useCustomerStore";
import { useComplaintStore } from "../useStores/useComplaintStore";
function footer() {
  const { authCustomer } = useCustomerStore();
  const { sendComplaint } = useComplaintStore();

  const [formData, setFormData] = useState({
    customerId: authCustomer._id,
    complaintReason: "",
    complaintText: "",
  });
  const validateForm = () => {
    if (!formData.customerId) return toast.error("User Must be Logged in");
    if (formData.complaintReason === "")
      return toast.error("Enter a Reason For the Complaint");
    if (!formData.complaintText === "")
      return toast.error("Enter a Description For the Complaint");
    console.log(formData);

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) sendComplaint(formData);
    setFormData({ complaintReason: "", complaintText: "" });
  };

  return (
    <footer className="bg-black/50 w-full py-[50px]">
      <h2 className="text-center text-[70px] underline irish-grover text-[#E53015] bg-[#FCECC7]/90">
        Customer Support
      </h2>
      <div className="flex items-center justify-around mt-10 text-3xl bg-[#FCECC7]/90 py-2">
        <ul className="flex flex-col gap-10 text-left inter-custom list-disc text-[#E53015]">
          <li className="hover:underline">
            <Link target="_blank" to={`/FAQs`}>
              FAQ
            </Link>
          </li>
          <li className="hover:underline">
            <a href="/DoorDash_Privacy_Policy.pdf" download>
              Privacy Policy
            </a>
          </li>
          <li className="hover:underline">
            <a href="/DoorDash_Terms_And_Conditions.pdf" download>
              Terms and Conditions
            </a>
          </li>
        </ul>
        <form
          className="flex flex-col gap-10 justify-between bg-[#FCECC7]/90 size-[30rem] border-2 border-[#E53015] rounded-md"
          onSubmit={handleSubmit}
        >
          <h3 className="inter-custom text-center text-[#E53015] pt-5">
            Submit a Complaint
          </h3>
          <input
            type="text"
            placeholder="Reason"
            value={formData.complaintReason}
            onChange={(e) =>
              setFormData({ ...formData, complaintReason: e.target.value })
            }
            className="text-[#555] bg-white  text-lg py-2 pr-10 pl-2 outline-none"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.complaintText}
            onChange={(e) =>
              setFormData({ ...formData, complaintText: e.target.value })
            }
            className="text-[#555] bg-white  text-lg py-2 pr-10 pl-2 pb-[180px] outline-none"
          />
          <button
            type="submit"
            className="uppercase text-lg inter-custom bg-[#E53015] text-white p-2 pb-0"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}

export default footer;
