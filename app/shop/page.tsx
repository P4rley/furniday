"use client";

import Card from "@/components/Card";
import { useState } from "react";

type Props = {};
const Shop = (props: Props) => {
  const [expand, setExpand] = useState<number>(16);

  return (
    <div className="my-10">
      <div className="flex flex-wrap justify-between items-center gap-10">
        {[...Array(expand)].map((el, i) => {
          return <Card key={i} width="w-full" />;
        })}
      </div>

      <div className="flex justify-center items-center my-20 ">
        <button
          onClick={() => setExpand((prev) => prev + 16)}
          className="border-2 border-[#222] hover:text-[#222] hover:bg-white transition-all ease-in-out duration-300 font-bold text-sm text-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer bg-[#222] rounded-full "
        >
          More
        </button>
      </div>
    </div>
  );
};
export default Shop;
