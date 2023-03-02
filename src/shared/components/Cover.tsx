import { staticFiles } from "..";

export const Cover = () => (
  <div className="min-h-min">
    <img className="" src={staticFiles.images.cover_bg} />
    <div className="flex justify-center relative">
      <div className="absolute top-[-180px] lg:top-[-18vw] h-[180px] w-full z-10 flex items-center px-[5vw] max-w-[1250px]">
        <div className="flex flex-col">
          <span className="font-poppins text-white text-xl md:text-3xl font-semibold">
            Big Apple Pass
          </span>
          <span className="font-poppins text-[#EA87FA] text-sm md:text-2xl font-medium">
            Customize your trio
          </span>
        </div>
      </div>
    </div>
  </div>
);
