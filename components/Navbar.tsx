import { navbarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center m-3 '>
        <div>
            <Link href={'/'}>
            <Image  src='/icons/logo.png' alt='logo' height={80} width={150} className='ml-6'/></Link>
        </div>
        <div className='flex gap-5 m-2'>
            {navbarLinks.map((item => {
                return(
                    <Link href={item.route} key={item.label}>
                        <div>{item.label}</div>
                    </Link>
                )
            }))}
        </div>
    </div>
  )
}

export default Navbar