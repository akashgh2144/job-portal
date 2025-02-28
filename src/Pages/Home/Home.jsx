import Banner from "./Banner";
import FeatureStepsDemo from "./FeatureStepsDemo";
import Hotjobs from "./Hotjobs";
import JobCategories from "./JobCategories";
import ThreeDPhotoCarousel from "./ThreeDPhotoCarousel";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hotjobs></Hotjobs>
            <JobCategories></JobCategories>
            <ThreeDPhotoCarousel></ThreeDPhotoCarousel>
            <FeatureStepsDemo></FeatureStepsDemo>
        </div>
    );
};

export default Home;