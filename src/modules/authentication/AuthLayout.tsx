import { Outlet } from "react-router-dom";
import { CoverTypes, PageLayoutView } from "../page_layout/PageLayoutView";

export const AuthLayout = () => {
  return (
    <PageLayoutView cover={CoverTypes.NORMAL}>
      <Outlet />
    </PageLayoutView>
  );
};
