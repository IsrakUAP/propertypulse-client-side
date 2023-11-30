import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import useReviews from "../../../Hooks/useReviews";

const ManageReviews = () => {
    const [reviews] = useReviews();
    const axiosSecure = useAxios();
    const { data: users = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      }
    });
    console.log(users);
  const handleDeleteReview = async (reviewId) => {
    try {
      const res = await axiosSecure.delete(`/review/${reviewId}`);
      if (res.data.deletedCount > 0) {
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
        window.location.href = "/dashboard/manageReviews";
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the review.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Manage Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="p-6 border border-gray-300 rounded-md shadow-md">
         
            <img
              src={review.reviewerImage}
              alt="Reviewer"
              className="mb-2 rounded-full"
            />
            <p className="text-gray-600 mb-2">Email: {review.reviewerEmail}</p>
            <p className="text-gray-600 mb-2">Name: {review.reviewerName}</p>
            <p className="text-gray-600 mb-2">Review: {review.review}</p>

         
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 transition"
              onClick={() => handleDeleteReview(review._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageReviews;
