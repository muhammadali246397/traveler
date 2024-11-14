
import HeroSection from "./HeroSection";
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
         <PopularDestinationSection/>
       </div>
     
    );
};

export default Home;