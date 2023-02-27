import React from 'react'
import Image from "next/legacy/image";
import FastSecure from '../assets/fast&secure.png'
import Natural from '../assets/naturalingr.png'
import Dermatologically from '../assets/dermatologically.png'
import Free from '../assets/free.png'

function WhyChoseUs() {
  return (
    <section className='grid py-48'>
        <div className='sticky items-center justify-center text-center'>

         <span className='text-left text-2xl py-20 md:text-center'>
            Why Chose Us?</span>
        </div>
        <div className='grid grid-rows-4 grid-flow-col gap-4 items-center justify-center space-x-8 p-8 md:grid-rows-2 lg:grid-rows-1'>
            <Image src={FastSecure} alt='fast secure' />
            <Image src={Natural} alt='natural' />
            <Image src={Dermatologically} alt='dermatolodically' />
            <Image src={Free} alt='free' />
        </div>
        

    
        
    
    </section>
  )
}

export default WhyChoseUs
