import React, { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'


const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 2000])
  return (
    <div className="space-y-6 mt-6">

      {/* Price Range Filter */}
      <div className="space-y-3" >
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-900">Intervalo de Preços</h4>
          <span className="text-xs text-gray-500">
            €{priceRange[0]} - €{priceRange[1]}
          </span>
        </div>
        <Slider
          value={[priceRange[1]]}
          onValueChange={([value]) => setPriceRange([0, value])}
          max={2000}
          min={0}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>€0</span>
          <span>€2000</span>
        </div>
      </div>

      <Separator />

      {/* Brand Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-900">Marcas</h4>
      </div>

      <Separator />

      {/* Categories Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-900">Categorias</h4>
        {/* <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <label
                htmlFor={`category-${category}`}
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {category}
              </label>
              <span className="text-xs text-gray-500">
                {products.filter((p) => p.type === category).length}
              </span>
            </div>
          ))}
        </div> */}
      </div>

      <Separator />

      {/* Stock Status Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-900">Estado do Stock</h4>
        {/* <div className="space-y-3">
          {stockStatuses.map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox
                id={`stock-${status}`}
                checked={selectedStockStatuses.includes(status)}
                onCheckedChange={(checked) => handleStockStatusChange(status, checked as boolean)}
              />
              <label htmlFor={`stock-${status}`} className="text-sm text-gray-700 cursor-pointer flex-1">
                {status}
              </label>
              <div className="flex items-center">
                <Badge className={`${getStockStatusColor(status)} border text-xs`}>
                  {products.filter((p) => p.stockStatus === status).length}
                </Badge>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <Separator />
    </div>
  )
}

export default ProductFilters