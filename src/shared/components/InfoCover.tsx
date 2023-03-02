import { staticFiles } from "..";
import { MainButton } from "./Buttons";
import { SpaceY } from "./Utils";

export const InfoCover = () => (
  <div className="max-h-[400px] flex justify-between px-[5vw] max-w-[1300px]">
    <div className="flex flex-col justify-between w-7/12">
      <div className="flex flex-col w-full">
        <span className="font-poppins font-medium text-[#DF6951]">
          Best Destinations around the world
        </span>
        <span className="font-volkhov font-bold text-dark text-2xl lg:text-3xl leading-tight">
          Travel, enjoy your vacation
        </span>
      </div>
      <div className="md:flex flex-col hidden">
        <div className="font-poppins text-dargGray mr-20">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </div>
        <SpaceY />
        <div className="flex">
          <MainButton
            containerClassName="w-[200px] rounded"
            text="Learn more"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
    <div className="flex w-5/12 items-end justify-end">
      <img
        className="max-h-[330px] min-h-[200px]"
        src={staticFiles.images.cover_bg_complete}
      />
    </div>
  </div>
);
