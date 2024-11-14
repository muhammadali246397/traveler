import { Parallax } from "react-parallax";
import bg from "./../../assets/img2.jpg"
import Container from "@/lib/Container";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const PromotionSection = () => {
    return (
        <div className="my-12">
            <Parallax
                bgImage={bg}
                strength={200}
            >
                <div className="bg-black bg-opacity-65">
                    <Container classname={"py-32"}>
                        <h4 className="text-2xl font-bold text-white">1000 $ for person - 6 nights</h4>
                        <h2 className="text-5xl font-bold my-5 text-white">Discount <span>10-30%</span> Off</h2>
                        <p className="text-white text-lg w-full max-w-xl">If you’re looking for a truly memorable family break here you find the lowest price on the right hotel for you. It's indescribable. Stay up to date and check out the deals for these trending destinations.</p>
                        <NavLink to="/"><Button className="bg-white rounded-full my-5 hover:text-white text-lg font-semibold text-gray-600">See Promotion Tours</Button></NavLink>
                    </Container>
                </div>

            </Parallax>
        </div>
    );
};

export default PromotionSection;