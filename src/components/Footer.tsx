import Container from "@/lib/Container";
import img from '../assets/footer.jpg'
import { FaFacebookF, FaFax, FaInbox, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { FaGooglePlusG, FaPhoneAlt, FaTwitter } from "react-icons/fa";

import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-16" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'cover' }}>
            <Container classname={'py-16'}>
                <div className="grid grid-cols-3">
                    <div >
                        <div className="text-white "><span className="border-b-2 border-white py-3 text-2xl font-semibold">Travel</span></div>
                        <div className="text-white mt-8">
                            <p><span className="inline-flex me-3"> <FaLocationDot></FaLocationDot></span>Brodway Road 234, New York</p>
                            <p className="my-3"><span className="inline-flex me-3"> <FaPhoneAlt /></span>Mobile: +00 1234 456789 <br />
                                <span className="ms-6">+10 1234 456789</span></p>
                            <p><span className="inline-flex me-3"> <FaInbox /></span>Mail: info@travel.com</p>
                            <p className="my-3"><span className="inline-flex me-3"> <FaFax /></span>Fax: 000 123 2294 089</p>

                        </div>
                        <div className="grid grid-cols-4 w-1/2 mt-8 gap-1">
                            <div><Button className="bg-blue-600"><span><FaFacebookF /></span></Button></div>
                            <div><Button className="bg-red-500"><span><FaGooglePlusG /></span></Button></div>
                            <div><Button><span><FaLinkedinIn /></span></Button></div>
                            <div><Button><span><FaTwitter /></span></Button></div>

                        </div>
                    </div>
                    <div>
                        <div className="text-white "><span className="border-b-2 border-white py-3 text-xl font-semibold">Tag</span></div>
                        <div className="mt-8 grid gap-1">
                            <div className="w-8/12 h-10 grid grid-cols-3 gap-1">
                                <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                                <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                                <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            </div>
                            <div className="w-10/12 grid grid-cols-3 gap-1 h-10">
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            </div>
                            <div className="w-8/12 h-10 grid grid-cols-3 gap-1">
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>

                            </div>
                            <div className="w-10/12 grid grid-cols-3 gap-1 h-10">
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            </div>
                            <div className="w-8/12 h-10 grid grid-cols-3 gap-1">
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            <Link to='/' className="bg-white bg-opacity-20 text-white hover:bg-blue-500 flex justify-center items-center ">some text</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-white "><span className="border-b-2 border-white py-3 text-xl font-semibold">Contact Us</span></div>

                </div>
            </Container>
        </div>
    );
};

export default Footer;