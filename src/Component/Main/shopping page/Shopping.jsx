import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { EffectFlip, Pagination, Navigation } from "swiper";

function Shopping() {


    useEffect(() => {
        const _height = document.querySelector(".accordion-1 section").scrollHeight;
        document.querySelector(".accordion-1 section").style.height = `${_height}px`
        document.querySelector(".accordion-1").classList.add("active")
        document.querySelector(".accordion-1 i").style.transform = `rotateX(180deg)`
    }, [])

   
    const accordionHandler = (e) => {
        e.stopPropagation()
        const current = e.currentTarget;
        const _height = current.querySelector("section.slider-wrapper").scrollHeight;
 
        if(!e.target.closest(".accordion .slider-wrapper")){
            current.classList.toggle("active")
        }
        
        document.querySelectorAll(".accordion-items").forEach((para) => {
            if (para.getAttribute("data-id") !== current.getAttribute("data-id")) {
                para.classList.remove("active");
                para.querySelector("section").style.height = `0px`;
                para.querySelector("i").style.transform = `rotateX(0deg)`
            }
        })


        if (current.classList.contains("active")) {
            current.querySelector("section").style.height = `${_height}px`
            current.querySelector("i").style.transform = `rotateX(180deg)`
        } else {
            current.querySelector("section").style.height = `0px`;
            current.querySelector("i").style.transform = `rotateX(0deg)`
        }

    }





    return (
        <section className='shopping mt-9 px-2'>
            <div className='2xl:container 2xl:mx-auto'>

                <div className="flex flex-row-reverse justify-between">

                    <section>
                        <h1 className="fz-18">فروشگاه</h1>
                    </section>

                    <section>
                        <p className="self-yellow font-extrabold flex items-center"><i className="bi bi-chevron-left inline-flex mx-1"></i>برو به فروشگاه</p>
                    </section>

                </div>
                {/* ***********************start of accordion menu********************************************** */}

                <section className='accordion mt-7'>
                    <div className='accordion-items accordion-1' data-id="1" onClick={accordionHandler}>
                        <div className='shopping-details flex justify-between flex-row-reverse'>
                            <div className='flex flex-row-reverse items-center'>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/internet-packages.svg" alt="" /></figure>
                                <p>بسته های اینترنت</p>
                            </div>

                            <div className='self-yellow flex items-center'><i className='bi bi-chevron-down inline-flex'></i></div>
                        </div>
                        <section className='slider-wrapper'>
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                <h3 className='text-right my-5'>بسته‌های اینترنت پرسرعت و به‌صرفه، با حجم های متنوع</h3>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/postpaid-simcard.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold'>سیم کارت اعتباری</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'><span className='pl-1'>۵</span>گیگابایت اینترنت هدیه</li>

                                                <li className='flex flex-row-reverse my-2'><span className='pl-1'>۶۰</span>دقیقه مکالمهٔ رایگان با تمام خطوط داخلی کشور</li>

                                                <li className='flex flex-row-reverse'><span className='pl-1'>۶۰</span>پیامک رایگان به تمام خطوط داخلی کشور</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                                <SwiperSlide>
                                <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/0900-SimCards.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold flex'><span className='pr-1'>0900</span>سیم کارت باپیش شماره</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'><span className='pl-1'>۸</span>گیگابایت اینترنت</li>

                                                <li className='flex flex-row-reverse my-2'><span className='pl-1'>۹۰۰</span>دقیقه مکالمهٔ با خطوط داخلی کشور</li>

                                                <li className='flex flex-row-reverse'><span className='pl-1'>۵۰۰</span>عدد پیامک به خطوط داخلی کشور</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                                <SwiperSlide>
                                <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/postpaid-simcard.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold'>سیم کارت دائمی</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'><span className='pl-1'>۲۰</span>گیگابایت اینترنت هدیه</li>

                                                <li className='flex flex-row-reverse my-2'><span className='pl-1'>۹۰۰</span>دقیقه مکالمهٔ رایگان با تمام خطوط داخلی کشور</li>

                                                <li className='flex flex-row-reverse'><span className='pl-1'>۹۰۰</span>پیامک رایگان به تمام خطوط داخلی کشور</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>     
                                </SwiperSlide>

                            </Swiper>
                        </section>
                    </div>

                    <div className='accordion-items my-5' data-id="2" onClick={accordionHandler}>
                        <div className='shopping-details flex justify-between flex-row-reverse'>
                            <div className='flex flex-row-reverse items-center'>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/simcard.svg" alt="" /></figure>
                                <p>سیم کارت</p>
                            </div>

                            <div className='self-yellow flex items-center'><i className='bi bi-chevron-down inline-flex'></i></div>
                        </div>
                        <section className='slider-wrapper'>
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </section>
                    </div>

                    <div className='accordion-items' data-id="3" onClick={accordionHandler}>
                        <div className='shopping-details flex justify-between flex-row-reverse'>
                            <div className='flex flex-row-reverse items-center'>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/devices.svg" alt="" /></figure>
                                <p>دستگاه ها</p>
                            </div>

                            <div className='self-yellow flex items-center'><i className='bi bi-chevron-down inline-flex'></i></div>
                        </div>
                        <section className='slider-wrapper'>
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </section>
                    </div>

                </section>

            </div>
        </section>
    )
}

export default Shopping