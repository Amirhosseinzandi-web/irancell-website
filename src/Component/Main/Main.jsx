import React from 'react'
import ApplicatinonTabs from './application tabs/ApplicatinonTabs'
import IrancellNews from './news page/IrancellNews'
import Shopping from './shopping page/Shopping'
import SliderPage from './slider page/SliderPage'
import SocialMedia from './social media/SocialMedia'

function Main() {
  return (
    <main>
        <SliderPage/>
        <IrancellNews/>
        <ApplicatinonTabs/>
        <Shopping/>
        <SocialMedia/>
    </main>
  )
}

export default Main