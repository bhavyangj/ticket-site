import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./styles.css";
import "react-phone-number-input/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routes";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
