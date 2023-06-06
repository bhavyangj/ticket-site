import { useGetShowTickets } from "../../shared/hooks";
import { ShowCard } from "./components/ShowCard";

export const MusicalsAndShowsView = () => {
  const { tickets } = useGetShowTickets({
    category: 3,
  });
  return (
    <div className="flex w-full gap-x-3 justify-center">
      <div className="flex flex-col gap-y-4 w-full max-w-[700px]">
        {tickets?.map((item) => (
          <ShowCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
