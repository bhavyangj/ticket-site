import { RouteObject } from "react-router-dom";
import { LandingView } from "../modules/landing/LandingView";
import { MainView } from "../modules/main/MainView";
import { NotFound } from "./components/NotFound";

export const routes: RouteObject[] = [
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
];
