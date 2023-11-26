import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProperties from '../../Hooks/useProperties';
import useReviews from '../../Hooks/useReviews';

const DetailsPage = () => {
  const [properties] = useProperties();
  const [reviews, addReview] = useReviews();
  const { _id } = useParams();
  const filteredProperties = properties.filter((property) => property._id === _id);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    reviewerName: '',
    reviewDescription: '',
  });

  useEffect(() => {
   
  }, [_id]);

  const handleAddToWishlist = () => {
    console.log('Added to Wishlist:', filteredProperties);
  };

  const handleReviewSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewerName: newReview.reviewerName,
          reviewDescription: newReview.reviewDescription,
          propertyTitle: filteredProperties[0].propertyTitle,
        }),
      });
  
      if (response.ok) {
        addReview({
          ...newReview,
          propertyTitle: filteredProperties[0].propertyTitle,
        });
        setReviewModalOpen(false);
        
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleModalClose = () => {
    setReviewModalOpen(false);
    window.location.href = `/details/${_id}`;
  };

  return (
    <div className="container mx-auto p-8">
      {filteredProperties.map((property, idx) => (
        <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
          <img
            src={property.propertyImage}
            alt="Property"
            className="w-[60%] h-auto object-contain mb-4 rounded-lg"
          />
          <h2 className="text-3xl font-bold mb-4">{property.propertyTitle}</h2>
          <p className="text-gray-600 mb-4">{property.propertyDescription}</p>
          <p className="text-gray-600 mb-4">Price Range: {property.priceRange}</p>
          <p className="text-gray-600 mb-4">Agent: {property.agentName}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4 hover:bg-blue-700"
            onClick={handleAddToWishlist}
          >
            Add to Wishlist
          </button>

          <div>
            <h3 className="text-2xl font-bold mb-4">Reviews for {property.propertyTitle}</h3>
            {reviews
              .filter((review) => review.propertyTitle === property.propertyTitle)
              .map((review, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p>{review.reviewDescription}</p>
                </div>
              ))}
          </div>

          <button
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700"
            onClick={() => setReviewModalOpen(true)}
          >
            Add a Review
          </button>
        </div>
      ))}

      {isReviewModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Add a Review</h2>
              <button className="text-red-500 hover:text-red-700" onClick={handleModalClose}>
                Close
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="reviewerName" className="block text-gray-600 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="reviewerName"
                  className="w-full border rounded-md p-2"
                  value={newReview.reviewerName}
                  onChange={(e) => setNewReview({ ...newReview, reviewerName: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="reviewDescription"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Review Description
                </label>
                <textarea
                  id="reviewDescription"
                  className="w-full border rounded-md p-2"
                  rows="4"
                  value={newReview.reviewDescription}
                  onChange={(e) =>
                    setNewReview({ ...newReview, reviewDescription: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
                onClick={handleReviewSubmit}
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
