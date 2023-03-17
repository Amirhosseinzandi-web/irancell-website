import React, {useState } from 'react'

function ApplicatinonTabs() {
    const [prevValue, setPrevValue] = useState(0)




    const AppTabs = (e) => {
        e.stopPropagation()
        const _div = e.currentTarget
        document.querySelectorAll(".application-tabs-items>section>div").forEach((item) => {
            item.removeAttribute("class");
            item.children[1].removeAttribute("class")
            item.removeAttribute("isComeFromLeftToRight");
            const _src = item.children[2].src
            item.children[0].children[0].src = _src;
            item.parentElement.classList.remove("active-app-items")
        })
        const _src = _div.children[3].src
        _div.children[0].children[0].src = _src
        _div.classList.add("pointer-none")
        _div.classList.add("ssd")
        _div.parentElement.classList.add("active-app-items")
        _div.children[1].classList.add("ssp")
        const divAttrNum = _div.getAttribute("data-num");
        const divAttrInfo = _div.getAttribute("data-info");
        const currentValue = divAttrNum;
        if (currentValue > prevValue) {
        } else {
            _div.setAttribute("isComeFromLeftToRight", "true")
        }
        setPrevValue(currentValue)
        // ************************************************************
        document.querySelectorAll(".application-tabs-slider>div").forEach((slider) => {
            const sliderAttrInfo = slider.getAttribute("data-info");
            slider.removeAttribute("class")
            if (_div.getAttribute("isComeFromLeftToRight")) {
                if (sliderAttrInfo === divAttrInfo) {
                    slider.classList.add("left-to-right")
                }
            }
            else {
                slider.classList.remove("right-to-left")
                if (sliderAttrInfo === divAttrInfo) {
                    slider.classList.add("right-to-left")
                }
            }
        });
    }




    return (
        <section className='application-tabs-wrapper mt-10'>
            <div>

                <div className='application-tabs-items-wrapper flex justify-center'>
                    <div className='application-tabs-items 2xl:container 2xl:mx-auto w-[90%] flex flex-row-reverse justify-evenly items-center'>

                        <section className='nav-items-1 active-app-items'>
                            <div className='pointer-none' data-num="1" data-info="my-irancell" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2023/01/My-Irancell-FA-1.svg" alt="" /></figure>
                                <p className='ssp'>ایرانسل من</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/06/MyIrancell-1.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2023/01/My-Irancell-FA-1.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-2'>
                            <div data-num="2" data-info="lenz" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Lenz.svg" alt="" /></figure>
                                <p>لنز ایرانسل</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Lenz.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Lenz-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-3 hidden sm:block'>
                            <div data-num="3" data-info="dana-plus" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/DanaPlus.svg" alt="" /></figure>
                                <p>دانا پلاس</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/DanaPlus.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/DanaPlus-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-4 hidden md:block'>
                            <div data-num="4" data-info="jib-jet" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/08/JIBJET-FA.svg" alt="" /></figure>
                                <p>جیب جت</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/08/JIBJET-FA.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/08/JibJet-FA-color.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-5 hidden lg:block'>
                            <div data-num="5" data-info="pishvaz-music" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Pishvaz.svg" alt="" /></figure>
                                <p>آهنگ پیشواز</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Pishvaz.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Pishvaz-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-6 hidden lg:block'>
                            <div data-num="6" data-info="charkhooneh" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Charkhoneh.svg" alt="" /></figure>
                                <p>چارخونه</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Charkhoneh.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Charkhoneh-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-7 hidden lg:block'>
                            <div data-num="7" data-info="kids-teenager" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/11/Colorful-1-1.svg" alt="" /></figure>
                                <p>کودک و نوجوان</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/11/Colorful-1-1.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/11/Colorful-2.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-8'>
                            <div data-num="8" data-info="learning" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/12/Academy-logo-02.svg" alt="" /></figure>
                                <p>!جریان پویای یادگیری</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/12/Academy-logo-02.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/12/Academy-logo-011.svg" alt="" />
                            </div>
                        </section>

                    </div>
                </div>

                <div className='application-tabs-slider'>
                    <div className='first-comein-slider' data-info="my-irancell">my irancell</div>
                    <div data-info="lenz">lenz</div>
                    <div data-info="jib-jet">jib jet</div>
                    <div data-info="dana-plus">dana plus</div>
                    <div data-info="pishvaz-music">pishvaz</div>
                    <div data-info="charkhooneh">charkhooneh</div>
                    <div data-info="kids-teenager">kids</div>
                    <div data-info="learning">leran</div>
                </div>
            </div>
        </section>
    )
}

export default ApplicatinonTabs