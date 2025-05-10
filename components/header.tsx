"use client";

import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";
import DropdownShopMenu from "./dropdown-shop-menu";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div>USD</div>
          <div className="hidden md:flex text-center">
            FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25-28.
          </div>
          <div>
            <Link href="/support" className="hover:underline">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? pathname === "/"
              ? "bg-background shadow-sm"
              : "bg-black shadow-sm text-white"
            : pathname === "/"
              ? "bg-background border-b border-white"
              : "bg-black text-white border-b border-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-lg font-medium">
              Ecommerce
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <DropdownShopMenu>
                <button className="text-sm">Shop</button>
              </DropdownShopMenu>
              <Link href="/stories" className="text-sm">
                Stories
              </Link>
              <Link href="/about" className="text-sm">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Search className="h-5 w-5 text-gray-500" />
              <span className="ml-2 text-sm text-gray-500 hidden md:inline">
                Search
              </span>
            </div>
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2">3</span>
            </div>
            <Link href="/login" className="text-sm">
              Login
            </Link>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
