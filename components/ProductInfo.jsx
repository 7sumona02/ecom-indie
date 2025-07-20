'use client'
import Link from 'next/link'
import SizeSelector from './SizeSelector'
import { useState } from 'react'
import FAQ from './FAQ'

const faqItems = [
  {
    question: 'Information',
    answer: 'We use 100% organic cotton for all our clothing items, with recycled materials for our accessories.'
  },
  {
    question: 'Size Guide',
    answer: 'Domestic orders typically arrive within 3-5 business days. International shipping takes 7-14 business days.'
  }
]

const ProductInfo = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(null)
  return (
    <div className='h-full p-8 flex pl-[2rem] pt-[10rem] relative'>
      <div className='text-black'>
        <div className='w-[20rem] flex justify-between items-end text-base'>
            <h1 className='capitalize'>{product.title}</h1>
            <p>$ {product.price}</p>
        </div>
        <SizeSelector
          sizes={product.availableSizes || ['XS', 'S', 'M', 'L', 'XL']} 
          onSizeChange={setSelectedSize}
        />
        <button className='mt-10 w-[20rem] text-xs uppercase bg-black text-white py-2 hover:bg-gray-800 transition'>
          Add to Cart
        </button>
        <div className='w-[24rem]'>
            <FAQ items={faqItems} />
        </div>
        <div className='flex flex-col gap-10 fixed bottom-16 right-5'>
          {product.images.map((image, index) => (
            <Link key={index} href={`#${index + 1}`}>
              <div className='cursor-pointer w-16 h-16 relative transition-all'>
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className='object-cover'
                  sizes="64px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo