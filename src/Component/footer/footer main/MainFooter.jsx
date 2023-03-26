import React from 'react'

function MainFooter() {
    return (
        <section className='main-footer-container px-9 py-4'>
            <div className='w-[90%] mx-auto 2xl:container'>
                <svg viewBox="0 0 1366 19.18" preserveAspectRatio="none" className="wave2"><path fill="#E5E5E5" d="M683.1,18.3C386.63,18.3,129.24,10.85,0,0V19.18H1366V0C1236.66,10.84,979.37,18.3,683.1,18.3Z"></path></svg>

                <div className='text-right flex flex-wrap lg:flex-row-reverse'>

                    <div className='main-footer-tab-one w-full sm:mt-5 sm:w-[50%] lg:w-[33.33%]'>
                        <h2 className='fz-18'>تماس با ما</h2>
                        <p>خدمات تلفن و اینترنت همراه</p>
                        <p>خدمات اینترنت ثابت</p>
                        <div className='flex flex-row-reverse mt-4'>
                            <div><i className="bi bi-telegram"></i></div>
                            <div className='mr-2'><i className="bi bi-instagram"></i></div>
                            <div className='mr-2'><i className="bi bi-whatsapp"></i></div>
                            <div className='mr-2'><i className="bi bi-linkedin"></i></div>
                            <div className='mr-2'><i className="bi bi-facebook"></i></div>
                            <div className='mr-2'><i className="bi bi-twitter"></i></div>
                        </div>
                    </div>

                    <div className='main-footer-tab-two mt-5 w-full sm:w-[50%] lg:w-[33.33%]'>
                        <h2 className='fz-18 mb-4'>خبرنامه</h2>
                        <form className='flex flex-col items-end'>
                            <div className='w-[70%]'><input type="email" placeholder='ایمیل' className='w-full rounded-full text-right px-5 py-3' /></div>
                            <button type='button' className="w-[70%] bg-yellow flex items-center px-5 justify-center py-3 rounded-full mt-5 text-black font-medium">ثبت ایمیل</button>
                        </form>

                    </div>

                    <div className='main-footer-tab-three mt-[20%] w-full lg:w-[33.33%] lg:mt-0'>
                        <div className='flex justify-end'>
                            <figure><img src="https://irancell.ir/wp-content/themes/mtn-theme/images/195.png" alt="" /></figure>
                            <figure><img src="https://irancell.ir/wp-content/themes/mtn-theme/images/namad.png" alt="" /></figure>
                        </div>
                        <h3 className='mt-5'>ایرانسل؛ اولین و بزرگترین اپراتور دیجیتال ایران</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MainFooter