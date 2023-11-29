
import useWishlist from '../../../Hooks/useWishlist';

const Wishlist = () => {
  const [ wishlist ] = useWishlist();

  const handleMakeOffer = (propertyId) => {
    console.log(propertyId);
  };

  const handleRemoveFromWishlist = (propertyId) => {
    console.log(propertyId);
  };

  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-around">
  <h2 className="text-2xl font-bold mb-4 w-full">Wishlist</h2>
  {wishlist ? (
    wishlist.length === 0 ? (
      <p>Your wishlist is empty.</p>
    ) : (
      wishlist.map((property) => (
        <div key={property.propertyId} className="bg-white p-2 rounded-md shadow-md mb-4 w-58">
          <img
            src={property.propertyImage}
            alt="Property"
            className="w-full h-32 object-cover mb-2 rounded-md"
          />
          <h2 className="text-base font-bold mb-1">{property.propertyTitle}</h2>
          <p className="text-gray-600 mb-1">Location: {property.propertyLocation}</p>
          <p className="text-gray-600 mb-1">Agent: {property.agentName}</p>
          <p className="text-gray-600 mb-1">Verification Status: {property.verificationStatus}</p>
          <p className="text-gray-600 mb-1">Price Range: {property.priceRange}</p>
          <div className="flex space-x-2">
            
            <button
              className="bg-green-500 text-white py-1 px-2 rounded-full hover:bg-green-700 text-xs"
              onClick={() => handleMakeOffer(property.propertyId)}
            >
              Make Offer
            </button>
            <button
              className="bg-red-500 text-white py-1 px-2 rounded-full hover:bg-red-700 text-xs"
              onClick={() => handleRemoveFromWishlist(property.propertyId)}
            >
              Remove
            </button>
          </div>
        </div>
      ))
    )
  ) : (
    <p>Loading wishlist...</p>
  )}
</div>


  );
};

export default Wishlist;
