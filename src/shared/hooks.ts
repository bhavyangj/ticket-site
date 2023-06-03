import { useQuery } from "@tanstack/react-query";
import { fetcher } from ".";
import { ProductCardProps } from "./components/ProductCard";

export const useGetCityAttractions = ({
  category,
  subCategoryId,
}: {
  category: number;
  subCategoryId?: number;
}): { cityAttractions: ProductCardProps[] | undefined } => {
  const { data: cityAttractions } = useQuery<ProductCardProps[]>({
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

  return { cityAttractions };
};
