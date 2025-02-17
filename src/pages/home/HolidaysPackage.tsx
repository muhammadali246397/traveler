import Container from "@/lib/Container";
import img1 from './../../assets/c1.jpg'
import img2 from './../../assets/c2.jpg'
import img3 from './../../assets/c3.jpg'
import img4 from './../../assets/c4.jpg'
import { FaStar } from "react-icons/fa6";


const HolidaysPackage = () => {
    return (
        <div>
            <Container classname={"py-16"}>
                <div className="text-center uppercase w-full max-w-5xl mx-auto">
                    <h1 className="font-semibold mb-5 text-4xl ">Best Holiday Packages</h1>
                    <p className="mt-3 text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="grid md:grid-cols-12 bg-white shadow-md rounded-md">
                        <div className="col-span-12 lg:col-span-5 ">
                            <img className="sm:rounded-t-md lg:rounded-tr-none lg:rounded-l-md" src={img1} alt="" />
                        </div>
                        <div className="px-5 py-4 col-span-12 lg:col-span-7">
                            <p className="text-blue-600 font-semibold">2 Days 3 Night</p>
                            <h2 className="text-2xl font-semibold hover:text-blue-600 cursor-pointer transition-all">Weekdays in South America</h2>
                            <p className="text-gray-400 mt-2">Peelamedu, Cbe, South America</p>
                            <div className="flex justify-between mt-10 items-center">
                                <div className="mt-5">
                                    <div className="flex text-orange-500 py-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-gray-400">(5 reviews)</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 line-through">$700</p>
                                    <h2 className="text-4xl font-bold">$550</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="grid md:grid-cols-12 bg-white shadow-md rounded-md">
                        <div className="col-span-12 lg:col-span-5 ">
                            <img className="sm:rounded-t-md lg:rounded-tr-none lg:rounded-l-md" src={img2} alt="" />
                        </div>
                        <div className="px-5 py-4 col-span-12 lg:col-span-7">
                            <p className="text-blue-600 font-semibold">2 Days 3 Night</p>
                            <h2 className="text-2xl font-semibold hover:text-blue-600 cursor-pointer transition-all">Weekdays in South America</h2>
                            <p className="text-gray-400 mt-2">Peelamedu, Cbe, South America</p>
                            <div className="flex justify-between mt-10 items-center">
                                <div className="mt-5">
                                    <div className="flex text-orange-500 py-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-gray-400">(5 reviews)</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 line-through">$700</p>
                                    <h2 className="text-4xl font-bold">$550</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="grid md:grid-cols-12 bg-white shadow-md rounded-md">
                        <div className="col-span-12 lg:col-span-5 ">
                            <img className="sm:rounded-t-md lg:rounded-tr-none lg:rounded-l-md" src={img3} alt="" />
                        </div>
                        <div className="px-5 py-4 col-span-12 lg:col-span-7">
                            <p className="text-blue-600 font-semibold">2 Days 3 Night</p>
                            <h2 className="text-2xl font-semibold hover:text-blue-600 cursor-pointer transition-all">Weekdays in South America</h2>
                            <p className="text-gray-400 mt-2">Peelamedu, Cbe, South America</p>
                            <div className="flex justify-between mt-10 items-center">
                                <div className="mt-5">
                                    <div className="flex text-orange-500 py-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-gray-400">(5 reviews)</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 line-through">$700</p>
                                    <h2 className="text-4xl font-bold">$550</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="grid md:grid-cols-12 bg-white shadow-md rounded-md">
                        <div className="col-span-12 lg:col-span-5 ">
                            <img className="sm:rounded-t-md lg:rounded-tr-none lg:rounded-l-md" src={img4} alt="" />
                        </div>
                        <div className="px-5 py-4 col-span-12 lg:col-span-7">
                            <p className="text-blue-600 font-semibold">2 Days 3 Night</p>
                            <h2 className="text-2xl font-semibold hover:text-blue-600 cursor-pointer transition-all">Weekdays in South America</h2>
                            <p className="text-gray-400 mt-2">Peelamedu, Cbe, South America</p>
                            <div className="flex justify-between mt-10 items-center">
                                <div className="mt-5">
                                    <div className="flex text-orange-500 py-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-gray-400">(5 reviews)</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 line-through">$700</p>
                                    <h2 className="text-4xl font-bold">$550</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                
               
                   
                 
                </div>
            </Container>
        </div>
    );
};

export default HolidaysPackage;