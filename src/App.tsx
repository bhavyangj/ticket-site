import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./styles.css";
import "react-phone-number-input/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routes";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { createState } from "state-pool";
import { MedalEnum } from "./modules/cart/components/CardInfo";

const queryClient = new QueryClient();

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
  addition: number;
  subtotal: number;
  includes?: {
    medal: MedalEnum;
    name: string;
    addition?: number;
    scheduledDate?: string;
  }[];
};

export const cartState = createState<{
  childInfo: CartItem[];
  adultInfo: CartItem[];
}>({
  childInfo: [
    // {
    //   name: "Big Apple 2",
    //   price: 100,
    //   quantity: 1,
    //   addition: 27,
    //   subtotal: 137,
    //   includes: [
    //     {
    //       medal: MedalEnum.GOLD,
    //       name: "Summit Observation Deck",
    //       addition: 18,
    //     },
    //     {
    //       medal: MedalEnum.SILVER,
    //       name: "Moma Museum Doson Tour",
    //       scheduledDate: "01/25/2023 (10:30 AM)",
    //       addition: 9,
    //     },
    //   ],
    // },
  ],
  adultInfo: [
    // {
    //   name: "Big Apple 2",
    //   price: 100,
    //   quantity: 1,
    //   addition: 27,
    //   subtotal: 137,
    //   includes: [
    //     {
    //       medal: MedalEnum.GOLD,
    //       name: "Summit Observation Deck",
    //       addition: 18,
    //     },
    //     {
    //       medal: MedalEnum.SILVER,
    //       name: "Moma Museum Doson Tour",
    //       scheduledDate: "01/25/2023 (10:30 AM)",
    //       addition: 9,
    //     },
    //   ],
    // },
    // {
    //   name: "Big Apple 3",
    //   price: 100,
    //   quantity: 1,
    //   addition: 27,
    //   subtotal: 137,
    // },
    // {
    //   name: "Big Apple 4",
    //   price: 100,
    //   quantity: 1,
    //   addition: 27,
    //   subtotal: 137,
    //   includes: [
    //     {
    //       medal: MedalEnum.NONE,
    //       name: "Top of The Rock",
    //     },
    //     {
    //       medal: MedalEnum.GOLD,
    //       name: "Summit Observation Deck",
    //       addition: 18,
    //     },
    //     {
    //       medal: MedalEnum.NONE,
    //       name: "Edge NYC",
    //     },
    //     {
    //       medal: MedalEnum.SILVER,
    //       name: "마담투소 + 마블 4D",
    //       addition: 9,
    //     },
    //   ],
    // },
    // {
    //   name: "Big Apple 4",
    //   price: 100,
    //   quantity: 1,
    //   addition: 27,
    //   subtotal: 137,
    //   includes: [
    //     {
    //       medal: MedalEnum.GOLD,
    //       name: "Summit Observation Deck",
    //       addition: 18,
    //     },
    //     {
    //       medal: MedalEnum.NONE,
    //       name: "Edge NYC",
    //     },
    //     {
    //       medal: MedalEnum.SILVER,
    //       name: "마담투소 + 마블 4D",
    //       addition: 9,
    //     },
    //   ],
    // },
  ],
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
