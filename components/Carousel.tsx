"use client"
import React,{useEffect, useState} from 'react'
import { Button } from './ui/button';


const Carousel = ({slides}:carouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyle = {
        width:'100%',
        height:'100%',
        backgroundImage:`url(${slides[currentIndex].url})`,
        borderRadius:'10px',
        backgroundSize:'cover'

    };
    const sliderStyle = {
        
        height:'100%',
        position:'relative'

    };
    const ArrowStyles = {
        
        top:'50%',
        position:'absolute',
        transform:'translate(0,-50%)',
        height:'10%'
        

    };
    const goToPrevious = ()=>{
        const isFirst = currentIndex===0;
        const newIndex = isFirst? slides.length-1:currentIndex-1;
        setCurrentIndex(newIndex);
    };
    const goToNext = ()=>{
        const isLast = currentIndex===slides.length-1;
        const newIndex = isLast? 0:currentIndex+1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex);
    };

    useEffect(()=>{
        const timeInterval = setInterval(()=>{goToNext();console.log('next');},2000);
        return()=>{
            clearInterval(timeInterval);
        }
    })
    


  return (
    <div style={sliderStyle}>
        <Button style={ArrowStyles} className='left-4 bg-transparent font-bold' onClick={goToPrevious}>{'<'}</Button>
        <Button style={ArrowStyles} className='right-4 bg-transparent' onClick={goToNext}>{'>'}</Button>
        <div style={slideStyle}></div>
        <div className='flex justify-center gap-2'>{slides.map((slide,slideIndex)=>(
            <div key={slideIndex} className='hover:cursor-pointer' onClick={() => goToSlide(slideIndex)}>⬤</div>
        )
        )}</div>
    </div>
  )
}

export default Carousel