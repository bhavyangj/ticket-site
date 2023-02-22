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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingView />,
    errorElement: <NotFound />,
  },
  {
    path: "/main",
    element: <MainView />,
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
    ],
  },
]);
