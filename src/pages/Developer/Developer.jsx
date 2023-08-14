import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import './Developer.css'
import Container from '../shared/Container';

const Developer = () => {
    const [devs, setDevs] = useState([])


    useEffect(() => {
        fetch('/developers.json')
            .then(res => res.json())
            .then(data => setDevs(data))
    }, [])

    return (
      
            <div className='px-12 mt-14 mb-20'>
            <h2 className='text-4xl font-bold text-center mb-12'>Meet all the developer</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{ delay: 2500 }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
                breakpoints={{
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    }
                }}
            >
                {devs.map(dev => (
                    <SwiperSlide key={dev.id} className='swiper-slide'>
                        <div className='swiper-msg z-10 shadow-lg mb-6 p-6 h-[120px]'>
                            <div>
                                <FaQuoteLeft className=' mx-auto text-3xl mb-3' ></FaQuoteLeft>
                            </div>
                            <p className='text-center'>
                                {dev?.description}
                            </p>
                        </div>
                        <div className='flex items-center justify-center gap-5 '>
                            <div>
                                <img className='devImg' src={dev?.image} alt={dev?.name} />
                            </div>
                            <div className='swiper-details '>
                                <p >{dev?.name}</p>
                                <p className='text-gray-400' >{dev?.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
   
    );
};

export default Developer;