"use client"

import Link from 'next/link';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const events = () => {

    // const navigate = useNavigate();
    const divStyle = {
        width:'400px',
        height:'250px',
        boxShadow: '3px 3px 0.8px 1px rgba(0, 0, 0, 0.25)',
        background: '#00000033',
        // fo: 'linear-gradient(90deg, #BD9FDE 0%, #864AC7 100%)'


    
    };
    const firdivStyle = {
      width: "800px",
      height: "500px",
      boxShadow: "3px 3px 0.8px 1px rgba(0, 0, 0, 0.25)",
      background: "#00000033",
    };

  return (
    <div className='flex justify-evenly mt-3'>
        <Link href={'/events/upcoming-events'}>
        <div className=' rounded-md flex items-end p-4' style={firdivStyle}>Upcoming Events</div></Link>
        <div className='flex flex-col'>
            <Link href={'/events/past-events'}>
            <div className=' rounded-md mb-2 flex items-end p-4' style={divStyle}>Past Events</div></Link>
            <Link href={'/events/annual-calender'}>
            <div className=' rounded-md flex items-end p-4' style={divStyle}>Annual Calender</div></Link>
        </div>
    </div>
  )
}

export default events