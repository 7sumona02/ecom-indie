// components/SizeSelector.js
'use client'
import { useState } from 'react'

const SizeSelector = ({ sizes = ['XS','S', 'M', 'L', 'XL'], onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    onSizeChange?.(size)
  }

  return (
    <div className="mt-7">
      <div className="flex justify-between gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeSelect(size)}
            className={`size-5 flex items-center justify-center font-mono text-sm transition-all
              ${
                selectedSize === size
                  ? 'bg-black text-white'
                  : 'text-black'
              }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizeSelector