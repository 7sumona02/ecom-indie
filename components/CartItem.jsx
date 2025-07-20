import React from 'react'

const CartItem = ({title,size,price}) => {
  return (
    <div className='flex justify-between text-black font-mono text-sm'>
        <div className='flex flex-col -space-y-1 text-left'>
            <div>{title}</div>
            <div>{size}</div>
        </div>
        <div className='flex flex-col -space-y-1 text-right'>
            <div>$ {price}</div>
            <div><button className='text-neutral-400 cursor-pointer'>Remove</button></div>
        </div>
    </div>
  )
}

export default CartItem