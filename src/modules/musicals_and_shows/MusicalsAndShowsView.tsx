import { ShowCard, ShowCardProps } from "../../shared/components/ShowCard";

const fakeCards: ShowCardProps[] = [
  {
    name: "엠파이어 스테이트 빌딩 전망대",
    availabilityStart: "Jan 16",
    availabilityEnd: "Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/show1.png",
    isPremium: false,
  },
  {
    name: "탑 오브 더 락 전망대",
    availabilityStart: "Jan 16",
    availabilityEnd: "Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/show2.png",
    isPremium: false,
  },
  {
    name: "자유의 여신상 스카이라인 데이크루즈",
    availabilityStart: "Jan 16",
    availabilityEnd: "Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/show3.png",
    isPremium: false,
  },
  {
    name: "모마 현대 미술관",
    availabilityStart: "Jan 16",
    availabilityEnd: "Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/show4.png",
    isPremium: false,
  },
  {
    name: "모마 도슨트 투어",
    availabilityStart: "Jan 16",
    availabilityEnd: "Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/show5.png",
    isPremium: false,
  },
];

export const MusicalsAndShowsView = () => {
  return (
    <div className="flex w-full gap-x-3 justify-center">
      <div className="flex flex-col gap-y-4 w-full max-w-[700px]">
        {fakeCards.map((item) => (
          <ShowCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};
