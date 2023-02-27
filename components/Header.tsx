import React from 'react'
import Image from "next/legacy/image";
import Logo from '../assets/SSlogo.png'
import Link from 'next/link'
import Tel from '../assets/tel.png'
import Bag from '../assets/bag.png'
import Vector1 from '../assets/Vector 1.png'

export default function Header() {
  return (
    <header className='sticky z-30 flex w-full items-center justify-between'>
    <div className='flex items-center justify-center md:w-1/5'>
    <Link href='/'>
      <div className='relative h-[111px] w-[98px] top-[20px] cursor-pointer opacity-75 transition hover:opacity-100'>
        <Image src={Logo} alt='Logo' layout='fill' />
      </div>
    </Link> 
    </div>
    <div className='hidden flex-1 items-center justify-center space-x-8 top-[65px] md:flex'>
        <a className='headerLink'>Home</a>
        <a className='headerLink'>Shop</a>
        <a className='headerLink'>Customer Reviews</a>
        <a className='headerLink'>Blog</a>
        <a className='headerLink'>Contact</a>
    </div>
    <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
    <div className='flex items-center justify-center cursor-pointer' >
      <Image src={Tel} alt='contact' />
    </div>
    <Link href='/checkout'>
    <div className=''>
        <Image src={Bag} alt='baglist' />
    <div className=''>
      <span className=''>120</span>
      <Image src={Vector1} alt='vector' className='relative right-0'/>
    </div>
    </div>
    </Link>
    </div>

    </header>
  )
}
