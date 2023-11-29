import  { useState, useEffect } from 'react';
import moment from 'moment';
import useReviews from '../../../Hooks/useReviews';
import useAuth from '../../../Hooks/useAuth';
import useAxios from '../../../Hooks/useAxios';
import Swal from 'sweetalert2';

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useReviews();
  const axioSecure = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (user && user.email) {
          const response = await axioSecure.get(`/reviews?userEmail=${user.email}`);
          setReviews(response.data);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchReviews();
  }, [user, setReviews, axioSecure]);
  

  const handleDeleteReview = async (reviewId) => {
    console.log(reviewId);
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

                axioSecure.delete(`/review/${reviewId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            window.location.href = "/dashboard/myReviews";
                            

                        }
                    })
            }
        });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Reviews</h2>

      {loading && <p className="text-center">Loading...</p>}

      {!loading && reviews.length === 0 && (
        <p className="text-center text-gray-500">No reviews yet.</p>
      )}

      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review._id} className="p-6 border border-gray-300 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-2">{review.propertyTitle}</h2>
              <p className="text-gray-600 mb-2">Agent: {review.agentName}</p>
              <p className="text-gray-600 mb-2">Review Time: {moment(review.createdAt).fromNow()}</p>
              <p className="text-gray-600 mb-2">Review Description: {review.reviewDescription}</p>

              <button
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 transition"
                onClick={() => handleDeleteReview(review._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
