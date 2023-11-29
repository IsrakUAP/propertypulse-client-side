import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useWishlist from '../../../Hooks/useWishlist';
import useAuth from '../../../Hooks/useAuth';
import useAxios from '../../../Hooks/useAxios';
import Swal from 'sweetalert2';

const MakeOfferPage = () => {
  const { propertyId } = useParams();
  const [wishlist] = useWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosProvider = useAxios();

  const [offeredAmount, setOfferedAmount] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [buyingDate, setBuyingDate] = useState('');

  const selectedProperty = wishlist.find((property) => property._id === propertyId);

  const handleOfferSubmit = async () => {
    try {
      const offerData = {
        propertyId: selectedProperty._id,
        propertyTitle: selectedProperty.propertyTitle,
        propertyLocation: selectedProperty.propertyLocation,
        propertyImage: selectedProperty.propertyImage,
        agentName: selectedProperty.agentName,
        status: selectedProperty.verificationStatus,
        offeredAmount,
        buyerName,
        buyerEmail: user.email,
        buyingDate,
      };

      const response = await axiosProvider.post('/submitOffer', offerData);

      if (response.data.insertedId) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Offer item added",
            showConfirmButton: false,
            timer: 1500
          });
        
        navigate('/dashboard/wishlist');
      } else {
        console.error('Failed to submit offer:', response.data.error);
      }
    } catch (error) {
      console.error('Error submitting offer:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Make an Offer</h2>
      {selectedProperty ? (
        <form key={selectedProperty._id}>
          <div className="mb-4">
            <label htmlFor="propertyTitle" className="block text-gray-600 font-semibold mb-2">
              Property Title
            </label>
            <input
              type="text"
              id="propertyTitle"
              className="w-full border rounded-md p-2"
              value={selectedProperty.propertyTitle}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="propertyLocation" className="block text-gray-600 font-semibold mb-2">
              Property Location
            </label>
            <input
              type="text"
              id="propertyLocation"
              className="w-full border rounded-md p-2"
              value={selectedProperty.propertyLocation}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="agentName" className="block text-gray-600 font-semibold mb-2">
              Agent Name
            </label>
            <input
              type="text"
              id="agentName"
              className="w-full border rounded-md p-2"
              value={selectedProperty.agentName}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="offeredAmount" className="block text-gray-600 font-semibold mb-2">
              Offered Amount
            </label>
            <input
              type="text"
              id="offeredAmount"
              className="w-full border rounded-md p-2"
              value={offeredAmount}
              onChange={(e) => setOfferedAmount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="buyerEmail" className="block text-gray-600 font-semibold mb-2">
              Buyer Email
            </label>
            <input
              type="text"
              id="buyerEmail"
              className="w-full border rounded-md p-2"
              value={user.email}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="buyerName" className="block text-gray-600 font-semibold mb-2">
              Buyer Name
            </label>
            <input
              type="text"
              id="buyerName"
              className="w-full border rounded-md p-2"
              value={user.displayName}
              onChange={(e) => setBuyerName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="buyingDate" className="block text-gray-600 font-semibold mb-2">
              Buying Date
            </label>
            <input
              type="date"
              id="buyingDate"
              className="w-full border rounded-md p-2"
              value={buyingDate}
              onChange={(e) => setBuyingDate(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
            onClick={handleOfferSubmit}
          >
            Submit Offer
          </button>
        </form>
      ) : (
        <p>Error: Property details not available.</p>
      )}
      <Link to="/dashboard/wishlist"><button className=' btn mt-2 btn-accent'>Back to Wishlist </button></Link>
    </div>
  );
};

export default MakeOfferPage;
