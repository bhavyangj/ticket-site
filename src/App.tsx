import "./styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
