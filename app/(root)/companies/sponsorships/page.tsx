import Form from '@/components/Form'
import React from 'react'

const sponsorships = () => {
    
    const divStyle ={
        width:'45vw',
        height:'75vh'
    }
  return (
    // <div className='flex items-center'>
    <div className='flex justify-evenly mt-4'>
        <div>
        <Form />
        </div>
        <div className='flex items-center justify-center' style={divStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quia. Porro, optio. Quidem adipisci quos eius cum alias reiciendis, officiis nihil rem, eum ratione facere suscipit. Libero, dolor? Ad cupiditate praesentium dolore non aspernatur.</div>
    </div>
    // </div>
  )
}

export default sponsorships