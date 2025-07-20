'use client'
import React, { useState } from 'react'
import ButtonHoverUnderLine from './ButtonHover'
import CartItem from './CartItem'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const cartItems = true;

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', {
    weekday: 'long', // "Sunday"
    year: 'numeric', // "2025"
    month: 'long',   // "July"
    day: 'numeric'   // "20"
  });

  return (
    <>
      <div className='font-mono w-screen h-16 flex justify-between items-center px-10 text-sm text-black font-medium'>
        <div className='cursor-pointer'><ButtonHoverUnderLine title={'YEEZY'} /></div>
        <div className='cursor-pointer'><ButtonHoverUnderLine title={'All products'} /></div>
        <div className='cursor-pointer' onClick={toggleCart}>
          <ButtonHoverUnderLine title={'Cart'} />
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center pb-6">
            <h2 className="text-sm font-mono text-black uppercase tracking-tight">{formattedDate}</h2>
            <button 
              onClick={toggleCart}
            >
              <img src='/close.svg' alt='close' className='size-4.5' />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-4">
            {/* <p className="text-gray-500 text-center py-8">Your cart is empty</p> */}
            {!cartItems ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ):(
              <div className='flex flex-col gap-6'>
                <CartItem title='sexy tshirt' size={'M'} price={'500'} />
                <CartItem title='sexy pants' size={'S'} price={'1000'} />
              </div>
            )}
          </div>
          
          <div className="border-t pt-4">
            <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
              Checkout
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