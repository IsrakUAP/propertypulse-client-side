import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import useReviews from '../../../Hooks/useReviews';
const LatestUserReview = () => {
    const [reviews] = useReviews();
    return (
        <div className='mb-10'>
      <SectionHeader heading={"Latest User Review"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.slice(0, 3).map((review, index) => (
          <SwiperSlide key={index} className="review-card p-4 bg-white shadow-md rounded-md">
            <div className='flex flex-col items-center'>
              <img className='h-32 w-32 object-cover rounded-full mb-4' src={review.reviewerImage} alt="Reviewer" />
              <p className='text-lg font-semibold mb-2'>Reviewer Name: {review.reviewerName}</p>
              <p className='text-gray-700 mb-2'>Review Description: {review.reviewDescription}</p>
              <p className='text-gray-700'>Property Title: {review.propertyTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default LatestUserReview;