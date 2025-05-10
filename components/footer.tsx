import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Sign up for our newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to know about our special offers, new product
              launches, and events
            </p>
            <form>
              <div className="flex border border-gray-300">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap px-4 py-3 bg-white hover:bg-gray-100 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          {/* Shop Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop/womens"
                  className="text-gray-600 hover:text-black"
                >
                  Women&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/mens"
                  className="text-gray-600 hover:text-black"
                >
                  Men&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/kids"
                  className="text-gray-600 hover:text-black"
                >
                  Kids&apos;
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/shoes"
                  className="text-gray-600 hover:text-black"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/equipment"
                  className="text-gray-600 hover:text-black"
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/activity"
                  className="text-gray-600 hover:text-black"
                >
                  By Activity
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/gift-cards"
                  className="text-gray-600 hover:text-black"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/sale"
                  className="text-gray-600 hover:text-black"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-black">
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/order-status"
                  className="text-gray-600 hover:text-black"
                >
                  Order Status
                </Link>
              </li>
              <li>
                <Link
                  href="/size-chart"
                  className="text-gray-600 hover:text-black"
                >
                  Size Chart
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 hover:text-black"
                >
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-black"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/responsibility"
                  className="text-gray-600 hover:text-black"
                >
                  Responsibility
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-gray-600 hover:text-black"
                >
                  Technology & Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-gray-600 hover:text-black"
                >
                  Explore our stories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
