import { staticFiles } from "../../shared";
import { SpaceY } from "../../shared/components/Utils";
import { ServiceCard, ServiceCardProps } from "./components/ServiceCard";

const firstRowServices: ServiceCardProps[] = [
  {
    title: "무료 짐 보관 서비스",
    description:
      "타미스에서는 이용 고객을 대상으로 무료 짐 보관 서비스를 제공하고 있습니다.여행에 방해되는 무거운 짐은 타미스에 맡기고 가볍게 여행을 즐기세요.",
    icon: staticFiles.icons.shopping_bag,
  },
  {
    title: "유연한 환불, 변경",
    description:
      "고객을 먼저 생각하는 타미스는 다른 업체들과는 다른 유연한 환불 정책을 운영 중입니다. 구매 후에도 티켓을 수령하지 않은 상태라면, 입장지 변경, 부분 환불, 전체 환불도 가능합니다. (티켓의 종류에 따라 환불 기준은 다를 수 있습니다.)",
    icon: staticFiles.icons.dollar_circle,
  },
  {
    title: "신속 응대 및 실시간 상담원 서비스",
    description:
      "타미스는 한국과 미국 동부 시간 기준으로 오전 9시부터 오후 6시까지 신속한 응대와 상담을 위해 노력하고 있습니다. 여행 전 상담에서부터 여행 중, 여행 후까지 뉴욕 현지 본사와 한국 지사를 통해 언제, 어디서든 편리한 VIP 서비스를 누려보세요!",
    icon: staticFiles.icons.call,
  },
  {
    title: "최고 가성비 & 안심 직거래",
    description:
      "빅애플패스는 수수료 등 숨겨진 비용 발생이 일절 없으며 타임스퀘어에 위치한 타미스에서 직접 패스를 받으니 대기시간 절약은 물론 배송에 따른 분실 위험도 전혀 없습니다.",
    icon: staticFiles.icons.thumbs_up,
  },
];

const secondRowServices: ServiceCardProps[] = [
  {
    title: "무료 짐 보관 서비스",
    description:
      "정신없는 뉴욕 거리, 무거운 짐 없이 홀가분하게 여행하세요! MTA 교통카드를 제외한 타미스 이용 고객은 영업시간에 한하여 무료 짐 보관이 가능합니다. (1인 1회, 최대 2개, 2일: 짐 맡긴 다음날 영업시간 전까지, 일행 및 타인에게 양도 불가)",
    icon: staticFiles.icons.shopping_bag,
  },
  {
    title: "타미스 라운지 제공",
    description:
      "타미스 고객이 더욱 특별한 이유 바로 타미스 라운지! 생수, 커피, 티, 와이파이, 프린트, 전화 등을 모두 무료 사용할 수 있을 뿐 아니라 맛집, 쇼핑 정보, 쏠쏠한 할인 쿠폰들까지! 타미스를 통해 VIP 여행하세요.",
    icon: staticFiles.icons.coffee,
  },
  {
    title: "완벽한 자유여행을 위한 ONE-STOP 서비스",
    description:
      "뉴욕 여행에 관한 모든 건 타미스에서 한 번에 완료! 교통카드, 유심칩, 뮤지컬 예약, 각종 투어 예약까지 발품 팔지 말고 타미스에서 한 번에 해결하세요.",
    icon: staticFiles.icons.call,
  },
  {
    title: "통역 서비스",
    description:
      "여행 중 발생할 수 있는 크고 작은 각종 사고, 민원 등을 가족과 같은 마음으로 최대한 도와드립니다.",
    icon: staticFiles.icons.translation,
  },
];

export const AboutView = () => {
  const rowSectionClass = "flex w-full px-[10vw] justify-center";
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <div className={rowSectionClass}>
        <span className="flex grow justify-center font-volkhov font-bold text-dark text-2xl">
          Why Tour With Us?
        </span>
      </div>
      <SpaceY /> <SpaceY />
      <div className={rowSectionClass}>
        <span className="font-poppins text-darkGray">
          Choose from our comprehensive list of guided, sightseeing, and family
          New York tours. We also offer group and corporate rates!
        </span>
      </div>
      <SpaceY />
      <SpaceY />
      <div className={`${rowSectionClass}`}>
        {firstRowServices.map((s) => (
          <ServiceCard {...s} />
        ))}
      </div>
      <SpaceY />
      <SpaceY />
      <SpaceY />
      <div className={rowSectionClass}>
        <span className="flex grow justify-center font-volkhov font-bold text-dark text-2xl">
          Customer Service
        </span>
      </div>
      <SpaceY />
      <SpaceY />
      <SpaceY />
      <div className={`${rowSectionClass}`}>
        {secondRowServices.map((s) => (
          <ServiceCard {...s} />
        ))}
      </div>
    </div>
  );
};
