import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useProperties from '../../../Hooks/useProperties';
import Swal from 'sweetalert2';
import useAxiosAll from '../../../Hooks/useAxiosAll';
import useAgent from '../../../Hooks/useAgent';

const MyProperties = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useProperties();
  const axiosSecure = useAxiosAll();
  const [isAgent] = useAgent();

  useEffect(() => {
    if (user?.displayName) {
      axiosSecure
        .get(`/property?agentName=${user.displayName}`)
        .then((response) => setProperties(response.data))
        .catch((error) => console.error('Error fetching properties:', error));
    }
  }, [user, setProperties, axiosSecure]);

  const handleDelete = async (propertyId) => {
    try {
      const res = await axiosSecure.delete(`/property/${propertyId}`);
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your property has been deleted.',
          icon: 'success',
        });
        setProperties((prevProperties) =>
          prevProperties.filter((property) => property._id !== propertyId)
        );
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      Swal.fire({
        title: 'Deleted!',
        text: 'Your property has been deleted.',
        icon: 'success',
      });
      window.location.href = "/dashboard/myProperties";
    }
  };

  return (
    <div className="w-[50%] mx-auto">
    <h2 className="text-3xl font-semibold text-center w-full mb-8">My Added Properties</h2>
    {properties.map((property) => (
      <div key={property._id} className="bg-white shadow-md p-6 rounded-md m-4 w-[80%]">
        <img src={property.propertyImage} alt={property.propertyTitle} className="w-[100%] h-[50%] object-cover mb-4 rounded-md" />
        <p className="mb-2 text-lg font-semibold">{property.propertyTitle}</p>
        <p className="text-gray-600 mb-4">{property.propertyLocation}</p>
        <p className="mb-2">Agent Name: {property.agentName}</p>
        <p className="mb-2">Agent Image: {property.agentImage}</p>
        <p className="mb-2">Verification Status: {property.verificationStatus}</p>
        <p className="mb-4">Price Range: {property.priceRange}</p>
        <Link to={`/updatePropertyPage/${property._id}`} className="bg-blue-500  text-white py-2 px-4 rounded-md block text-center mb-2 hover:bg-blue-600">Update Property</Link>
        <button
          onClick={() => handleDelete(property._id)}
          className="bg-red-500  w-full text-white py-2 px-4 rounded-md block text-center hover:bg-red-600"
        >
          Delete Property
        </button>
      </div>
    ))}
  </div>
  );
};

export default MyProperties;
