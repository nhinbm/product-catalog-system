"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleShopDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShopOpen(!isShopOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-full -mt-16">
            <nav className="flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center">
                <button
                  onClick={toggleShopDropdown}
                  className="text-xl font-medium flex items-center"
                >
                  Shop
                </button>

                {isShopOpen && (
                  <div className="mt-4 flex flex-col items-center space-y-4">
                    <Link
                      href="/shop/womens"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      Women&apos;s
                    </Link>
                    <Link
                      href="/shop/mens"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      Men&apos;s
                    </Link>
                    <Link
                      href="/shop/kids"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      Kids&apos;
                    </Link>
                    <Link
                      href="/shop/shoes"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      Shoes
                    </Link>
                    <Link
                      href="/shop/equipment"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      Equipment
                    </Link>
                    <Link
                      href="/shop/by-activity"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      By Activity
                    </Link>
                    <Link
                      href="/shop/gift-cards"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      Gift Cards
                    </Link>
                    <Link
                      href="/shop/sale"
                      className="text-lg"
                      onClick={toggleMenu}
                    >
                      Sale
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/stories"
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Stories
              </Link>
              <Link
                href="/about"
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <div className="flex items-center mt-4">
                <Search className="h-5 w-5 text-gray-500" />
                <span className="ml-2 text-lg text-gray-500">Search</span>
              </div>
              <Link
                href="/login"
                className="text-xl font-medium mt-4"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <div className="border-t border-gray-200 w-48 pt-6 mt-6 flex flex-col items-center">
                <Link
                  href="/support"
                  className="text-lg font-medium mb-4"
                  onClick={toggleMenu}
                >
                  Support
                </Link>
                <div className="text-lg">USD</div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
