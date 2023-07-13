"use client";

import Image from "next/image";
import img from "../heroImg.jpg";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { shopLinks } from "@/public/data";

type Props = {};
const Shop = (props: Props) => {
  const [expand, setExpand] = useState<number>(16);
  const pathname = usePathname();

  return (
    <div className="my-10">
      <div>
        <h1 className="font-bold text-4xl flex text-center justify-center items-center my-6">
          BEAUTIFUL FURNITURE
        </h1>

        <div className="border-y-[1px] border-[#222] py-3">
          <ul className="flex flex-row items-center flex-wrap text-center justify-center gap-5">
            <li
              className={`relative ${
                pathname === `/shop`
                  ? "text-[#222] active-link"
                  : "text-[#717171]"
              }  hover:text-[#222] transition duration-300 ease-in-out`}
            >
              <Link href="/shop">New Arrival</Link>
            </li>
            {shopLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    pathname?.split("/").includes(link.pathname)
                      ? "text-[#222] active-link"
                      : "text-[#717171]"
                  } hover:text-[#222] relative transition duration-300 ease-in-out`}
                >
                  <Link href={`/shop/${link.pathname}`}>{link.category}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-5 mt-10">
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
