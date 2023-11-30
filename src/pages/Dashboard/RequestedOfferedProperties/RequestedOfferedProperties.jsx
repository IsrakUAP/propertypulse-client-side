import { useState } from "react";
import useAxiosAll from "../../../Hooks/useAxiosAll";
import useOffer from "../../../Hooks/useOffer";
import Swal from "sweetalert2";
import useAgent from "../../../Hooks/useAgent";


const RequestedOfferedProperties = () => {
    const [offers] = useOffer();
    const axiosSecure = useAxiosAll();
    const [loading, setLoading] = useState(false);
    const [isAgent] = useAgent();

    const handleAccept = async (offerId) => {
        try {
            setLoading(true);

            const acceptResponse = await axiosSecure.patch(`/submitOffer/accept/${offerId}`);
            if (acceptResponse.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Offer Accepted!',
                    icon: 'success',
                });
            }
        } catch (error) {
            console.error('Error accepting offer:', error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while accepting the offer.',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleReject = async (offerId) => {
        try {
            setLoading(true);

            const rejectResponse = await axiosSecure.patch(`/submitOffer/reject/${offerId}`);
            if (rejectResponse.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Offer Rejected!',
                    icon: 'success',
                });
            }
        } catch (error) {
            console.error('Error rejecting offer:', error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while rejecting the offer.',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Requested/Offered Properties</h2>
            <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border p-2">Property Title</th>
                        <th className="border p-2">Property Location</th>
                        <th className="border p-2">Buyer Email</th>
                        <th className="border p-2">Buyer Name</th>
                        <th className="border p-2">Offered Price</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map((offer) => (
                        <tr key={offer._id}>
                            <td className="border p-2">{offer.propertyTitle}</td>
                            <td className="border p-2">{offer.propertyLocation}</td>
                            <td className="border p-2">{offer.buyerEmail}</td>
                            <td className="border p-2">{offer.buyerName}</td>
                            <td className="border p-2">{offer.offeredAmount}</td>
                            <td className="border p-2">{offer.status}</td>
                            <td className="border p-2">
                                {offer.status === 'pending' && (
                                    <>
                                        <button
                                            className="bg-green-400 text-white p-1 rounded-md mr-1"
                                            onClick={() => handleAccept(offer._id)}
                                            disabled={loading}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="bg-red-400 text-white p-1 rounded-md"
                                            onClick={() => handleReject(offer._id)}
                                            disabled={loading}
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

export default RequestedOfferedProperties;
