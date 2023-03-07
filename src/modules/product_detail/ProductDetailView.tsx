import { useParams } from "react-router-dom";

export const ProductDetailView = () => {
  let { id } = useParams();

  return <div>product detail view {id}</div>;
};
