import { useState } from "react";
import { useParams } from "react-router-dom";
import { staticFiles } from "../../shared";
import { MainButton } from "../../shared/components/Buttons";
import { SpaceY } from "../../shared/components/Utils";
import { PackageBuyDetail } from "../package_tour/components/PackageBuyDetail";
import { useGetTicket } from "../../shared/hooks";

export const ProductDetailView = () => {
  const [displayFilter, setDisplayFilter] = useState(false);
  const productFakeData = {
    name: "엠파이어 스테이트 빌딩 전망대",
    tourDetail:
      "엠파이어 스테이트 빌딩은 세계에서 가장 유명한 건물로 뉴욕에 있는 상징적인 건물 입니다. 전망대에 오르면 뉴욕의 전경을 한 눈에 담을 수 있고, 날씨가 좋은 날에는 미국 동부의 6개 주를 보실 수 있습니다. 전망대 뿐만 아니라 엠파이어 스테이트 빌딩이 구상된 당시부터 지금까지의 스토리를 담은 박물관도 경험하실 수 있습니다. 관광객의 안전과 편리함을 최우선으로 생각하고 있는 엠파이어 스테이트 빌딩은 한국어가 포함된 9개의 언어로 설명을 들을 수 있는 애플리케이션을 제공하고 있으며, 건물 전체에 무료 와이파이도 제공할 수 있습니다. 매일매일 운영하고 있는 엠파이어 스테이트 빌딩 전망대는 뉴욕의 핵심 관광지인 타임스퀘어와 도보거리에 위치하고 있으며 빌딩 주변에는 메이시스 백화점, 메디슨 스퀘어 가든, 펜스테이션 등 쇼핑, 공연, 대중교통을 함께 이용할 수 있는 곳들이 있습니다.",
  };

  const { ticket } = useGetTicket();

  console.log(ticket);

  return (
    <div className="w-full pb-[10vw] flex">
      <div className="flex flex-col w-full md:w-2/3">
        {displayFilter ? (
          <PackageBuyDetail tickets={[]} />
        ) : (
          <div dangerouslySetInnerHTML= { { __html: ticket?.ticket_content?.content }}>
              
            
          </div>
        )}
        <SpaceY />
        <MainButton
          text={"티켓구입"}
          containerClassName="w-full block md:hidden"
          onClick={() => setDisplayFilter((prev) => !prev)}
        />
      </div>
      <div className="hidden md:flex flex-col w-1/3">
        <div className="min-h-[500px]">
          <PackageBuyDetail tickets={[]} />
        </div>
        <div className="w-[180%]">
          <img
            width={700}
            src={staticFiles.images.product_detail_traveler}
            className="relative object-contain left-[-40%]"
          />
        </div>
      </div>
    </div>
  );
};
