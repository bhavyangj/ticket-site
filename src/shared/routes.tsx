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
]);
