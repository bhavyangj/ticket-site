import { useNavigate } from "react-router-dom";
import { Card } from "../../../shared/components/Card";

export const AccountCard: React.FC<{
  col1: JSX.Element;
  col2: JSX.Element;
  col3: JSX.Element;
}> = ({ col1, col2, col3 }) => {
  const navigate = useNavigate();
  return (
    <Card
      header={
        <div className="flex justify-between items-center w-full">
          <span
            className="text-blue font-medium cursor-pointer"
            onClick={() => navigate("/user/my-account")}
          >
            My Profile
          </span>
          <span
            className="text-gray underline cursor-pointer"
            onClick={() => navigate("/user/edit-account")}
          >
            Edit Profile
          </span>
        </div>
      }
    >
      <div className="flex w-full">
        <div className="flex flex-col items-center w-2/12">{col1}</div>
        <div className="flex flex-col items-center w-5/12">{col2}</div>
        <div className="flex flex-col items-center w-5/12">{col3}</div>
      </div>
    </Card>
  );
};
