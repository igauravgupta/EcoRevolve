import React, { useState } from "react";
import Header2 from "component/HomeComponent/Header2";

const RequirementForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    wasteDescription: "",
    quantity: "",
    location: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await fetch("/api/requirement", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert("Requirement submitted successfully!");
    //     setFormData({
    //       type: "",
    //       wasteDescription: "",
    //       quantity: "",
    //       location: "",
    //       contactNumber: "",
    //     });
    //   } else {
    //     throw new Error("Failed to submit the requirement");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form", error);
    //   alert("Failed to submit the form.");
    // }
  };

  return (
    <>
      <Header2 className="flex items-center justify-center md:px-5 w-full" />

      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Requirement Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="type" className="block text-gray-700 font-medium">
              Type of Waste
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the type of waste"
              required
            />
          </div>

          <div>
            <label
              htmlFor="wasteDescription"
              className="block text-gray-700 font-medium"
            >
              Waste Description
            </label>
            <textarea
              id="wasteDescription"
              name="wasteDescription"
              rows="4"
              value={formData.wasteDescription}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Provide a brief description of the waste"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-medium"
            >
              Quantity (in kg)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the quantity"
              required
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-gray-700 font-medium"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your location"
              required
            />
          </div>

          <div>
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 font-medium"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your contact number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            color="teal_400"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RequirementForm;
