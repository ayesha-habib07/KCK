import React from "react";
import DesktopView from '../assets/heroImg.jpg';
import MobileView from '../assets/tabletView.png';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center text-center lg:flex-row flex-col px-6 bg-white pt-16 md:pt-20 font-Jakarta ">
      {/* Left Side - Text Content */}
      <div className="flex flex-col justify-center items-center text-center lg:text-left">
        <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#393f48] font-Jakarta">
  Kobba & Co. –  
  <br />
  <span className="text-[#008cc9]">
    Expert Legal Solutions <br /> You Can Trust
  </span>
</h1>

          <p className="text-gray-600 mt-3 text-lg text-left">Providing comprehensive legal services with professionalism, <br></br> dedication, and expertise.</p>
        </div>
      </div>

      <div>
        <picture>
          <source srcSet={MobileView} media="(max-width: 767px)" />
          <img src={DesktopView} className="w-full h-auto" alt="Hero" />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;