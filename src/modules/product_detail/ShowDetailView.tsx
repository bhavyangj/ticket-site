import { useParams } from "react-router-dom";

export const ShowDetailView = () => {
  let { id } = useParams();

  return <div>show detail view {id}</div>;
};
