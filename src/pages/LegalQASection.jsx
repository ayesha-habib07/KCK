import { FaUserCircle } from "react-icons/fa";
import img2 from '../assets/img2.jpeg'

const LegalQASection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-6 lg:p-12 max-w-7xl mx-auto">
      
      {/* Left Side - Image with Floating Cards */}
      <div className="relative w-full max-w-lg lg:max-w-xl">
        <img
          src={img2}
          alt="Man asking legal question"
          className="w-full h-[500px] object-cover rounded-2xl"
        />
        
        {/* Floating Question Bubble */}
        <div className="absolute top-4 left-1/4 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-3 w-64">
          <p className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded-md inline-block">
          Legal Inquiry
          </p>
          <p className="text-lg font-medium mt-2">
          What are my rights as a tenant if my landlord refuses repairs?
          </p>
        </div>

        {/* Floating Answer 1 */}
        <div className="absolute bottom-10 left-0 bg-white shadow-lg rounded-lg p-3 w-56 flex items-center gap-2">
          <FaUserCircle className="text-blue-500 text-2xl" />
          <div>
            <p className="text-xs font-semibold">John Smit</p>
            <p className="text-xs text-gray-500">Property Lawyer</p>
            <p className="text-xs text-gray-700 mt-1">
            Landlords are required by law to maintain livable conditions....
            </p>
          </div>
        </div>

        {/* Floating Answer 2 */}
        <div className="absolute bottom-24 right-0 bg-white shadow-lg rounded-lg p-3 w-52 flex items-center gap-2">
          <FaUserCircle className="text-red-500 text-2xl" />
          <div>
            <p className="text-xs font-semibold">Emma Brown</p>
            <p className="text-xs text-gray-500">Real Estate Lawyer</p>
            <p className="text-xs text-gray-700 mt-1">
            If you have children together, you will need...
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-16">
        <h2 className="text-4xl lg:text-4xl font-bold leading-tight">
        Have Legal Concerns? <br /> Get Expert Guidance!
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
        Our experienced legal team provides answers to your most pressing legal questions. Whether it's property disputes, business laws, or family matters, we’ve got you covered.
        </p>

        {/* Added a line after the paragraph */}
        <div className="border-b border-gray-300 my-6"></div>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="font-semibold text-lg">1. Free Legal Consultation</h3>
            <p className="text-gray-600 text-sm">
            Submit your legal question, and our qualified lawyers will provide guidance promptly.
            </p>
          </div>
          {/* Added a line after the paragraph */}
        <div className="border-b border-gray-300 my-6"></div>
          <div>
            <h3 className="font-semibold text-lg">2. Browse Our Legal Insights</h3>
            <p className="text-gray-600 text-sm">
            Access a wealth of legal knowledge and previously answered questions to understand your rights better.
            </p>
          </div>
        </div>
        {/* Added a line after the paragraph */}
        <div className="border-b border-gray-300 my-6"></div>

        <button className="mt-8 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition">
        Get Legal Advice
        </button>
      </div>
    </div>
  );
};

export default LegalQASection;
