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
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex" id="price">
              <img width={25} src={staticFiles.icons.tag} className="mr-5" />
              Price
            </div>
            <SpaceY />
            <div className="w-full flex">
              <div className="w-1/5" />
              <div className="w-4/5 flex flex-col font-poppins text-sm">
                <span className="">성인 가격</span>
                <span className="ml-5">현장 판매가:$48</span>
                <span className="ml-5">
                  현장 판매가는 시즌별에 따라 상이합니다.
                </span>
                <SpaceY />
                <span className="">어린이 가격</span>
                <span className="ml-5">현장 판매가:$41</span>
                <span className="ml-5">
                  현장 판매가는 시즌별에 따라 상이합니다.
                </span>
                <SpaceY />
                <span className="ml-5">
                  *세금과 티켓 발권 비용 등이 모두 포함된 최종 가격이며,
                  타미스는 부수적인 세금이나 비용을 청구하지 않습니다.
                </span>
                <span className="ml-5">
                  *선셋타임 입장을 원하시는 경우에는 현장에서 1인당 $10의 금액을
                  지불하시고 이용하실 수 있습니다.
                </span>
                <SpaceY />
                <span className="ml-5">
                  이 상품은 빅애플패스로 구매하실 수 있습니다.
                </span>
              </div>
            </div>
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex">
              <img width={25} src={staticFiles.icons.shop} className="mr-5" />
              타미스 사무실 안내 (Office)
            </div>
            <SpaceY />
            <div className="w-full flex">
              <div className="w-1/5" />
              <div className="w-4/5 flex flex-col font-poppins text-sm">
                <span className="">위치:</span>
                <span className="">
                  151 West 46th Street, Suite 1002, New York, NY 10036
                </span>
                <span className="">타미스 사무실 위치 안내</span>
                <SpaceY />
                <span className="">운영시간: </span>
                <span className="">뉴욕 본사: </span>
                <span className="">월-토요일 오전 9:00 ~ 오후 6:00</span>
                <span className="">일요일 오전 11:00 ~ 오후 6:00</span>
                <span className="">
                  한국 지사: 월-금요일 오전 9:00 ~ 오후 6:00
                </span>
                <SpaceY />
                <span className="">연락처: </span>
                <span className="">뉴욕 본사: 646-684-4848 </span>
                <span className="">한국 지사: 1800-6991</span>
                <span className="">이메일: service@tamice.com </span>
                <span className="">
                  {" "}
                  타미스 카카오톡 채널: @타미스 (문의하기)
                </span>
              </div>
            </div>
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex">
              <img width={25} src={staticFiles.icons.clock} className="mr-5" />
              Business Hour
            </div>
            <SpaceY />
            <div className="w-full flex">
              <div className="w-1/5" />
              <div className="w-4/5 flex flex-col font-poppins text-sm">
                <span className="">주소</span>
                <span className="">20 W 34th St, New York, NY 10001</span>
                <SpaceY />
                <span className="">운영시간 </span>
                <span className="">
                  매일 오전 10:00 ~ 오후 10:00 (마지막 입장시간 오후 7:45) 선셋
                  시간
                </span>
                <span className="">
                  1월 8일 ~ 1월 21일: 오후 3:15 ~ 오후 5:00
                </span>
                <span className="">
                  1월 22일 ~ 2월 2일: 오후 3:30 ~ 오후 5:15
                </span>
                <span className="">
                  2월 3일 ~ 2월 14일: 오후 3:45 ~ 오후 5:30
                </span>
                <span className="">
                  2월 15일 ~ 2월 27일: 오후 4:00 ~ 오후 5:45
                </span>
                <span className="">
                  2월 28일 ~ 3월 12일: 오후 4:15 ~ 오후 6:00
                </span>
                <span className="">
                  3월 13일 ~ 3월 27일: 오후 5:30 ~ 오후 7:15
                </span>
                <SpaceY />
                <span className="">공식 홈페이지</span>
              </div>
            </div>
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex">
              <img
                width={25}
                src={staticFiles.icons.info}
                className="mr-5"
                id="how-to"
              />
              이용방법 (How To)
            </div>
            <SpaceY />
            <div className="w-full flex">
              <div className="w-1/5" />
              <div className="w-4/5 flex flex-col font-poppins text-sm">
                <span className="">
                  타미스 웹사이트에서 구매하기를 완료해 주세요.
                </span>
                <span className="">
                  구매 시 기재하신 이메일로 발송되는 구매 완료 이메일을 확인해
                  주세요.
                </span>
                <span className="">
                  방문 희망 날짜와 시간, 대표자 영문 성함을 타미스 카카오톡 채널
                  및 이메일로 요청하시면 E-티켓을 발송해 드립니다.
                </span>
                <span className="">
                  E-티켓에 있는 예약날짜와 시간에 맞춰 방문해 주세요.
                </span>
                <span className="">
                  선셋타임 입장을 원하시는 경우에는 1인당 $10의 금액을
                  지불하시고 이용하실 수 있습니다.
                </span>
              </div>
            </div>
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
            <div className="w-full font-poppins text-xl flex">
              <img width={25} src={staticFiles.icons.info} className="mr-5" />
              유의사항 (Notice)
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
                  86층 전망대까지 이용 가능한 티켓입니다.{" "}
                </span>
              </div>
            </div>
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
