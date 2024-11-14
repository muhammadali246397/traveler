import Card from "@/components/ui/Card";
import Container from "@/lib/Container";
import { useEffect, useState } from "react";



const TopPlaceSection = () => {

    const [ allCards, setAllCard] = useState([]);
    console.log(allCards)

    useEffect(() => {
    fetch(`"../../assets/cardInfo.json"`)
    .then(res => res.json())
    .then(data => setAllCard(data))
    }, [])
    
    return (
        <Container classname={"py-16"}>
            <div className="text-center uppercase">
                <h1 className="font-semibold mb-5 text-4xl ">Top Places</h1>
                <p className="mt-3 text-gray-700 text-xl">BEST TRAVEL PACKAGES AVAILABLE</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </Container>
    );
};

export default TopPlaceSection;