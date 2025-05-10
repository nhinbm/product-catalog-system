"use client";

import { useState } from "react";
import FiltersComponent from "../../../../components/filter-categories";
import SortDropdown from "../../../../components/sort-dropdown";
import OverviewProductCard from "../../../../components/overview-product-card";
import { SHOP_NAME, SHOPNAME } from "./constants";

interface ShopProps {
  shopName: SHOPNAME;
}
const Shop: React.FC<ShopProps> = ({ shopName }) => {
  const [sortValue, setSortValue] = useState("popular");
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>(
    {}
  );

  const handleFiltersChange = (filters: Record<string, boolean>) => {
    setActiveFilters(filters);

    const selectedFilters = Object.entries(filters)
      .filter(([_, isActive]) => isActive)
      .map(([category]) => category);
  };

  return (
    <section>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-black text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Shop {SHOP_NAME[shopName]}
            </h1>
            <p className="max-w-xl text-lg">
              Revamp your style with the latest designer trends in{" "}
              <span className="lowercase">{SHOP_NAME[shopName]}</span> clothing
              or achieve a perfectly curated wardrobe thanks to our line-up of
              timeless pieces.
            </p>
          </div>
        </div>

        {/* Shop Content */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <FiltersComponent onFiltersChange={handleFiltersChange} />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <div className="flex flex-col ml-auto items-end">
                  <SortDropdown value={sortValue} onChange={setSortValue} />
                  <div className="text-sm text-gray-600">
                    Showing 1003 Products
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <OverviewProductCard
                      key={index}
                      id={index}
                      name="Men’s Winter Jacket"
                      shop={shopName}
                      price="$99"
                    />
                  ))}
              </div>

              <div className="flex justify-center mt-10">
                <button className="px-10 py-6 h-auto bg-transparent text-black border border-black hover:bg-black hover:text-white transition text-sm font-medium">
                  Load more products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Shop;
