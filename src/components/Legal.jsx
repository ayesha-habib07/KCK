import { Star, User, MessageCircle, Phone, Mail, Calendar, MapPin, QuoteIcon } from "lucide-react"
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import profile from '../assets/profile.png'


export default function LegalServices() {
    return (
        <div className="w-full relative overflow-hidden      px-4 md:px-16 lg:px-24 xl:px-32 py-12 bg-[#f2f8fd] text-center">
            {/* Main container */}
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Content section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
                    {/* Attorney card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden">
                                <img
                                    src={img1}
                                    alt="Martha Hale"
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg ">Satto M. B. Kobba</h3>
                                <p className="text-gray-600  text-lg text-left pb-1.5">Managing Partner</p>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                
                            </div>
                           
                        </div>


                        <div className="h-3 bg-gray-200 rounded-full mb-4 w-60"></div>
                        <div className="h-3 bg-gray-200 rounded-full mb-6 w-50"></div>
                        


                        <div className="flex  items-center gap-4 mt-4">
                            <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                                <Phone className="h-5 w-5" />
                            </button>
                            <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                                <Mail className="h-5 w-5" />
                            </button>
                            <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                                <Calendar className="h-5 w-5" />
                            </button>
                            <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                                <MapPin className="h-5 w-5" />
                            </button>
                        </div>


                    </div>

                    {/* Center image */}
                    <div className="relative z-0 -mt-12 md:mt-0">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-sky-200 rounded-t-full opacity-70"></div>
                        <img
                            src={profile}
                            alt="Attorney"
                            width={300}
                            height={200}
                            className="relative z-10"
                        />
                    </div>

                    {/* Testimonial card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full z-10 relative">
                        <div className="absolute -top-8 -right-8 bg-cyan-500 rounded-full p-3 text-white" >
                            <QuoteIcon />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden">
                                <img
                                    src={img3}
                                    alt="Martha Hale"
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium  pb-1.5">Mustapha T. Koroma</h3>
                                <p className="text-gray-600  text-lg text-left pb-1.5">Associate</p>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700">
                            Experienced in Civil and Criminal Law, Corporate Law,
                            and Maritime Law, with a strong background in dispute resolution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



