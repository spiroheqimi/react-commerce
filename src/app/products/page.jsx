"use client"

import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar'
import ProductCard from '../components/ProductCard'
import products from '../products.json'


export default function page() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);

    const price = product.price;
    const isPriceRangeMatch = selectedPriceRanges.length === 0 || selectedPriceRanges.some((range) => {
        const [min, max] = range.split('-').map(parseFloat);
        return price >= min && price <= max;
      });

    return isCategoryMatch && isPriceRangeMatch;
  });


  const handleFilter = (selectedCategories, selectedPriceRanges) => {
    setSelectedCategories(selectedCategories);
    setSelectedPriceRanges(selectedPriceRanges);
  };

  return (
    <main className="w-screen min-h-screen flex px-10">
      <FilterSidebar onFilter={handleFilter} />
      <div className="w-full h-full py-10 grid grid-cols-4 gap-5 justify-start items-start overflow-hidden">
        {filteredProducts.map((product) => (
          <div key={product.id} className="w-90">
            <ProductCard key={product.id} product={product}/>
          </div>
        ))}
      </div>
    </main>
  );
};

