import { staticFiles } from "..";

export const Cover = () => (
  <div className="min-h-min">
    <img className="" src={staticFiles.images.cover_bg} />
    <div className="relative">
      <div className="absolute top-[-200px] h-[180px] w-full z-10 flex items-center px-[10vw]">
        <div className="flex flex-col">
          <span className="font-poppins text-white text-3xl font-semibold">
            Big Apple Pass
          </span>
          <span className="font-poppins text-[#EA87FA] text-2xl font-medium">
            Customize your trio
          </span>
        </div>
      </div>
    </div>
  </div>
);
