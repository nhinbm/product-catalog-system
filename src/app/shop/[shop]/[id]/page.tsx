import DetailProduct from "./detail-product";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage: React.FC<DetailPageProps> = async ({ params }) => {
  const { id } = await params;
  return <DetailProduct id={id} />;
};
export default DetailPage;
