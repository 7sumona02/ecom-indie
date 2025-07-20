import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-neutral-100'>
        <Navbar />
        <div className='max-w-6xl mx-auto pt-10 pb-40'>
          <div className='grid grid-cols-4 gap-20'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default page