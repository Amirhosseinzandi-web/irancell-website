import React from 'react'
import MainFooter from './footer main/MainFooter'
import FooterDesktop from './footer nav/footer desktop/FooterDesktop'
import FooterMobile from './footer nav/footer mobile/FooterMobile'

function Footer() {
    return (
        <footer>

            <div className='footer-nav-container'>
                <svg viewBox="0 0 1366 19.18" preserveAspectRatio="none" className="wave2"><path d="M683.1,18.3C386.63,18.3,129.24,10.85,0,0V19.18H1366V0C1236.66,10.84,979.37,18.3,683.1,18.3Z" fill="#1d1d1d"></path></svg>
                <FooterMobile />
                <FooterDesktop/>
            </div>

            <MainFooter />
        </footer>
    )
}

export default Footer