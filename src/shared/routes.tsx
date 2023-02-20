import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../modules/authentication/AuthLayout";
import { LogInView } from "../modules/authentication/LogInView";
import { SignUpView } from "../modules/authentication/SignUpView";
import { LandingView } from "../modules/landing/LandingView";
import { MainView } from "../modules/main/MainView";
import { NotFound } from "./components/NotFound";

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
    path: "/auth",
    element: <AuthLayout />,
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
    ],
  },
]);
