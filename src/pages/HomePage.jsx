import React from 'react'
import HeroSection from '../components/HeroSection';
import LegalQASection from './LegalQASection';
import FindAttorneySection from './FindAttorneySection';
import Consumers from './Consumers';
import ChatWithAttorney from '../components/ChatWithAttorney';
import FindLawyer from '../components/FindLawyer';
import StatsSection from '../components/StatsSection';
import ContactSection from './ContactSection';
// import Carousel from '../Components/Carousel'
// import Rent from '../Components/Rent'
// import StatsSection from '../Components/StatsSection'
// import ExploreApartments from '../Components/ExploreApartments'
// import LogoCarousel from '../Components/LogoCarousel'
// import Testimonials from '../Components/Testimonials'
// import DreamHouseForm from '../Components/DreamHouseForm'
// import SellingOption from '../Components/SellingOption'
// import Agents from '../Components/Agents'
// import houseImage from "../assets/house5.jpg"; 
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <Consumers />
            <LegalQASection />
            <FindAttorneySection />
            <ChatWithAttorney />
            <FindLawyer />
            <ContactSection />
          
            {/* <Carousel />
            <Rent />
            <SellingOption  isHomePage={true}/>
            <StatsSection />
            <ExploreApartments />
            <Agents isHomePage={true} /> */}
            {/* <LogoCarousel /> */}
            {/* <Testimonials  houseImage={houseImage} heading =" What Our Clients Say" />
            <DreamHouseForm /> */}
        </>
    )
}

export default HomePage