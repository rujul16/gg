import Link from 'next/link';
import React from 'react'

const companies = () => {

    const divStyle = {
        width:'23vw',
        height:'80vh',
        boxShadow: '3px 3px 0.8px 1px rgba(0, 0, 0, 0.25)',
        background: '#00000033',
        // fo: 'linear-gradient(90deg, #BD9FDE 0%, #864AC7 100%)'


    };
  return (
    <div className='flex justify-evenly mt-4'>
        <Link href={'/companies/sponsorships'}>
        <div className=' rounded-md flex items-end p-4 justify-center pb-10 ' style={divStyle}>Sponsorship</div></Link>
        <div className=' rounded-md flex items-end p-4 justify-center pb-10' style={divStyle}>Activation</div>
        <div className=' rounded-md flex items-end p-4 justify-center pb-10'style={divStyle}>Brand Exposure</div>
        <div style={divStyle} className='flex items-center p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo laborum itaque officia voluptate veniam a blanditiis, nemo nulla fugiat! Et inventore ab, adipisci illo doloremque quisquam nostrum perferendis dignissimos eveniet officia a asperiores deleniti vel ullam quod deserunt in beatae nam sunt? Impedit, dicta.</div>
    </div>
  )
}

export default companies