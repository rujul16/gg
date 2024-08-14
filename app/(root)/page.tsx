import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { Margarine } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

const Home = () => {

    const slides = [
        {url: '/icons/slide1.jpg'},
        {url: '/icons/slide2.jpg'},
        {url: '/icons/slide3.jpg'},
        {url: '/icons/slide4.jpg'},
        {url: '/icons/slide5.jpg'},
    ];

    const containerStyle = {
        width:"90vw",
        height:"75vh",
        

    };
  return (
    <div style={containerStyle} className='mt-5 mx-auto'>
        <Carousel 
        slides = {slides}/>
    </div>
  )
}

export default Home