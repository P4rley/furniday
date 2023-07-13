"use client";

import Image from "next/image";
import img from "../heroImg.jpg";
import { useState } from "react";
import Link from "next/link";

type Props = {};
const Shop = (props: Props) => {
  const [expand, setExpand] = useState<number>(16);

  return (
    <div className="my-10">
      <div className="flex flex-wrap justify-between items-center gap-5">
        {[...Array(expand)].map((el, i) => {
          return (
            <Link href={`/shop/chair/1`} key={i}>
              <div
                className={`shadow-lg group h-[200px] w-full md:w-[200px] lg:w-[240px] xl:w-[275px] lg:h-[250px] rounded-md overflow-hidden`}
              >
                <Image
                  src={img}
                  alt="products"
                  className="h-[150px] lg:h-[200px] w-full object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="flex w-full justify-between py-4 px-2">
                  <span className="text-xs font-medium">Chair</span>
                  <span className="text-xs font-medium">IDR 300,000</span>
                </div>
              </div>
            </Link>
          );
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
