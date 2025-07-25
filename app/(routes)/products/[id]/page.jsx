// app/products/[id]/page.js
import Footer from '../_components/Footer'
import Navbar from '../_components/Navbar'
import ProductInfo from '../_components/ProductInfo'

// This would come from your database/API
const getProductData = (id) => {
  const products = {
    '1': {
      id: '1',
      title: 'good tshirt',
      price: '500',
      images: [
        'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0242_x1000.jpg?v=1741098016',
        'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0244_x1000.jpg?v=1741098016',
        'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_22_0246_x1000.jpg?v=1741098016'
      ]
    },
    '2': {
      id: '2',
      title: 'good pants',
      price: '1200',
      images: [
        'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_18_0196_x1000.jpg?v=1738423343',
        'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_18_0198_x1000.jpg?v=1738423342',
        'https://bernerkuhl.com/cdn/shop/files/240529_BERNER_KUHL_ECOM_18_0200_x1000.jpg?v=1738423342'
      ]
    }
  }
  return products[id] || null
}

export default function ProductPage({ params }) {
  const product = getProductData(params.id)

  if (!product) return <div>Product not found</div>

  return (
    <div className='h-screen bg-neutral-100 relative'>
      <Navbar />
      <div className='h-screen bg-neutral-100'>
        <div className='grid md:grid-cols-2 grid-cols-1 h-full'>
          {/* Scrollable images */}
          <div className='overflow-y-scroll h-full snap-y snap-mandatory scrollbar-hide'>
            {product.images.map((image, index) => (
              <div 
                key={index} 
                id={`${index + 1}`}
                className='w-full h-screen snap-start'
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
              />
            ))}
          </div>
          
          {/* Product info */}
          <ProductInfo product={product} imageCount={product.images.length} />
        </div>
      </div>
    </div>
  )
}