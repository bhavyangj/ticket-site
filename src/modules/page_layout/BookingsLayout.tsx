import { ReactNode } from "react";

export const BookingsLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-col border">
    <div className="flex flex-col w-full bg-white p-10">
      <div className="font-poppins font-medium text-xl">
        My Bookings User Guide (이용방법):
      </div>
    </div>
    {children}
  </div>
);
