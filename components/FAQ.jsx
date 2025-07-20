// components/FAQ.js
'use client'
import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-0.5">
      <button
        className="w-full flex justify-between items-center text-left text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">{question}</span>
      </button>
      {isOpen && (
        <div className="py-5 text-sm">
          {answer}
        </div>
      )}
    </div>
  )
}

const FAQ = ({ items = [] }) => {
  return (
    <div className="max-w-2xl mx-auto mt-16">
      <div className="">
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ