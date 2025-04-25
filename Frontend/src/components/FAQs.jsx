import React from "react";
import { faqs } from "../dummyData/FAQs";
function FAQs() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white/90">
      <h4 className="text-center text-6xl text-red-600 font-bold">FAQs</h4>
      {faqs.map((fields) => (
        <div className="flex flex-col gap-2 mb-4 w-[80%]">
          <label htmlFor={fields.question} className="text-sm font-medium">
            * {fields.question}:
          </label>
          <input
            type="text"
            value={fields.answer}
            className="formInput"
            readOnly
          />
        </div>
      ))}
    </div>
  );
}

export default FAQs;
