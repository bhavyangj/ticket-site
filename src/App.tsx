import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./shared/routes";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
