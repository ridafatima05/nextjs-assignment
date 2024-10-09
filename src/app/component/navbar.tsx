import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-orange-300 h-12 '>
      <div className='text-orange-950 flex justify-between items-center'>
        <h1 className='text-xl m-2 ml-4 cursor-pointer font-bold'>Coffee Bar</h1>
      <ul className='flex gap-5'>
        <Link className='hover:text-orange-50' href='/'>Home</Link>
        <Link className='hover:text-orange-50' href='/about'>About</Link>
        <Link className='hover:text-orange-50' href='/contact'>Contact</Link>
        <Link className='hover:text-orange-50' href='/service'>Service</Link>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
