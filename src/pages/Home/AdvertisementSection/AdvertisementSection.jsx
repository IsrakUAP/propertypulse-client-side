import { Link } from "react-router-dom";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useProperties from "../../../Hooks/useProperties";


const AdvertisementSection = () => {
    const [properties] = useProperties();
    return (
        <div className="container mx-auto my-8">
        <SectionHeader heading={"Trending Properties"}></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.slice(0, 4).map((property, index) => (
            <div key={index} className="property-card bg-white p-4 shadow-md rounded-md">
              <img src={property.propertyImage} alt="Property" className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="text-gray-700">Location: {property.propertyLocation}</p>
              <p className="text-gray-700">Price Range: {property.priceRange}</p>
              <p className="text-gray-700">Verification Status: {property.verificationStatus}</p>
              <Link to={`/details/${property._id}`}><button className="bg-green-400 w-full text-white py-2 px-4 mt-4 rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-blue">Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AdvertisementSection;