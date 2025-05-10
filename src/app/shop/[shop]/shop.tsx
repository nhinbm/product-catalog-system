"use client";

import { useEffect, useState } from "react";

import { SHOP_NAME, SHOPNAME } from "./constants";
import FiltersComponent from "@/components/filter-categories";
import SortDropdown from "@/components/sort-dropdown";
import OverviewProductCard from "@/components/overview-product-card";
import { getAllProducts } from "@/services/product.services";
import { Product } from "@/types/product.types";

interface ShopProps {
  shopName: SHOPNAME;
}
const Shop: React.FC<ShopProps> = ({ shopName }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortValue, setSortValue] = useState("popular");
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>(
    {}
  );

  const handleFiltersChange = (filters: Record<string, boolean>) => {
    setActiveFilters(filters);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const allProducts = await getAllProducts(shopName);
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [shopName]);

  useEffect(() => {
    const selectedCategories = Object.entries(activeFilters)
      .filter(([, isActive]) => isActive)
      .map(([category]) => category);
    console.log(activeFilters);
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => activeFilters[product.category]
      );
      setFilteredProducts(filtered);
    }
  }, [activeFilters, products]);

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
                    Showing {filteredProducts.length} Products
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length && !isLoading ? (
                  filteredProducts.map((info) => (
                    <OverviewProductCard
                      key={info._id}
                      id={info._id}
                      name={info.name}
                      shop={shopName}
                      price={info.price}
                    />
                  ))
                ) : (
                  <div>No Products Found!</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Shop;
