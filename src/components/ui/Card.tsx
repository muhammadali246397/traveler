import p1 from "./../../assets/p1.jpg"
import { Button } from "./button";
const Card = () => {
    return (
        <div className="w-full max-w-md border border-gray-100">
            <div className="w-full">
                <img className="w-full"  src={p1} alt="" />
            </div>
            <div>
                <h4 className="font-bold text-3xl py-5 text-center">Japan Tokyo</h4>
                <p className="text-gray-700 text-center px-8 pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, sequi optio necessitatibus nostrum deserunt sed.</p>
            </div>
            <div>
                <Button className="rounded-none w-1/2">Japan</Button>
                <Button className="bg-secondary rounded-none w-1/2">Relax</Button>
            </div>
            
        </div>
    );
};

export default Card;