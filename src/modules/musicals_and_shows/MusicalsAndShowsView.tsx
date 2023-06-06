import { PUBLIC_URL } from "../../shared";
import { useGetShowTickets, useGetTickets } from "../../shared/hooks";
import { ShowCard, ShowCardProps } from "./components/ShowCard";

const fakeCards: ShowCardProps[] = [
  {
    id: "test",
    title: "The Lion King",
    subTitle: "[라이온 킹]",
    availability: "Sale through Aug 13",

    description:
      "뉴욕의 명소 브로드웨이. - 연일 매진행렬을 이어오는 가장 인기 있는 뮤지컬",
    image: `${PUBLIC_URL}/fake/show1.png`,
    priceStart: 115,
  },
  {
    id: "test",
    title: "Chicago",
    subTitle: "[시카고]",
    availability: "Sale through Aug 13",

    description:
      "뉴욕의 명소 브로드웨이. - 연일 매진행렬을 이어오는 가장 인기 있는 뮤지컬",
    image: `${PUBLIC_URL}/fake/show2.png`,
    priceStart: 59,
  },
  {
    id: "test",
    title: "Moulin Rouge! The Musical",
    subTitle: "[물랑루즈]",
    availability: "Sale through Aug 13",

    description:
      "뉴욕의 명소 브로드웨이. - 연일 매진행렬을 이어오는 가장 인기 있는 뮤지컬",
    image: `${PUBLIC_URL}/fake/show3.png`,
    priceStart: 119,
  },
  {
    id: "test",
    title: "The Book Of Mormon ",
    subTitle: "[몰몬의 책]",
    availability: "Sale through Aug 13",
    description:
      "뉴욕의 명소 브로드웨이. - 연일 매진행렬을 이어오는 가장 인기 있는 뮤지컬",
    image: `${PUBLIC_URL}/fake/show4.png`,
    priceStart: 166.5,
  },

  {
    id: "test",
    title: "Aladdin",
    subTitle: "[알라딘]",
    availability: "Sale through Aug 13",
    description:
      "뉴욕의 명소 브로드웨이. - 연일 매진행렬을 이어오는 가장 인기 있는 뮤지컬",
    image: `${PUBLIC_URL}/fake/show5.png`,
    priceStart: 187.5,
  },
];

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
