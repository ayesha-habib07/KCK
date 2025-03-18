import React from "react";
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

const AttorneySearch = () => {
    const attorneys = [
        { name: "Mustapha Twabay Koroma", reviews: 85, rating: 9, location: "Freetown, Sierra Leone", specialties: ["Criminal Law", "Corporate Law"], image: img1 },
        { name: "Satto Mary Baindu Kobba", reviews: 90, rating: 10, location: "Freetown, Sierra Leone", specialties: ["Family Law", "Contract Law"], image: img2 },
        { name: "Victoria Ngozi Obi", reviews: 70, rating: 8, location: "Freetown, Sierra Leone", specialties: ["Business Law", "Human Rights"], image: img3 },
    ];

    return (
        <section className="flex flex-col lg:flex-row items-start justify-between gap-16 p-8 lg:p-16 max-w-7xl mx-auto">
            
            {/* Left Side - Search Explanation */}
            <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-bold leading-tight">
                Need Expert Legal Assistance?
                </h2>
                <p className="text-gray-600">
                Connect with experienced attorneys specializing in various fields, ensuring you receive the best legal guidance and representation.
                </p>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">1. Search for Experienced Lawyers</h3>
                        <p className="text-gray-600 text-sm">Find professionals specializing in your legal needs.</p>
                    </div>
                    <div className="border-b border-gray-300"></div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">2. Read Verified Client Reviews</h3>
                        <p className="text-gray-600 text-sm">Gain insights into client experiences and case outcomes.</p>
                    </div>
                    <div className="border-b border-gray-300"></div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">3. Schedule a Consultation</h3>
                        <p className="text-gray-600 text-sm">Book an appointment to discuss your legal matters.</p>
                    </div>
                </div>

                <button className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                    Find a Lawyer
                </button>
            </div>

            {/* Right Side - Search Box & Attorney List */}
            <div className="w-full lg:w-1/2 space-y-8">
                
                {/* Search Bar */}
                <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden">
                    <input type="text" placeholder="Bankruptcy" className="flex-1 p-4 border border-gray-300" />
                    <input type="text" placeholder="Chicago" className="flex-1 p-4 border border-gray-300 border-l-0" />
                    <button className="bg-orange-500 text-white px-6 py-4">Search</button>
                </div>

                {/* Attorney List */}
                <div className="space-y-6">
                    {attorneys.map((attorney, index) => (
                        <div key={index} className="flex items-center bg-white shadow-md rounded-lg p-6 gap-6">
                            <img src={attorney.image} alt={attorney.name} className="w-24 h-24 object-cover rounded-full" />
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold">{attorney.name}</h3>
                                <p className="text-sm text-gray-600">{attorney.reviews} reviews • Rating: {attorney.rating}</p>
                                <p className="text-sm text-gray-600">📍 {attorney.location}</p>
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {attorney.specialties.map((specialty, i) => (
                                        <span key={i} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AttorneySearch;
