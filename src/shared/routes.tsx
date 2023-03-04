import { createBrowserRouter, Outlet } from "react-router-dom";
import { LogInView } from "../modules/authentication/LogInView";
import {
  PageLayoutView,
  CoverTypes,
} from "../modules/page_layout/PageLayoutView";
import { SignUpView } from "../modules/authentication/SignUpView";
import { LandingView } from "../modules/landing/LandingView";
import { MainView } from "../modules/main/MainView";
import { NotFound } from "./components/NotFound";
import { ForgotPasswordView } from "../modules/authentication/ForgotPasswordView";
import { CreatePasswordView } from "../modules/authentication/CreatePasswordView";
import { RegisterView } from "../modules/authentication/RegisterView";
import { MyAccountView } from "../modules/authentication/MyAccountView";
import { EditAccountView } from "../modules/authentication/EditAccountView";
import { SuccessActionView } from "../modules/authentication/SuccessActionView";
import { DeleteAccountView } from "../modules/authentication/DeleteAccountView";
import { ContactView } from "../modules/contact/ContactView";
import { AboutView } from "../modules/about/AboutView";
import { PackageTourLayout } from "../modules/package_tour/PackageTourLayout";
import { BigApplePassView } from "../modules/package_tour/BigApplePassView";
import { NYExploreView } from "../modules/package_tour/NYExploreView";
import { NYCityPassView } from "../modules/package_tour/NYCityPassView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayoutView cover={CoverTypes.INFO}>
        <LandingView />
      </PageLayoutView>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/main",
    element: (
      <PageLayoutView cover={CoverTypes.INFO}>
        <MainView />
      </PageLayoutView>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayoutView>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "sign-up",
        element: <SignUpView />,
      },
      {
        path: "log-in",
        element: <LogInView />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordView />,
      },
      {
        path: "create-password",
        element: <CreatePasswordView />,
      },
      {
        path: "register",
        element: <RegisterView />,
      },
      {
        path: "my-account",
        element: <MyAccountView />,
      },
      {
        path: "edit-account",
        element: <EditAccountView />,
      },
      {
        path: "update-success",
        element: (
          <SuccessActionView msg="Your account has been updated successfully." />
        ),
      },
      {
        path: "delete-success",
        element: (
          <SuccessActionView msg="Your account has been deleted successfully. " />
        ),
      },
      {
        path: "delete-user",
        element: <DeleteAccountView />,
      },
    ],
  },
  {
    path: "/contact",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <ContactView />
      </PageLayoutView>
    ),
  },
  {
    path: "/about",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <AboutView />
      </PageLayoutView>
    ),
  },
  {
    path: "/package-tour",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayoutView>
    ),
    children: [
      {
        path: "ny-ba-pass",
        element: (
          <PackageTourLayout
            sectionDescription="뉴욕 빅애플패스(New York Big Apple Pass)는 뉴욕을 방문하는 여행객들과 로컬들이 즐겨 찾는 관광명소 TOP 37을 자유롭게 선택하여 최대 64%까지 할인받을 수 있는 뉴욕 여행의 필수템이에요! 여행 경비를 절반으로 값싸게. 명소마다 일일이 티켓을 구매하는 번거로움이 한방에 해결하고 더 많은 뉴욕의 구석구석을 방문하며 스마트한 뉴욕 여행을 즐겨보세요."
            sectionTitle="Big Apple Pass"
          >
            <BigApplePassView />
          </PackageTourLayout>
        ),
      },
      {
        path: "ny-city-pass",
        element: (
          <PackageTourLayout
            sectionDescription="Text Goes here"
            sectionTitle="NY City Pass"
          >
            <NYCityPassView />
          </PackageTourLayout>
        ),
      },
      {
        path: "ny-explore-pass",
        element: (
          <PackageTourLayout
            sectionDescription="The NEW YORK CityPass is a pass that combines admission tickets to 5 New York attractions."
            sectionTitle="NY Explore"
          >
            <NYExploreView />
          </PackageTourLayout>
        ),
      },
    ],
  },
]);
