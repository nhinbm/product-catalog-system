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
  const [categories, setCategories] = useState<
    Record<string, { name: string; checked: boolean }>
  >({
    jackets: { name: "Jackets", checked: false },
    fleece: { name: "Fleece", checked: false },
    "sweatshirts-hoodies": { name: "Sweatshirts & Hoodies", checked: false },
    sweaters: { name: "Sweaters", checked: false },
    shirts: { name: "Shirts", checked: false },
    "t-shirts": { name: "T-Shirts", checked: false },
    "pants-jeans": { name: "Pants & Jeans", checked: false },
  });

  const handleCategoryChange = (categoryKey: string) => {
    const newCategories = {
      ...categories,
      [categoryKey]: {
        ...categories[categoryKey],
        checked: !categories[categoryKey].checked,
      },
    };
    setCategories(newCategories);

    const activeFilters = Object.fromEntries(
      Object.entries(newCategories)
        .filter(([, value]) => value.checked)
        .map(([key]) => [key, true])
    );

    onFiltersChange?.(activeFilters);
  };

  const clearFilters = () => {
    const clearedCategories = Object.fromEntries(
      Object.entries(categories).map(([key, value]) => [
        key,
        { ...value, checked: false },
      ])
    );
    setCategories(clearedCategories);

    onFiltersChange?.({});
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
          {Object.entries(categories).map(([category, info]) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={info.checked}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label
                htmlFor={info.name}
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
