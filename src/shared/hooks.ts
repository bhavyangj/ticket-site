import { useQuery } from "@tanstack/react-query";
import { fetcher } from ".";
import { ProductCardProps } from "./components/ProductCard";
import { ShowCardProps } from "../modules/musicals_and_shows/components/ShowCard";

export const useGetTickets = ({
  category,
  subCategoryId,
}: {
  category: number;
  subCategoryId?: number;
}): { tickets: ProductCardProps[] | undefined } => {
  const { data: tickets } = useQuery<ProductCardProps[]>({
    queryKey: [
      `tickets?category=${category}${
        subCategoryId ? `&sub_category=${subCategoryId}` : ""
      }`,
    ],
    queryFn: fetcher(
      `/tickets?category=${category}${
        subCategoryId ? `&sub_category=${subCategoryId}` : ""
      }`,
      (res: any[]) => {
        // console.log(res);
        return res?.map((item) => ({
          id: item.id.toString(),
          name: item.title_en,
          availability: "Jan 16 to Dec 16",
          adultPrice: item.ticket_prices[0].sale_price,
          adultSitePrice: item.ticket_prices[0].sale_price,
          childPrice: item.ticket_prices[1].sale_price,
          childSitePrice: item.ticket_prices[1].sale_price,
          childNote: "만 4 세-12 세 기준, 만 3 세 이하 무료",
          image: item?.card_image?.url,
          isPremium: false,
        }));
      }
    ),
  });

  return { tickets };
};

export const useGetShowTickets = ({
  category,
  subCategoryId,
}: {
  category: number;
  subCategoryId?: number;
}): { tickets: ShowCardProps[] | undefined } => {
  const { data: tickets } = useQuery<ShowCardProps[]>({
    queryKey: [
      `tickets?category=${category}${
        subCategoryId ? `&sub_category=${subCategoryId}` : ""
      }`,
    ],
    queryFn: fetcher(
      `/tickets?category=${category}${
        subCategoryId ? `&sub_category=${subCategoryId}` : ""
      }`,
      (res: any[]) => {
        // console.log(res);
        return res?.map((item) => ({
          id: item.id.toString(),
          title: item.title_en,
          subTitle: item.title_kr,
          availability: "Sale through Aug 13",

          description:
            "뉴욕의 명소 브로드웨이. - 연일 매진행렬을 이어오는 가장 인기 있는 뮤지컬",

          image: item?.card_image?.url,
          priceStart: item?.ticket_prices[0].sale_price,
        }));
      }
    ),
  });

  return { tickets };
};