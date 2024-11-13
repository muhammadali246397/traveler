

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "./../../assets/img1.jpg"
import img2 from "./../../assets/img2.jpg"
import img3 from "./../../assets/img3.jpg"
import Container from '@/lib/Container';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='w-full' style={{backgroundImage :`url(${img1})`,backgroundSize:'cover' }}>
            <div className='w-full py-28 bg-black bg-opacity-40'>
                <Container classname={'text-center'}>
                <h1 className='text-7xl lg:px-10 font-bold text-white leading-[90px]'>Vulputate Mollis Ultricies Fermentum Parturient</h1>
                <Button className='mt-10 bg-[#5191FA] text-white text-lg font-semibold'>Read More</Button>
                </Container>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full' style={{backgroundImage :`url(${img2})`,backgroundSize:'cover' }}>
            <div className='w-full py-28 bg-black bg-opacity-40'>
                <Container classname={'text-center'}>
                <h1 className='text-7xl lg:px-10 font-bold text-white leading-[90px]'>Vulputate Mollis Ultricies Fermentum Parturient</h1>
                <Button className='mt-10 bg-[#5191FA] text-white text-lg font-semibold'>Read More</Button>
                </Container>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full' style={{backgroundImage :`url(${img3})`,backgroundSize:'cover' }}>
            <div className='w-full py-28 bg-black bg-opacity-40'>
                <Container classname={'text-center'}>
                <h1 className='text-7xl lg:px-10 font-bold text-white leading-[90px]'>Vulputate Mollis Ultricies Fermentum Parturient</h1>
                <Button className='mt-10 text-white text-lg font-semibold'>Read More</Button>
                </Container>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default HeroSection;