import React from 'react'
import Image from "next/legacy/image";
import Button from './Button'
import Link from 'next/link'
import background from '../assets/Background.png'
import ProductComposition from '../assets/Productcomposition.png'

function Landing() {
    
    return (
    <section className='grid grid-colums-2 top-5 mx-auto justify-between px-8'>
        <div className='px-10 py-20'>
            <div className='grid'>
            <Image src={background} alt='background' layout='fill' objectFit='cover' quality={100} />
            </div>
        
            <h1 className='relative columns-1 py-5 px-8  text-2xl font-Gyrloibold tracking-wide w-1/2 md:text-3xl lg:text-5xl'>
            Give your <span className=' text-green-800'>skin</span> and <span className=' text-green-800'>body</span> the best treat inspired by the <span className='text-green-800'>nature</span>.
            </h1>
            <h6 className='relative columns-1 py-3 px-8 text-sm font-Gyrloi tracking-wide w-1/2'>
            Get the best care with the products that Sonia Stilo created with dedication for you. The products are part of her soul, this is why they are reliable, not better or worse than every others on the market, just different-it’s her.
            </h6>
            <Link href='/shop'>
            <div className='px-8'>
                <Button title='View our colection' />
        
            </div>
            </Link>
           
            <div className='relative inline-block h-[400px] w-[339px] transition-all duration-500 md:inline lg:h-[781px] lg:w-[778px]'>
                <Image src={ProductComposition} alt='productcomp' layout='fill' objectFit='contain' />
            </div>
        </div>
            
    </section>

  )
}

export default Landing
