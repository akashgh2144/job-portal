import { div } from "motion/react-client";
import Banner from "./Banner";
import FeatureStepsDemo from "./FeatureStepsDemo";
import Hotjobs from "./Hotjobs";
import JobCategories from "./JobCategories";
import ThreeDPhotoCarousel from "./ThreeDPhotoCarousel";


const Home = () => {
    return (
       <div className=" mt-4">

<div className="space-y-10">
            <Banner></Banner>
            <Hotjobs></Hotjobs>
            <JobCategories></JobCategories>
            <ThreeDPhotoCarousel></ThreeDPhotoCarousel>
            <FeatureStepsDemo></FeatureStepsDemo>
        </div>
       </div>
    );
};

export default Home;