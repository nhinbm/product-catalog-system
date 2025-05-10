import Shop from "./shop";

interface ShopProps {
  params: Promise<{ shop: string }>;
}

const ShopPage: React.FC<ShopProps> = async ({ params }) => {
  const { shop } = await params;

  return <Shop shopName={shop} />;
};
export default ShopPage;
