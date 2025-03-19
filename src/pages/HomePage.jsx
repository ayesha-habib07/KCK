import React from 'react'
import HeroSection from '../components/HeroSection';
import LegalQASection from './LegalQASection';
import FindAttorneySection from './FindAttorneySection';
import Consumers from './consumers';
import ChatWithAttorney from '../components/ChatWithAttorney';
import FindLawyer from '../components/FindLawyer';
import StatsSection from '../components/StatsSection';
import ContactSection from './ContactSection';

const HomePage = () => {
    return (
        <>
            <section id="home" >
                <HeroSection />
                <StatsSection />
                <Consumers />
                <LegalQASection />
                <FindAttorneySection />
                <ChatWithAttorney />
                <FindLawyer />
                <ContactSection />
            </section>


        </>
    )
}

export default HomePage