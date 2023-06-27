import { BsGithub, BsShareFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";


const Portfolio = () => {
    return(
        <section>
            <header id="hd" className="fixed-top py-2">
                <div className="d-flex justify-content-between align-items-center container">
                    <h1><a href="#"><img src="logo_name.svg" alt="logo" className='toplogo d-block'/></a></h1>
                    <ul id="gnb" className="d-flex">
                        <li><a href="#about" className='mx-4'>소개</a></li>
                        <li><a href="#review" className='mx-4'>작업</a></li>
                        <li><a href="#contact" className='mx-4'>연락처</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li className="text-justify-center"><a href=""><BsGithub/> Git</a></li>
                        <li><a href="" className='ms-3'><BsShareFill/> Notion</a></li>
                    </ul>
                </div>
            </header>
            <div id="slide" className="h-800 bg-white">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper h-800"
                    >
                    <SwiperSlide className='ss-1'></SwiperSlide>
                    <SwiperSlide className='ss-2'></SwiperSlide>
                    <SwiperSlide className='ss-3'></SwiperSlide>                
                </Swiper>
            </div>
            <div id="about" className="vh-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="ab-1 col-4">1</div>
                        <div className="ab-2 col-4">2</div>
                        <div className="ab-3 col-4">3</div>
                        <div className="ab-4 col-4">1</div>
                        <div className="ab-5 col-4">2</div>
                        <div className="ab-6 col-4">3</div>
                    </div>
                </div>
            </div>
            <div id="review" className="vh-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
            <div id="contact" className="vh-100 bg-light"></div>
        </section>
    )
}

export default Portfolio;