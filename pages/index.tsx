import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'
import WhyChoseUs from '../components/WhyChooseUs'
import PopularProducts from '../components/PopularProducts'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Sonia Stilo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />  
    <Landing />
    <WhyChoseUs />
    <PopularProducts />

      
    </div>
  )
}

export default Home
