import Container from "@/lib/Container";
import img from "../../assets/img2.jpg"
import img1 from "../../assets/img3.jpg"
import img2 from "../../assets/login.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";


type FormData = {
    userName:string
    email: string
    pass: string
}

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSbumit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className="grid grid-cols-12">

            <div className="md:col-span-8 col-span-12">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='w-full h-screen relative'>
                        <img className="max-w-full h-screen" src={img} alt="" />
                        <div className="bg-black absolute top-0 right-0 w-full h-screen bg-opacity-50"></div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-screen relative '>
                        <img className="max-w-full h-screen" src={img1} alt="" />
                        <div className="bg-black absolute top-0 right-0 w-full h-screen bg-opacity-50"></div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-screen relative' >
                        <img className="max-w-full h-screen" src={img2} alt="" />
                        <div className="bg-black absolute top-0 right-0 w-full h-screen bg-opacity-50"></div>
                    </SwiperSlide>
                </Swiper>

            </div>

            <div className="md:col-span-4 col-span-12 h-screen px-5">
                <Container classname=''>
                    <div className="mt-10">
                        <h2 className="text-4xl font-bold"><span className="text-[#31B16F]">TRA</span>VEL<span className="text-[#31B16F]">ER</span></h2>
                    </div>
                    <div>
                        <h2 className="text-3xl mt-6 font-semibold">Create an account! It's free and <span className="text-blue-600">always will be.</span></h2>
                    </div>
                    <div>
                        <p className="text-2xl mt-5 text-gray-800">Welcome back,<br /> please login to your account</p>
                    </div>
                    <form onSubmit={onSbumit} action="">
                        <div className="border px-3 py-5 mt-10 relative">
                            <label htmlFor="">User Name..</label> <br />
                            <input {...register("userName")} className="focus:border-white mt-2 w-full" type="text" placeholder="user..." />
                            <div className="absolute w-[2px] h-[96px] bg-blue-600 top-0 left-0"></div>
                        </div>
                        <div className="border px-3 py-5 relative ">
                            <label htmlFor="">Email Adress..</label> <br />
                            <input {...register("email")} className="focus:border-white mt-2 w-full" type="text" placeholder="Email..." />
                            <div className="absolute w-[2px] h-[96px] bg-blue-600 top-0 left-0"></div>
                        </div>
                        <div className="border px-3 py-5 relative ">
                            <label htmlFor="">Password..</label> <br />
                            <input {...register("pass")} className="focus:border-white mt-2 w-full" type="text" placeholder="Pass..." />
                            <div className="absolute w-[2px] h-[96px] bg-blue-600 top-0 left-0"></div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>
                                <input className="text-xl mr-2" type="checkbox" />
                                <label className="text-sm text-gray-600" htmlFor="">I agree to the Terms of Service & Privacy Policy</label>
                            </div>
                           
                        </div>
                        <div className="mt-5">
                            <input type="submit" className="mr-4 px-4 py-2 bg-black rounded-sm text-white cursor-pointer" value="Submit" />
                            <Link to='/'><Button className="bg-white text-blue-600 border-blue-600 rounded-sm px-4 py-2 border hover:text-white">Back</Button></Link>
                        </div>
                    </form>
                </Container>
            </div>

        </div>
    );
};

export default Signup;