import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper";

function socialMedia() {
  return (
    <div className='irancell-social-media-container mt-[12%] py-9'>
      <svg viewBox="0 0 1366 19.18" preserveAspectRatio="none" className="wave2">
        <path d="M683.1,18.3C386.63,18.3,129.24,10.85,0,0V19.18H1366V0C1236.66,10.84,979.37,18.3,683.1,18.3Z" fill='#F2F2F2'></path>
      </svg>
      {/* ****************************** */}
      <div className='irancell-social-media-wrapper 2xl:container mx-auto px-3 sm:w-[90%]'>


        <div className='irancell-social-media-top'>
          <div className='flex flex-col items-center md:flex-row-reverse'>

            <div className='md:w-[25%] flex justify-center lg:w-[20%]'>
              <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Group-250-2.png" alt="" /></figure>
            </div>

            <div className='text-center md:text-right md:w-[40%] md:px-5 lg:w-[56%]'>
              <h2 className='fz-18 my-3 lg:my-2'>ایرانسل در اینستاگرام</h2>
              <h3>@Irancell</h3>
              <p className='rtl mt-3 lg:mt-2'>اولین نفر از جشنواره‌ها و اتفاقات جدید باخبر شوید.</p>
            </div>

            <div className='w-full mt-[10%] md:w-[35%] md:m-0 lg:w-[24%]'>
              <button className="w-full bg-yellow flex items-center justify-between text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>دنبال کنید</button>
            </div>
          </div>
        </div>


        <div className='irancell-social-media-bottom md:flex md:justify-center mt-9'>
          <div className='md:hidden'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><figure><img src="https://irancell.ir/wp-content/uploads/2022/08/4.jpg" alt="" /></figure></SwiperSlide>
              <SwiperSlide><figure><img src="https://irancell.ir/wp-content/uploads/2022/08/5.jpg" alt="" /></figure></SwiperSlide>
              <SwiperSlide><figure><img src="https://irancell.ir/wp-content/uploads/2022/08/1.jpg" alt="" /></figure></SwiperSlide>
              <SwiperSlide><figure><img src="https://irancell.ir/wp-content/uploads/2022/08/2.jpg" alt="" /></figure></SwiperSlide>
              <SwiperSlide><figure><img src="https://irancell.ir/wp-content/uploads/2022/08/3.jpg" alt="" /></figure></SwiperSlide>
            </Swiper>
          </div>
          {/* ************************ */}
          <div className='hidden md:grid 2xl:container 2xl:mx-auto'>
            <section className='irancell-social-media-bottom-left'>
              <div>
                <figure><img src="https://irancell.ir/wp-content/uploads/2022/08/3.jpg" alt="" /></figure>
                <div>
                  <p className='rtl'>
                    همیشه در دسترس، همیشه کامل . 📱سوپراپلیکیشن ایرانسل من با پوشش خدمات مورد نیاز شما، ابزاری حرفه‌ای برای زندگی در عصر دیجیتال است. . از تجربه کاربری‌تون با #ایرانسل_من برامون بگین. 💛 .اطلاعات بیشتر:⬇️ Irancell.ir . #irancell#MTNIrancell #ایرانسل #سوپراپلیکیشن #ارتباط_دائمی . Alt text: کاراکتر سوپراپلیکیشن در آسمان است و اپ‌های زیادی دور تا دورش را گرفته‌اند.</p>
                </div>
              </div>
              <div>
                <figure><img src="https://irancell.ir/wp-content/uploads/2022/08/2.jpg" alt="" /></figure>
                <div>
                  <p className='rtl'>
                    . با خرید سیم‌کارت‌های 0900، هم می‌تونین شماره دلخواه‌تون رو انتخاب کنین، هم صاحب یه پیش‌شماره‌ی به‌یادموندنی می‌شین. 🤩🔥 . خرید از فروشگاه اینترنتی ایرانسل یا سوپراپلیکیشن ایرانسل‌من. 📱. اطلاعات بیشتر: 🌐 900.Ir  . #ایرانسل #Irancell #MTNIrancell #اینترنت #سیمکارت #سیمکارت_دائمی #0900
                  </p>
                </div>
              </div>
              <div>
                <figure><img src="https://irancell.ir/wp-content/uploads/2022/08/5.jpg" alt="" /></figure>
                <div>
                  <p className='rtl'>
                    همیشه در دسترس، همیشه کامل . 📱سوپراپلیکیشن ایرانسل من با پوشش خدمات مورد نیاز شما، ابزاری حرفه‌ای برای زندگی در عصر دیجیتال است. . از تجربه کاربری‌تون با #ایرانسل_من برامون بگین. 💛 .اطلاعات بیشتر:⬇️ Irancell.ir . #irancell#MTNIrancell #ایرانسل #سوپراپلیکیشن #ارتباط_دائمی . Alt text: کاراکتر سوپراپلیکیشن در آسمان است و اپ‌های زیادی دور تا دورش را گرفته‌اند.</p>
                </div>
              </div>
              <div>
                <figure><img src="	https://irancell.ir/wp-content/uploads/2022/08/4.jpg" alt="" /></figure>
                <div>
                  <p className='rtl'>
                    .این‌روزها که زندگی‌همه‌مون روی دور تنده، خیلی‌ها برای انجام کارهای روزمره هم وقت کم میارن و دیگه بی‌خیال اهدافشون می‌شن. برای همین این روزها سرعت تکنولوژی حرف اول رو برای پیشرفت می‌زنه. 🕑.با استفاده از جدیدترین نسل اینترنت می‌تونین، ایستادن بر نقطه اوج تکنولوژی رو تجربه کنین و از اون نقطه سریع‌تر به سمت اهدافتون حرکت کنین. 🚀.شما از چه تکنولوژی‌های جدیدی استفاده می‌کنین؟ اون‌ها رو در کامنت معرفی کنین تا افراد بیشتری با اون‌ها آشنا بشن ⁉️ .#Irancell#MTNIrancell##5G#irancell
                  </p>
                </div>
              </div>
            </section>

            <section className='irancell-social-media-bottom-right'>
              <div>
                <figure><img src="https://irancell.ir/wp-content/uploads/2022/08/1.jpg" alt="" /></figure>
                <div>
                  <p className='rtl'>
                  . سیم‌کارت 0900، یه سیم‌کارت دائمیه که شما می‌تونین خودتون شماره‌ی اون رو انتخاب کنین! 🤩😱 . خرید از سوپراپلیکیشن ایرانسل من یا فروشگاه اینترنتی ایرانسل . اطلاعات بیشتر: 900.ir . #ایرانسل #Irancell #MTNIrancell #اینترنت #سیمکارت #سیمکارت_دائمی #0900                                                        
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
      <svg viewBox="0 0 1366 19.18" preserveAspectRatio="none" height="19px" className="wave1"><path fill="#fff" d="M683.1,18.3C386.63,18.3,129.24,10.85,0,0V19.18H1366V0C1236.66,10.84,979.37,18.3,683.1,18.3Z"></path></svg>
    </div>
  )
}

export default socialMedia