import Container from "@/lib/Container";
import bg from "./../../assets/img3.jpg"
import { Parallax } from "react-parallax";
const SearchSection = () => {
    return (
        <div>
            <Parallax

                bgImage={(`${bg}`)}
                bgImageAlt="the dog"
                strength={500}
            >
                <div className="bg-black bg-opacity-70">
                    <Container classname={'py-10'}>
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
                            <div className="w-full max-w-[250px]">
                                <label className="text-white block mb-3" htmlFor="Keywords">Keywords</label>
                                <input className=" py-2 px-1 w-full rounded-md" type="text" placeholder="Enter Zip code" />
                            </div>
                            <div className="w-full max-w-[250px]">
                                <label className="text-white block mb-3" htmlFor="Activity">Activity</label>
                                {/* <input className=" py-2 px-1 rounded-md" type="text" /> */}
                                <select className=" py-2 px-1 w-full rounded-md" name="Activity" id="Activity">
                                    <option className="text-[#495057]" value="Any">Any</option>
                                    <option className="text-[#495057]" value="saab">Saab</option>
                                    <option className="text-[#495057]" value="mercedes">Mercedes</option>
                                    <option className="text-[#495057]" value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="w-full max-w-[250px]">
                                <label className="text-white block mb-3" htmlFor="Destination">Destination</label>
                                <select className=" py-2 px-1 w-full rounded-md" name="Activity" id="Activity">
                                    <option value="Any">Any</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="w-full max-w-[250px]">
                                <label className="text-white block mb-3" htmlFor="Duration">Duration</label>
                                <select className=" py-2 px-1 w-full rounded-md" name="Activity" id="Activity">
                                    <option value="Any">Any</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="w-full max-w-[250px]">
                                <label className="text-white block mb-3" htmlFor="Date">Date</label>
                                <input className=" py-2 px-1 w-full rounded-md" type="text" placeholder="Enter date"/>
                            </div>
                            <div className="w-full max-w-[250px]">
                                <label className="text-white block mb-3" htmlFor="Find">Find</label>
                                <input className=" py-2 px-1 w-full rounded-md bg-[#5191FA] text text-white" type="submit" value="SEARCH" />
                            </div>

                        </div>
                    </Container>
                </div>

            </Parallax>
        </div>
    );
};

export default SearchSection;