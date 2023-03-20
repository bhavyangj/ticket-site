import { ReactNode } from "react";
import { SpaceY } from "../../shared/components/Utils";

export const BookingsLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div className="min-h-[100px] flex flex-col justify-center">
    <SpaceY />
    <div className="flex flex-col w-full bg-white p-10 gap-y-10">
      <div className="font-poppins font-medium text-xl">
        My Bookings User Guide (이용방법):
      </div>
      <div>
        <div>
          •입장지티켓: 아래의 "마이 페이지" 에서 E-티켓을 전송 받으실 수
          있습니다.
        </div>
        <div>•"티켓받기"를 클릭하면 기재하신 이메일로 E-티켓이 전송됩니다.</div>
        <div>•"예약필요"는 날짜/시간 지정이 필요한 입장지 입니다.</div> 방문
        희망 날짜/시간을 타미스 카카오톡 채널 및 이메일로 요청하시면 E-티켓을
        발송해
        <div>•드립니다.</div> "실물티켓"은 타임스퀘어에 위치한 타미스 사무실에
        방문하여
        <div>•수령해 주세요.</div> (151 W 46th St Suite 1002 New York NY
        10036)티켓을
        <div>•수령하시면 교환/환불이 불가능합니다.</div> 주문 확인 이메일,
        E-티켓 이메일을
        <div>•못받으셨다면 스팸 메일함을 꼭 확인해 주세요.</div> 아이폰 전용
        Mail 앱에서는
        <div>•티켓 확인이 불가능합니다.</div>
      </div>
    </div>
    {children}
  </div>
);
