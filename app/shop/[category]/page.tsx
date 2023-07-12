"use client";

import Image from "next/image";
import heroImg from "../../heroImg.jpg";
import Card from "@/components/Card";
import { useState } from "react";

type Props = {
  params: { category: string };
};
const Category = ({ params: { category } }: Props) => {
  const [expand, setExpand] = useState<number>(16);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between gap-5 mt-10">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">
            {category.replace("-", " ").toUpperCase()} FURNITURE
          </h1>
        </div>

        <Image
          src={heroImg}
          alt="Hero Image"
          className="w-full md:w-[350px] xl:w-[450px] h-[250px] xl:h-[350px] rounded-sm object-center object-cover"
        />
      </div>

      <div className="mt-20 mb-10">
        <div className="flex flex-wrap justify-between items-center gap-5">
          {[...Array(expand)].map((el, i) => {
            return (
              <div
                key={i}
                className={`shadow-lg group  h-[200px] w-full md:w-[200px] lg:w-[240px] xl:w-[275px] lg:h-[250px] rounded-md overflow-hidden`}
              >
                <Image
                  src={heroImg}
                  alt="products"
                  className="h-[150px] lg:h-[200px] w-full object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="flex w-full justify-between py-4 px-2">
                  <span className="text-xs font-medium">Chair</span>
                  <span className="text-xs font-medium">IDR 300,000</span>
                </div>
              </div>
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
    </div>
  );
};
export default Category;
