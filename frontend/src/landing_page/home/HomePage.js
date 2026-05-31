import React from 'react'
import Hero from './Hero';
import Awards from './Award';
import Education from './Education';
import Pricing from './Pricing';
import Stat from './Stat';
import OpenAccount from "../OpenAccount"

function HomePage() {
    return ( 
        <>
       
        <Hero />
        <Awards />
        <Stat />
        <Pricing />
        <Education />
        <OpenAccount />
       


        </>
     );
}

export default HomePage;