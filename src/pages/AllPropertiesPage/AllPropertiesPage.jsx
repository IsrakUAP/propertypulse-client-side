import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useProperties from "../../Hooks/useProperties";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const AllPropertiesPage = () => {
    const [properties] = useProperties();
    const filteredProperties = properties.filter(property => property.verificationStatus !== "reject");
    return (
        <div className="container mx-auto">
          <Helmet>
                <title>PropertyPulse | AllProperties</title>
            </Helmet>
            <Navbar></Navbar>
       <SectionHeader heading={"All Properties List"}></SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProperties.map((property, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={property.propertyImage} alt="Property" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{property.propertyTitle}</h3>
              <p className="text-gray-600 mb-2">Location: {property.propertyLocation}</p>
              <p className="text-gray-600 mb-2">Agent: {property.agentName}</p>
              <img src={property.agentImage} alt="Agent" className="w-8 h-8 rounded-full mb-2" />
              <p className="text-gray-600 mb-2">Verification Status: {property.verificationStatus}</p>
              <p className="text-gray-600 mb-4">Price Range: {property.priceRange}</p>
              <Link to={`/details/${property._id}`}> <button className="bg-green-400 w-full text-white py-2 px-4 rounded-full hover:bg-gray-300">
                Details
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllPropertiesPage;