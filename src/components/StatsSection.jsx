import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold">1.1+ million</h2>
          <p className="text-base md:text-lg">Lawyers in Our Network</p>
        </div>

        {/* Divider (Hidden on small screens) */}
        <div className="hidden md:block w-[2px] h-20 bg-white"></div>

        {/* Item 2 */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold">65+ million</h2>
          <p className="text-base md:text-lg">Annual Visitors</p>
        </div>

        {/* Divider (Hidden on small screens) */}
        <div className="hidden md:block w-[2px] h-20 bg-white"></div>

        {/* Item 3 */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold">17+ million</h2>
          <p className="text-base md:text-lg">Legal Questions Answered</p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
