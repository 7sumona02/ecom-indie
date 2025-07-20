// components/ProductSpecsTable.js
const ProductSpecsTable = () => {
  const specs = [
    { attribute: 'Material', value: '100% Organic Cotton' },
    { attribute: 'Weight', value: '180 GSM' },
    { attribute: 'Fit', value: 'Regular Fit' },
    { attribute: 'Length', value: 'Regular' },
    { attribute: 'Neckline', value: 'Round Neck' },
    { attribute: 'Sleeve', value: 'Short Sleeve' },
    { attribute: 'Wash Care', value: 'Machine Wash Cold' },
    { attribute: 'Origin', value: 'Made in India' }
  ]

  return (
    <div className="mt-8 font-mono">
      <h3 className="text-sm uppercase font-medium mb-4">Product Specifications</h3>
      <div className="border border-neutral-200 rounded-sm overflow-hidden">
        <table className="w-full">
          <tbody>
            {specs.map((item, index) => (
              <tr 
                key={index}
                className={`${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}
              >
                <td className="py-3 px-4 text-sm font-medium border-b border-neutral-200 w-1/3">
                  {item.attribute}
                </td>
                <td className="py-3 px-4 text-sm border-b border-neutral-200">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductSpecsTable