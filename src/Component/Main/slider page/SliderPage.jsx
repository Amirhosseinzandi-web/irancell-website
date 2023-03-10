import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import { useState } from 'react';
import BannerOne from "../../../img/slider/banner-1.jpg"
import BannerTwo from "../../../img/slider/banner-2.jpg"
import BannerThree from "../../../img/slider/banner-3.jpg"
import BannerFour from "../../../img/slider/banner-4.jpg"
import BannerFive from "../../../img/slider/banner-5.jpg"
import BannerSix from "../../../img/slider/banner-6.jpg"
import BannerSeven from "../../../img/slider/banner-7.jpg"

function SliderPage() {
    const [state, setState] = useState("")

    
    const swiperInit = (swiper) =>{
        setState(swiper)
    }


    const HandleMouseEnter = () =>{
        if(state !== ""){
            // state.autoplay.stop()
        }
    }


    const HandleMouseLeave = () =>{
        if(state !== ""){
        //  state.autoplay.start()
        }
    }



    return (
        <div className='w-full slider-container' onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}>
            <Swiper onSwiper={swiperInit}
                slidesPerView={1}
                spaceBetween={0}
                // autoplay={{
                //     delay: 3000
                // }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"

            >

                <SwiperSlide>
                <figure><img src={BannerOne} alt="" /></figure>
                <div className='banner-one-information'>
                    <p>!سیم کارت رو روشن کن</p>
                    <p>میلیون ها کمک هزینه خرید خودرو</p>
                    <button><i className="bi bi-chevron-left inline-flex"></i>اطلاعات بیشتر</button>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                <figure><img src={BannerTwo} alt="" /></figure>
                <div className='banner-two-information'>
                    <p>گردونه شانس رو بچرخون و جایزه بگیر</p>
                    <button><i className="bi bi-chevron-left inline-flex"></i>اطلاعات بیشتر</button>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                <figure><img src={BannerThree} alt="" /></figure>
                <div className='banner-three-information'>
                    <p>بسته های مکالمه جدید و هدیه ساز</p>
                    <p className='mt-4'>شگفت و گو و شگفتاک</p>
                    <button><i className="bi bi-chevron-left inline-flex"></i>اطلاعات بیشتر</button>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                <figure><img src={BannerFour} alt="" /></figure>
                <div className='banner-four-information'>
                    <p>TD-LTE خدمات اینترنت پرسرعت ایر​انسل</p>
                    <p className='mt-4'>دریچه ای به جریان دنیای مجازی</p>
                    <button><i className="bi bi-chevron-left inline-flex"></i>اطلاعات بیشتر</button>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                <figure><img src={BannerFive} alt="" /></figure>
                <div className='banner-five-information'>
                    <p>چند کاره چاره ساز</p>
                    <p className='mt-5'>نسل جدید سوپر اپلیکیشن ایرانسل‌من</p>
                    <p>PS5نصب و شرکت در قرعه کشی ۱۰ دستگاه</p>
                    <p>*۴۵#</p>
                    <button><i className="bi bi-chevron-left inline-flex"></i>اطلاعات بیشتر</button>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                <figure><img src={BannerSix} alt="" /></figure>
                <div className='banner-five-information'>
                    <p>چند کاره چاره ساز</p>
                    <p className='mt-5'>نسل جدید سوپر اپلیکیشن ایرانسل‌من</p>
                    <p>PS5نصب و شرکت در قرعه کشی ۱۰ دستگاه</p>
                    <p>*۴۵#</p>
                    <button><i className="bi bi-chevron-left inline-flex"></i>اطلاعات بیشتر</button>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                <figure><img src={BannerSeven} alt="" /></figure>
                </SwiperSlide>



            </Swiper>
        </div>
    )
}

export default SliderPage