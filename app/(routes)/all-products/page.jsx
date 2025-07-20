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
            <ProductCard
            id='1'
            title = 'sexy tshirt'
            price = '500'
            images = {[
              'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0242_x1000.jpg?v=1741098016',
              'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0244_x1000.jpg?v=1741098016',
              'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0246_x1000.jpg?v=1741098016'
            ]} />
            <ProductCard 
              id='2'
              title="Premium Jacket"
              price="1200"
              images={[
                'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_18_0196_x1000.jpg?v=1738423343',
                'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_18_0198_x1000.jpg?v=1738423342',
                'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_18_0200_x1000.jpg?v=1738423342'
              ]}
            />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default page