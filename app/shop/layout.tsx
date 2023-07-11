"use client";

import ShopSection from "@/pages/Shop/ShopSection";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "@/styles/Navbar.css";

type Props = {
  children: React.ReactNode;
};

const links = [
  {
    id: 2,
    pathname: "chair",
    category: "Chairs",
  },

  {
    id: 3,
    pathname: "bed",
    category: "Beds",
  },
  {
    id: 4,
    pathname: "desk",
    category: "Desks",
  },
  {
    id: 5,
    pathname: "dining-table",
    category: "Dining Table",
  },
  {
    id: 6,
    pathname: "sofa",
    category: "Sofas",
  },
];

const ShopLayout = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <div className="px-[10%] md:px-[4rem] lg:px-[8rem]">
      <div>
        <h1 className="font-bold text-4xl flex justify-center items-center my-6">
          BEAUTIFUL FURNITURE
        </h1>

        <div className="border-y-[1px] border-[#222] py-3">
          <ul className="flex flex-row items-center justify-center gap-5">
            <li
              className={`relative ${
                pathname === `/shop`
                  ? "text-[#222] active-link"
                  : "text-[#717171]"
              }  hover:text-[#222] transition duration-300 ease-in-out`}
            >
              <Link href="/shop">New Arrival</Link>
            </li>
            {links.map((link) => {
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
      <div>{children}</div>
    </div>
  );
};
export default ShopLayout;
