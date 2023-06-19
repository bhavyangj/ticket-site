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
          <>
            <SpaceY />
            <SpaceY />
            <div className="w-full font-volkhov text-xl font-bold">
              {productFakeData.name}
            </div>
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex" id="detail">
              <img width={25} src={staticFiles.icons.paper} className="mr-5" />
              Tour Details
            </div>
            <SpaceY />
            <div className="w-full font-poppins">
              {productFakeData.tourDetail}
            </div>
            {
              ticket?.ticket_contents?.map((item:any)=>(
 <><SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex" id={(item.name as string).toLowerCase()}>
              <img width={25} src={staticFiles.icons.tag} className="mr-5" />
              {item.name}
            </div>
            <SpaceY />
            <div className="w-full flex">
              <div className="w-1/5" />
              <div className="w-4/5 flex flex-col font-poppins text-sm">
                <span className="">{item.content}
                </span>
              </div>
            </div></>
                ))
            }
            
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex" id="refund">
              <img width={25} src={staticFiles.icons.refund} className="mr-5" />
              취소 및 환불규정 (Refund Policy)
            </div>
            <SpaceY />
            <div className="w-full flex">
              <div className="w-1/5" />
              <div className="w-4/5 flex flex-col font-poppins text-sm">
                <span className="">
                  날짜/시간 예약 요청이 완료된 티켓은 환불/변경이 불가능합니다.
                </span>
                <span className="">
                  날짜/시간 예약 요청을 하지 않은 티켓에 한해서 환불/변경이
                  가능합니다.
                </span>
                <span className="">
                  환불 문의 및 요청은 타미스 카카오톡 채널 또는
                  이메일(service@tamice.com)로 문의해 주세요.
                </span>
                <span className="">
                  환불 시 결제금액 혹은 차액의 6%의 취소수수료가 발생합니다.
                </span>
              </div>
            </div>
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex" id="faq">
              <img width={25} src={staticFiles.icons.faq} className="mr-5" />
              FAQ
            </div>
            <SpaceY />
            <div className="w-full flex">
              <div className="w-1/5" />
              <div className="w-4/5 flex flex-col font-poppins text-sm">
                <span className="">
                  구매 시 기재하신 이메일로 E-티켓이 발송됩니다. 반드시 방문
                  전에 E-티켓을 확인하시고 확인이 불가능할 경우 타미스 카카오톡
                  채널 또는 이메일 (service@tamice.com) 로 문의해 주세요.
                </span>
                <span className="">
                  운영시간은 시기나 특정 기념일에 따라 변경될 수 있으니 방문
                  전에 반드시 공식 홈페이지에서 확인해 주세요.
                </span>
                <span className="">
                  해당 E-티켓은 1회 입장만 가능하며, 재사용은 불가능 합니다.
                  입장 후 관람 시간의 제한은 없습니다.
                </span>
                <span className="">
                  선셋타임 입장을 원하시는 경우에는 현장에서 1인당 $10의 금액을
                  지불하시고 이용하실 수 있습니다.
                </span>
                <span className="">
                  86층 전망대까지 이용 가능한 티켓입니다.
                </span>
              </div>
            </div>
          </>
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
