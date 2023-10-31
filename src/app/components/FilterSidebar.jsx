import { useState } from 'react';

export default function FilterSidebar({ onFilter }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilter(updatedCategories, selectedPriceRanges);
  };

  const handlePriceRangeChange = (priceRange) => {
    const updatedPriceRanges = selectedPriceRanges.includes(priceRange)
      ? selectedPriceRanges.filter((range) => range !== priceRange)
      : [...selectedPriceRanges, priceRange];
    setSelectedPriceRanges(updatedPriceRanges);
    onFilter(selectedCategories, updatedPriceRanges);
  };

  return (
    <div className="w-64 h-full p-10 flex flex-col gap-8">
      <div className="w-60 flex flex-col">
        <h1 className="py-2">Category</h1>
        <label className="pl-6 flex gap-2">
          <input
            type="checkbox"
            value="Electronics"
            onChange={() => handleCategoryChange("Electronics")}
            checked={selectedCategories.includes("Electronics")}
          />
          Electronics
        </label>
        <label className="pl-6 flex gap-2">
          <input
            type="checkbox"
            value="Clothing"
            onChange={() => handleCategoryChange("Clothing")}
            checked={selectedCategories.includes("Clothing")}
          />
          Clothing
        </label>
        <label className="pl-6 flex gap-2">
          <input
            type="checkbox"
            value="Sneakers"
            onChange={() => handleCategoryChange("Sneakers")}
            checked={selectedCategories.includes("Sneakers")}
          />
          Sneakers
        </label>
        {/* Add more category options */}
      </div>
      <div className="w-60 flex flex-col">
        <h1 className="py-2">Price</h1>
        <label className="pl-6 flex gap-2">
          <input
            type="checkbox"
            value="0-50"
            onChange={() => handlePriceRangeChange("0-50")}
            checked={selectedPriceRanges.includes("0-50")}
          />
          $0 - $50
        </label>
        <label className="pl-6 flex gap-2">
          <input
            type="checkbox"
            value="50-100"
            onChange={() => handlePriceRangeChange("50-100")}
            checked={selectedPriceRanges.includes("50-100")}
          />
          $50 - $100
        </label>
        <label className="pl-6 flex gap-2">
          <input
            type="checkbox"
            value="100-200"
            onChange={() => handlePriceRangeChange("100-200")}
            checked={selectedPriceRanges.includes("100-200")}
          />
          $100 - $200
        </label>
        {/* Add more price range options */}
      </div>
    </div>
  );
};
