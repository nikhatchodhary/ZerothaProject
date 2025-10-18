import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Eduction from './Education';
import OpenAcoount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Stats from './Stats';

function HomePage(){
    return (
        <>
        <Hero/>
        <Awards/>
        <Stats/>
         <Pricing/>
        <Eduction/>
        <OpenAcoount/>
       
        </>
      );
}

export default HomePage;