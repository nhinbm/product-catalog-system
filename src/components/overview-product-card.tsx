"use client";

import { useRouter } from "next/navigation";

interface OverviewProductCardProps {
  id: string;
  name: string;
  shop: string;
  price: number;
}
const OverviewProductCard: React.FC<OverviewProductCardProps> = ({
  id,
  name,
  shop,
  price,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop/${shop}/${id}`);
  };

  return (
    <div className="bg-transparent overflow-hidden" onClick={handleClick}>
      <div className="aspect-square bg-gray-300"></div>
      <div className="pt-2">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{name}</h3>
          <span className="text-sm">{shop}</span>
        </div>
        <p className="font-medium mt-1">${price}</p>
      </div>
    </div>
  );
};
export default OverviewProductCard;
