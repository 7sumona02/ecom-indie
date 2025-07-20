'use client'
import React, { useState } from 'react'
import ButtonHoverUnderLine from './ButtonHover'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

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
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <button 
              onClick={toggleCart}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Cart content goes here */}
          <div className="flex-grow overflow-y-auto py-4">
            {/* Your cart items would be rendered here */}
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
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