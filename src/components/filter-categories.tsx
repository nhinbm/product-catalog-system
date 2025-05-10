"use client";

import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface FiltersComponentProps {
  onFiltersChange?: (filters: Record<string, boolean>) => void;
}

export default function FiltersComponent({
  onFiltersChange,
}: FiltersComponentProps) {
  const [categories, setCategories] = useState({
    Jackets: false,
    Fleece: false,
    "Sweatshirts & Hoodies": false,
    Sweaters: false,
    Shirts: false,
    "T-Shirts": false,
    "Pants & Jeans": false,
  });

  const handleCategoryChange = (category: string) => {
    const newCategories = {
      ...categories,
      [category]: !categories[category as keyof typeof categories],
    };
    setCategories(newCategories);
    onFiltersChange?.(newCategories);
  };

  const clearFilters = () => {
    const clearedCategories = Object.fromEntries(
      Object.keys(categories).map((key) => [key, false])
    );
    setCategories(clearedCategories as typeof categories);
    onFiltersChange?.(clearedCategories);
  };

  return (
    <div className="w-full max-w-xs">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button
          variant="ghost"
          className="h-auto p-0 text-gray-500 hover:text-gray-900 hover:bg-transparent"
          onClick={clearFilters}
        >
          Clear filters
        </Button>
      </div>

      <div className="mb-6">
        <h3 className="text-base font-bold mb-2">Categories</h3>
        <div className="space-y-2">
          {Object.entries(categories).map(([category, checked]) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={checked}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label
                htmlFor={category}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
