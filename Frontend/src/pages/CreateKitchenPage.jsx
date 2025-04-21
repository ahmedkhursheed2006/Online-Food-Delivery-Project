import React, { useState, useRef } from "react";
import { fields } from "../dummyData/kitchenForm.js";
import { useRestaurantStore } from "../useStores/useRestaurantStore.js";
import toast from "react-hot-toast";
function CreateKitchenPage() {
  const { signup } = useRestaurantStore();

  const initialFormState = fields.reduce((acc, section) => {
    section.fields.forEach((input) => {
      acc[input.name] = ""; // or null if you prefer
    });
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

    if (success === true) signup(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 w-full items-center justify-center p-10"
    >
      {fields.map((field, idx) => (
        <section key={idx} className="formSection bg-white/95">
          <h3 className="font-bold text-4xl text-[#E53015]">
            {field.categoryName}
          </h3>
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
                    value={formData[inputField.name]}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="" disabled>
                      Select {inputField.label}
                    </option>
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
                    value={formData[inputField.name]}
                    onChange={handleChange}
                    placeholder={inputField.placeholder}
                    className="formInput"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
      <button
        type="submit"
        className="bg-[#E53015] text-white p-2 rounded-md w-9/10 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default CreateKitchenPage;
