import React from "react";
import { fields } from "../dummyData/kitchenForm.js";

function CreateKitchenPage() {
  return (
    <form className="flex flex-col gap-10 w-full items-center justify-center p-10">
      {fields.map((field, idx) => (
        <section key={idx} className="formSection bg-white/95">
          <h3 className="font-bold text-4xl text-[#E53015]">{field.categoryName}</h3>
          <div>
            {field.fields.map((inputField, index) => (
              <div key={index} className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={inputField.name}
                  className="text-sm font-medium"
                >
                  * {inputField.label}:
                </label>
                {inputField.type === "select" ? (
                  <select
                    name={inputField.name}
                    id={inputField.name}
                    className="border border-gray-300 rounded-md p-2"
                  >
                    {inputField.options.map((option, optIndex) => (
                      <option key={optIndex} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={inputField.type}
                    name={inputField.name}
                    id={inputField.id}
                    placeholder={inputField.placeholder}
                    className="formInput"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
      <button type="submit" className="bg-[#E53015] text-white p-2 rounded-md w-9/10">
        Submit
      </button>
    </form>
  );
}

export default CreateKitchenPage;
