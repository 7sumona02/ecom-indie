'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

// Simple UUID generator function
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

const ProductCard = ({ 
  id, 
  title = 'good tshirt',
  price = '500',
  images = [
    'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0242_x1000.jpg?v=1741098016',
    'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0244_x1000.jpg?v=1741098016',
    'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0246_x1000.jpg?v=1741098016'
  ]
}) => {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleCardClick = () => {
    router.push(`/products/${id}`)
  }

  return (
    <div className='group' onClick={handleCardClick}>
      <div className='w-[16rem] h-[20rem] bg-black overflow-hidden relative cursor-pointer'>
        <img 
          src={images[currentImageIndex]}
          alt={title} 
          className='w-full h-full object-cover absolute inset-0'
        />
        <div>
          <button 
            onClick={handleNextImage}
            className='absolute z-10 top-1/2 -translate-y-1/2 right-2'
          >
            <ChevronRight className='text-black opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer' size={'24'} strokeWidth={'1'} />
          </button>
          <button 
            onClick={handlePrevImage}
            className='absolute z-10 top-1/2 -translate-y-1/2 left-2'
          >
            <ChevronLeft className='text-black opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer' size={'24'} strokeWidth={'1'} />
          </button>
        </div>
      </div>  
      <div className='text-black text-sm w-[16rem] font-mono flex justify-between items-end py-1'>
        <div>{title}</div>
        <div className='group-hover:text-blue-800 transition-colors'>$ {price}</div>
      </div>
    </div>
  )
}

export default ProductCard