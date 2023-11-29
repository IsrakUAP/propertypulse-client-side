
import Swal from 'sweetalert2';
import useWishlist from '../../../Hooks/useWishlist';

import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../../Hooks/useAxios';

const Wishlist = () => {
    const [wishlist,refetch] = useWishlist();
    const navigate = useNavigate();
    const axioSecure = useAxios();

    const handleMakeOffer = (propertyId) => {
        navigate(`/dashboard/makeOfferPage/${propertyId}`);
    };

    const handleRemoveFromWishlist = (propertyId) => {
        console.log(propertyId);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axioSecure.delete(`/wishlist/${propertyId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    };

    return (
        <div className="container mx-auto p-4 flex flex-wrap justify-around">
            <h2 className="text-2xl text-center font-bold mb-4 w-full">Wishlist</h2>
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
                                <Link to={`/dashboard/makeOfferPage/${property._id}`}>
                                    <button
                                        className="bg-green-500 text-white py-1 px-2 rounded-full hover:bg-green-700 text-xs"
                                        onClick={() => handleMakeOffer(property._id)}
                                    >
                                        Make Offer
                                    </button>
                                </Link>
                                <button
                                    className="bg-red-500 text-white py-1 px-2 rounded-full hover:bg-red-700 text-xs"
                                    onClick={() => handleRemoveFromWishlist(property._id)}
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
