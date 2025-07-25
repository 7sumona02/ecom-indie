'use client'
import React, { useEffect, useState } from 'react'
import ButtonHoverUnderLine from './ButtonHover'
import CartItem from './CartItem'
import Link from 'next/link'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  // Initialize cart and set up event listener
  useEffect(() => {
    // Load initial cart items
    const loadCartItems = () => {
      if (typeof window !== 'undefined') {
        const items = JSON.parse(localStorage.getItem('cartItems')) || []
        setCartItems(items)
      }
    }

    // Handle cart update events
    const handleCartUpdate = () => {
      loadCartItems()
    }

    loadCartItems()
    window.addEventListener('cartUpdated', handleCartUpdate)

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
    }
  }, [])

  // Persist cart changes to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && cartItems.length >= 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartItems])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    )
    setCartItems(updatedItems)
  }

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id)
    setCartItems(updatedItems)
  }

  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      <div className='font-mono bg-neutral-100 z-50 w-screen h-16 flex justify-between items-center px-10 text-sm text-black font-medium'>
        <Link className='cursor-pointer' href='/'><div><ButtonHoverUnderLine title={'YEEZY'} /></div></Link>
        <Link className='cursor-pointer' href='/all-products'><div><ButtonHoverUnderLine title={'All products'} /></div></Link>
        <div className='cursor-pointer' onClick={toggleCart}>
          <ButtonHoverUnderLine title={'Cart'} />
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[24rem] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center pb-6">
            <h2 className="text-sm font-mono text-black uppercase tracking-tight">{formattedDate}</h2>
            <button onClick={toggleCart}>
              <img src='/close.svg' alt='close' className='size-4.5' />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <div className='flex flex-col gap-4'>
                {cartItems.map(item => (
                  <CartItem 
                    key={`${item.id}-${item.size}`}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    size={item.size}
                    price={item.price}
                    quantity={item.quantity}
                    onRemove={() => handleRemoveItem(item.id)}
                    onQuantityChange={(newQty) => handleQuantityChange(item.id, newQty)}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex justify-between font-mono text-sm mb-4 text-black">
              <span>Total</span>
              <span>$ {totalAmount.toFixed(2)}</span>
            </div>
            <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors font-mono text-sm">
              Buy now $ {totalAmount.toFixed(2)}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40"
          onClick={toggleCart}
        />
      )}
    </>
  )
}

export default Navbar