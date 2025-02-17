import Container from "@/lib/Container";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="bg-[#343A40] py-2 text-white">
                <Container classname={"flex justify-between"}>
                <div className="flex items-center gap-4">
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Hotels</NavLink> </ul>
                        <ul>/</ul>
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Packages</NavLink> </ul>
                        <ul>/</ul>
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Place</NavLink> </ul>

                    </div>
                    <div className="flex items-center gap-4">
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Login</NavLink> </ul>
                        <ul>/</ul>
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Resister</NavLink> </ul>

                    </div>
                </Container>
             
            </div>
            <div className="py-4">
                    <Container classname={"flex items-center justify-between"}>
                        <div>
                            <h2 className="text-4xl font-bold"><span className="text-[#31B16F]">TRA</span>VEL<span className="text-[#31B16F]">ER</span></h2>
                        </div>
                        <div className="flex items-center gap-4">
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Home</NavLink> </ul>
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Hotels</NavLink> </ul>
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Packge</NavLink> </ul>
                        <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">Blogs</NavLink> </ul>
                        {/* <ul> <NavLink className="hover:text-[#5191fa] transition-all" to="/">About Us</NavLink> </ul> */}
                        </div>
                    </Container>

                </div>
        </div>
    );
};

export default Navbar;