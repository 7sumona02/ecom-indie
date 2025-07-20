// components/ProductInfo.js
import Link from 'next/link'

const ProductInfo = ({ product }) => {
  return (
    <div className='h-full p-8 flex pl-[2rem] pt-[10rem] relative'>
      <div className='text-black'>
        <div className='w-[20rem] flex justify-between items-end text-base'>
            <h1 className='capitalize'>{product.title}</h1>
            <p>${product.price}</p>
        </div>
        <button className='mt-10 w-[20rem] text-xs uppercase bg-black text-white py-2 hover:bg-gray-800 transition'>
          Add to Cart
        </button>
        <div className='flex gap-4 absolute bottom-8'>
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