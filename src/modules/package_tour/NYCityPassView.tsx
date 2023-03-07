import { PackageBuyDetail } from "./components/PackageBuyDetail";
import {
  ProductCard,
  ProductCardProps,
} from "../../shared/components/ProductCard";

const fakeCards: ProductCardProps[] = [
  {
    id: "test",
    name: "엠파이어 스테이트 빌딩 전망대",
    availability: "Jan 16 to Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/destination4.png",
    isPremium: false,
  },
  {
    id: "test",
    name: "탑 오브 더 락 전망대",
    availability: "Jan 16 to Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/destination4.png",
    isPremium: false,
  },
  {
    id: "test",
    name: "자유의 여신상 스카이라인 데이크루즈",
    availability: "Jan 16 to Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/destination4.png",
    isPremium: false,
  },
  {
    id: "test",
    name: "모마 현대 미술관",
    availability: "Jan 16 to Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/destination4.png",
    isPremium: false,
  },
  {
    id: "test",
    name: "모마 도슨트 투어",
    availability: "Jan 16 to Dec 16",

    adultPrice: 48,
    adultSitePrice: 60,
    childPrice: 41,
    childSitePrice: 55,
    childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
    image: "/fake/destination4.png",
    isPremium: false,
  },
];

export const NYCityPassView = () => {
  return (
    <div className="flex w-full gap-x-3">
      <div className="w-2/3 flex flex-col gap-y-4">
        {fakeCards.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
      <div className="w-1/3 font-poppins">
        <PackageBuyDetail />
      </div>
    </div>
  );
};
