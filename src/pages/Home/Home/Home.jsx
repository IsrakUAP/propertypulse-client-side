import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AdvertisementSection from "../AdvertisementSection/AdvertisementSection";
import Banner from "../Banner/Banner";
import LatestUserReview from "../LatestUserReview/LatestUserReview";
import SubmitReviewSection from "../SubmitReviewSection/SubmitReviewSection";
import GoalDedicationSection from "./GoalDedicationSection/GoalDedicationSection";
import { Helmet} from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PropertyPulse | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <LatestUserReview></LatestUserReview>
            <GoalDedicationSection></GoalDedicationSection>
            <SubmitReviewSection></SubmitReviewSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;