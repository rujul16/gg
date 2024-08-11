import React from 'react'

const firstEvent = () => {

  const divStyle = {
    width:'45vw',
    height:'75vh'
  }
  return (
    <div className='flex justify-center justify-around mt-4'>
      <div className='bg-slate-950 rounded-md' style={divStyle}></div>
      <div style={divStyle} className='flex items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit natus, deleniti dolorem sequi ut odio, pariatur assumenda deserunt, facilis nesciunt labore. Quisquam, debitis magni, natus quibusdam unde ratione earum et reprehenderit nobis hic eum.</div>
    </div>
  )
}

export default firstEvent