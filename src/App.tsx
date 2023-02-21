import "./styles.css";
import "react-phone-number-input/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
