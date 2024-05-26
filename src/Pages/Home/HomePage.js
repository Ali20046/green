import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import FeaturedServices from '../../components/Home/FeaturedServices'
import WhyUs from '../../components/Home/WhyUs'
import Cta from '../../components/Home/Cta'
import OurClients from '../../components/Home/OurClients'

const MainContainer = () => {
    return (
        <>
            <HeroSection />
            <FeaturedServices />
            <WhyUs />
            <OurClients />
            <Cta />
        </>
    )
}

export default MainContainer