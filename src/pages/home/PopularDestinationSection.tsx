import Container from "@/lib/Container";
import d1 from '../../../src/assets/d1.jpg'
import d2 from '../../../src/assets/d2.jpg'
import { useRef } from "react";
import { useScroll, motion } from "framer-motion"


const PopularDestinationSection = () => {
    const cardRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['0.5 1', '1 1.5']
    })
    return (
        <Container classname={"mt-16"}>
            <motion.div
            ref ={cardRef} 
            style={{
                scale:scrollYProgress
            }}>
                <div className="text-center uppercase w-full max-w-5xl mx-auto">
                    <h1 className="font-semibold mb-5 text-4xl ">popular destinations</h1>
                    <p className="mt-3 text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
            </motion.div>
            <div className="grid grid-cols-12 gap-5 mt-16">
                <div className="w-full h-[300px] col-span-4 rounded-sm bg-red-500">
                    <img className="w-full h-full rounded-sm" src={d1} alt="" />
                </div>
                <div className="w-full h-[300px] col-span-4 rounded-sm bg-red-500">
                    <img className="w-full h-full rounded-sm" src={d1} alt="" />
                </div>
                <div className="w-full h-[300px] col-span-4 rounded-sm bg-red-500">
                    <img className="w-full h-full rounded-sm" src={d1} alt="" />
                </div>
                <div className="w-full h-[300px] col-span-6 rounded-sm bg-red-500">
                    <img className="w-full h-full rounded-sm" src={d2} alt="" />
                </div>
                <div className="w-full h-[300px] col-span-6 rounded-sm bg-red-500">
                    <img className="w-full h-full rounded-sm" src={d2} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default PopularDestinationSection;