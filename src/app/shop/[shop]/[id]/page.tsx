import DetailProduct from "./detail-product";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage: React.FC<DetailPageProps> = async ({ params }) => {
  const { id } = await params;
  return (
    <DetailProduct
      id={id}
      name="Men’s winter jacket"
      desc="Revamp your style with the latest designer trends in men's
                clothing or achieve a perfectly curated wardrobe thanks to our
                line-up of timeless pieces."
      price="$99"
    />
  );
};
export default DetailPage;
