interface OverviewProductCardProps {
  name: string;
  shop: string;
  price: string;
}
const OverviewProductCard: React.FC<OverviewProductCardProps> = ({
  name,
  shop,
  price,
}) => {
  return (
    <div className="bg-transparent overflow-hidden">
      <div className="aspect-square bg-gray-300"></div>
      <div className="pt-2">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{name}</h3>
          <span className="text-sm">{shop}</span>
        </div>
        <p className="font-medium mt-1">{price}</p>
      </div>
    </div>
  );
};
export default OverviewProductCard;
