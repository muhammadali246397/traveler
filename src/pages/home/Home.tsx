
import HeroSection from "./HeroSection";
import HolidaysPackage from "./HolidaysPackage";
import PopularDestinationSection from "./PopularDestinationSection";
import PromotionSection from "./PromotionSection";
import SearchSection from "./SearchSection";
import TopPlaceSection from "./TopPlaceSection";


const Home = () => {
    return (
     
       <div>
         <HeroSection/>
         <SearchSection/>
         <TopPlaceSection/>
         <PromotionSection/>
        <div className="bg-[#f7f9fb]">
        <PopularDestinationSection/>
        <HolidaysPackage/>
        </div>
       </div>
     
    );
};

export default Home;