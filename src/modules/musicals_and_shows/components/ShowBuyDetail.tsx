import { useState } from "react";
import { staticFiles } from "../../../shared";
import { SelectInput } from "../../../shared/components/Inputs";
import { SpaceY } from "../../../shared/components/Utils";

const filterFakeData = {
  value: 0.0,
};

export const ShowBuyDetail = () => {
  const [filterCounter, setFilterCounter] = useState(1);
  const [selectInputOne, setSelectInputOne] = useState("");
  return (
    <div className="flex flex-col bg-white items-center max-h-fit pb-5 border border-gray">
      <div className="bg-white flex justify-center w-full">
        <img width={23} className="mr-5" src={staticFiles.icons.shopping_bag} />
        <span className="font-poppins font-bold py-5">티켓구입 (Ticket)</span>
      </div>
      <div className="p-5 bg-blue flex justify-center items-center text-white  font-medium text-xl w-full">
        <img width={18} className="mr-5" src={staticFiles.icons.tag_white} />$
        {filterFakeData.value}
      </div>
      <div className="w-[90%] flex flex-col items-center">
        <SpaceY />
        <SpaceY />
        <SelectInput
          selected={selectInputOne}
          setSelected={setSelectInputOne}
          options={[{ value: "1", text: "1" }]}
        />
        <SpaceY />
        <SpaceY />
      </div>
    </div>
  );
};
