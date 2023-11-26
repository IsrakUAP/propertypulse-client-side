import Navbar from "../../Shared/Navbar/Navbar";
import AdvertisementSection from "../AdvertisementSection/AdvertisementSection";
import Banner from "../Banner/Banner";
import LatestUserReview from "../LatestUserReview/LatestUserReview";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <LatestUserReview></LatestUserReview>
        </div>
    );
};

export default Home;