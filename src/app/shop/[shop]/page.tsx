import { notFound } from "next/navigation";
import { SHOPNAME } from "./constants";
import Shop from "./shop";

interface ShopProps {
  params: Promise<{ shop: string }>;
}

const ShopPage: React.FC<ShopProps> = async ({ params }) => {
  const { shop } = await params;

  const isValidCategory = (value: string): value is SHOPNAME => {
    return Object.values(SHOPNAME).includes(value as SHOPNAME);
  };

  if (!isValidCategory(shop)) {
    notFound();
  }

  return <Shop shopName={shop} />;
};
export default ShopPage;
