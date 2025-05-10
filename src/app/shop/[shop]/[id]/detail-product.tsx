import ProductCarousel from "@/components/product-carousel";
import { IMAGES_CAROUSE_CONSTANT } from "./constants";
import { Minus, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DetailProductProps {
  id: string;
  name: string;
  desc: string;
  price: string;
}

const DetailProduct: React.FC<DetailProductProps> = ({
  id,
  name,
  desc,
  price,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Product Section */}
      <main className="flex-grow bg-background">
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image Carousel */}
            <div className="md:w-1/2 relative">
              <ProductCarousel images={IMAGES_CAROUSE_CONSTANT} />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-2">{name}</h1>
              <p className="text-2xl mb-6">$99</p>

              <p className="text-gray-800 mb-8">{desc}</p>

              {/* Quantity Selector */}
              <div className="flex space-x-4 mb-4">
                <div className="border border-gray-300 flex items-center">
                  <button className="px-4 py-2 text-xl">
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="px-6 py-2">2</span>
                  <button className="px-4 py-2 text-xl">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                {/* Size Selector */}
                <Select defaultValue="xl">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">S</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                    <SelectItem value="xxl">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-gray-500 text-sm mb-6">
                Height of model: 189 cm. / 6&apos; 2&quot; Size 41
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="bg-black text-white hover:bg-gray-800 px-6 py-6 rounded-none">
                  Add to Cart - {price}
                </button>
                <button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-6 rounded-none">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default DetailProduct;
