import { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useOffer from '../../../Hooks/useOffer';
import useAxios from '../../../Hooks/useAxios';
import { Link } from 'react-router-dom';

const PropertyBought = () => {
  const { user } = useAuth();
  const [offers, refetchOffers] = useOffer();
  const axiosProvider = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && user.email) {
          await refetchOffers();
        }
      } catch (error) {
        console.error('Error fetching offers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, refetchOffers]);

  const userOffers = offers.filter((offer) => offer.buyerEmail === user.email);

  const handlePay = async (offer) => {
    console.log(offer);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Properties Bought</h2>

      {loading && <p className="text-center">Loading...</p>}

      {!loading && userOffers.length === 0 && (
        <p className="text-center text-gray-500">No properties bought yet.</p>
      )}

      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {userOffers.map((offer) => (
            <div key={offer._id} className="p-6 border border-gray-300 rounded-md shadow-md">
              <img
                src={offer.propertyImage}
                alt="Property"
                className="w-full h-[200px] object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold mb-2">{offer.propertyTitle}</h2>
              <p className="text-gray-600 mb-2">Property Location: {offer.propertyLocation}</p>
              <p className="text-gray-600 mb-2">Agent: {offer.agentName}</p>
              <p className="text-gray-600 mb-2">Offered Amount: ${offer.offeredAmount}</p>
              <p className="text-gray-600 mb-2">Status: {offer.status}</p>

              {offer.status === 'pending' && (
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
                  onClick={() => handlePay(offer)}
                >
                  Pay
                </button>
              )}

              {offer.status === 'accepted' && (
                <p className="text-green-500">Payment Transaction ID: {offer.transactionId}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <Link to="/dashboard">
          <button className="btn btn-accent">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyBought;
