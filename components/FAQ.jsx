// components/FAQ.js
'use client'
import { useState } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  // Size guide table component
  const SizeGuideTable = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-2"
    >
      <table className="w-[20rem] text-sm border border-neutral-200">
        <thead>
          <tr className="border-b border-neutral-200 text-sm">
            <th className="py-2 px-4 text-left font-normal">Size</th>
            <th className="py-2 px-4 text-left font-normal">Chest</th>
            <th className="py-2 px-4 text-left font-normal">Length</th>
          </tr>
        </thead>
        <tbody>
          {[
            { size: 'S', chest: '36"', length: '27"' },
            { size: 'M', chest: '38"', length: '28"' },
            { size: 'L', chest: '40"', length: '29"' }
          ].map((row, index) => (
            <tr key={index} className="border-b border-neutral-200">
              <td className="py-2 px-4">{row.size}</td>
              <td className="py-2 px-4">{row.chest}</td>
              <td className="py-2 px-4">{row.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )

  return (
    <div className="py-0.5">
      <button
        className="w-full flex justify-between items-center text-left text-sm"
        onClick={onClick}
      >
        <span className="text-sm font-normal hover:text-neutral-400 duration-500 transition-colors">{question}</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            className="overflow-hidden"
          >
            <div className="py-5 text-sm">
              {question === 'Size Guide' ? <SizeGuideTable /> : answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <div className="">
        {items.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQ