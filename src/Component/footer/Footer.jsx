import React from 'react'
import FooterDesktop from './footer desktop/FooterDesktop'
import FooterMobile from './footer mobile/FooterMobile'

function Footer() {
  return (
    <footer className='p-4'>
        <svg viewBox="0 0 1366 19.18" preserveAspectRatio="none" className="wave2"><path d="M683.1,18.3C386.63,18.3,129.24,10.85,0,0V19.18H1366V0C1236.66,10.84,979.37,18.3,683.1,18.3Z" fill="#1d1d1d"></path></svg>
        <FooterMobile/>
        <FooterDesktop/>
    </footer>
  )
}

export default Footer