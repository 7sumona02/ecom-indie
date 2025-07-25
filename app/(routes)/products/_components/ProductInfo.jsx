'use client'
import Link from 'next/link'
import SizeSelector from '../../../../components/SizeSelector'
import { useState } from 'react'
import FAQ from '../../../../components/FAQ'
import { ArrowLeft } from 'lucide-react'

const faqItems = [
  {
    question: 'Information',
    answer: 'We use 100% organic cotton for all our clothing items.'
  },
  {
    question: 'Size Guide',
    answer: 'Please refer to the size chart below.'
  }
]

const ProductInfo = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(null)
  return (
    <div className='h-full p-8 flex justify-center pt-[10rem] relative'>
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
        <Link href='/all-products'><div className='mt-10 text-neutral-400 hover:text-black duration-500 transition-colors text-sm cursor-pointer flex items-center gap-1'><ArrowLeft className='size-3' /> Back</div></Link>
        <div className='flex flex-col gap-6 fixed bottom-10 right-5'>
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