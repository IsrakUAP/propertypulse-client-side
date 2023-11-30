import { useQuery } from "@tanstack/react-query";

import useProperties from "../../../Hooks/useProperties";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const ManageProperties = () => {
 const [properties] = useProperties();
  const axiosSecure = useAxios();
  const {data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });
  console.log(users);

  const handleVerifyProperty = async (propertyId) => {
    axiosSecure.patch(`/property/verify/${propertyId}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'verified completed',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
  };

  const handleRejectProperty = async (propertyId) => {
    axiosSecure.patch(`/property/reject/${propertyId}`)
    .then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'rejected completed',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Manage Properties</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Property Title</th>
            <th className="py-2 px-4 border-b">Property Location</th>
            <th className="py-2 px-4 border-b">Agent Name</th>
            <th className="py-2 px-4 border-b">Agent Email</th>
            <th className="py-2 px-4 border-b">Price Range</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id} className="text-gray-700 text-center">
              <td className="py-2 px-4 border-b">{property.propertyTitle}</td>
              <td className="py-2 px-4 border-b">{property.propertyLocation}</td>
              <td className="py-2 px-4 border-b">{property.agentName}</td>
              <td className="py-2 px-4 border-b">{property.agentEmail}</td>
              <td className="py-2 px-4 border-b">{property.priceRange}</td>
              <td className="py-2 px-4 border-b">
                {property.verificationStatus === "verify" ? (
                  <span className="text-green-500">Verified</span>
                ) : property.verificationStatus === "reject" ? (
                  <span className="text-red-500">Rejected</span>
                ) : (
                  <>
                    <button
                      onClick={() => handleVerifyProperty(property._id)}
                      className="btn btn-green mr-2"
                    >
                      Verify
                    </button>
                    <button
                      onClick={() => handleRejectProperty(property._id)}
                      className="btn btn-red"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProperties;
