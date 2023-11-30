import { useState } from "react";

import useAxiosAll from "../../../Hooks/useAxiosAll";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAgent from "../../../Hooks/useAgent";

const AddProperty = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosAll();
  const [isAgent] = useAgent();

  const [propertyData, setPropertyData] = useState({
    propertyTitle: "",
    propertyImage: "",
    propertyDescription: "",
    propertyLocation: "",
    priceRange: "",
    agentName: user.displayName,
    agentEmail: user.email,
    agentImage: user.photoURL,
    verificationStatus: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPropertyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

   
      axiosSecure.post("/property", propertyData)

      .then((response) => {
        console.log(response.data);
  
        if (response.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
    });
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add a New Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Property Title</label>
            <input
              type="text"
              name="propertyTitle"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter property title"
              value={propertyData.propertyTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Property Image</label>
            <input
              type="text"
              name="propertyImage"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter property image URL"
              value={propertyData.propertyImage}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Property Description</label>
            <textarea
              name="propertyDescription"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter property description"
              value={propertyData.propertyDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Property Location</label>
            <input
              type="text"
              name="propertyLocation"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter property location"
              value={propertyData.propertyLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Price Range</label>
            <input
              type="text"
              name="priceRange"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter price range"
              value={propertyData.priceRange}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Agent Name</label>
            <input
              type="text"
              name="agentName"
              className="mt-1 p-2 w-full border rounded-md"
              value={propertyData.agentName}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Agent Email</label>
            <input
              type="text"
              name="agentEmail"
              className="mt-1 p-2 w-full border rounded-md"
              value={propertyData.agentEmail}
              readOnly
            />
          </div>

          <input
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
            value="Add Property"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
