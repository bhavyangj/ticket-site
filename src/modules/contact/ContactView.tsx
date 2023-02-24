import { staticFiles } from "../../shared";
import { SpaceY } from "../../shared/components/Utils";

export const ContactView = () => {
  const rowSectionClass = "flex w-full px-[10vw]";
  const infoContainerClass =
    "font-poppins text-darkGray flex flex-col mb-5 h-1/2";
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <div className={rowSectionClass}>
        <div className="flex w-1/3" />
        <span className="flex w-1/3 justify-center font-volkhov font-bold text-dark text-2xl">
          Contact Us
        </span>
        <div className="flex w-1/3 flex-col items-end">
          <img
            width="40"
            src={staticFiles.icons.messages_bubble}
            alt="message"
          />

          <span className="font-poppins text-xs text-darkGray mt-2">
            카톡 상담원 채팅
          </span>
          <span className="font-poppins text-xs text-darkGray mt-1">
            (월-일요일 오전 9:00 ~ 오후 6:00)
          </span>
        </div>
      </div>
      <SpaceY /> <SpaceY />
      <div className={rowSectionClass}>
        <div className="flex flex-col grow w-1/2">
          <div className={infoContainerClass}>
            <span className="font-medium">Contact:</span>
            <span>service@tamice.com</span>
          </div>
          <div className={infoContainerClass}>
            <span className="font-medium">Tamice Address: </span>
            <span>151 West 46th Street, Suite 1002, New York, NY 10036</span>
          </div>
        </div>
        <div className="flex flex-col grow w-1/2">
          <div className={infoContainerClass}>
            <span className="font-medium">NY Office:</span>
            <span>뉴욕 본사: 646-684-4848</span>
            <span>
              월-토요일 오전 9:00 - 오후 6:00일요일 오전 11:00 - 오후 6:00(미
              동부 시간 기준)
            </span>
          </div>
          <div className={infoContainerClass}>
            <span className="font-medium">Korea Office: </span>
            <span>한국 지사: 1800-6991 </span>
            <span>
              월-금요일 오전 9:00 ~ 오후 6:00(한국 시간 기준, 토, 일요일 및
              공휴일 휴무)
            </span>
          </div>
        </div>
      </div>
      <SpaceY />
      <SpaceY />
      <div className={rowSectionClass}>
        <hr className="border border-gray rounded w-full my-3" />
      </div>
      <SpaceY />
      <SpaceY />
      <div className={rowSectionClass}>
        <div className="flex flex-col grow w-1/2 px-10">
          <img src={staticFiles.images.contact_location} />
        </div>
        <div className="flex flex-col grow w-1/2">
          <span className="font-volkhov text-dark font-bold text-xl">
            타미스 오피스 찾아 오시는 길
          </span>
          <SpaceY />
          <SpaceY />
          <span className="font-poppins">
            • 타미스 오피스는 맨하튼의 중심 타임스퀘어에 위치해 있습니다.
          </span>{" "}
          <SpaceY />
          <span className="font-poppins">
            • 46th Street 선상 6th와 7th Avenue사이에 있으며 7th Avenue와 더
            가깝습니다
          </span>{" "}
          <SpaceY />
          <span className="font-poppins">
            • 지하철Times SQ 42 Street역 (1, 2, 3, 7, N, Q, R, W, S 라인), 47-50
            Street Rockefeller Center 역(B, D, F, M라인) 에서 근접하며,
            타임스퀘어 중심인 빨간계단 부근 “Havana Central” 레스토랑 바로 옆
            151 W 라고 쓰여진 입구로 들어와 10층으로 올라오시면 됩니다.
          </span>
        </div>
      </div>
    </div>
  );
};
