import { RouteObject } from "react-router-dom";
import App from "../App";
import { NotFound } from "./components/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
];
