"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaChair } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import "@/styles/Navbar.css";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {};
const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const encodedSearchQuery = encodeURI(search);

    if (search) {
      router.push(`${pathname}?search=${encodedSearchQuery}`);
    } else {
      router.push(`${pathname}`);
    }
  }, [search, pathname, router]);

  return (
    <div className="px-[10%] md:px-[4rem] lg:px-[8rem]">
      <div className="flex justify-between items-center border-b-[2px] border-[#222] py-[1rem] lg:py-[2rem]">
        <div className="flex-1 ">
          <h1 className="font-bold text-[24px]">Furniday</h1>
        </div>

        <ul className=" gap-3 hidden md:flex flex-1 md:justify-center">
          <li
            className={`font-semibold text-base relative ${
              pathname === `/` ? "text-[#222] active-link" : "text-[#717171]"
            }  hover:text-[#222] transition duration-300 ease-in-out`}
          >
            <Link href="/">Home</Link>
          </li>

          {["Shop", "About"].map((link, i) => {
            return (
              <li
                key={i}
                className={`font-semibold text-base ${
                  pathname?.split("/").includes(link.toLowerCase())
                    ? "text-[#222]  active-link"
                    : "text-[#717171]"
                }  hover:text-[#222] relative transition duration-300 ease-in-out`}
              >
                <Link href={`/${link.toLowerCase()}`}>{link}</Link>
              </li>
            );
          })}
        </ul>

        <div className="gap-3 items-center justify-end hidden md:flex md:flex-1">
          <label
            htmlFor="search"
            className={`flex flex-row items-center border-2 border-[#222] justify-center gap-2 px-2 overflow-hidden relative ${
              showInput ? "w-[220px] h-[40px]" : "h-[40px] w-[40px]"
            } rounded-full transition-all ease-in-out duration-300`}
          >
            <input
              id="search"
              type="text"
              placeholder="Search"
              className={`outline-none border-none pr-4 ${
                showInput ? "block" : "hidden"
              }`}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {showInput ? (
              <IoMdClose
                fontSize={20}
                color={"#222"}
                className="cursor-pointer absolute right-[10px]"
                onClick={() => {
                  setSearch("");
                  setShowInput(false);
                }}
              />
            ) : (
              <FaSearch
                fontSize={14}
                color={"#222"}
                className="cursor-pointer absolute right-[10px]"
                onClick={() => setShowInput(true)}
              />
            )}
          </label>

          <div className="w-[2px] rounded-lg h-[30px] bg-[#222]" />

          <div className="flex items-center gap-2">
            <FaChair fontSize={18} color={"#222"} className="cursor-pointer" />
            <span className="text-[#222] text-sm font-normal">0</span>
          </div>
        </div>

        <div className="md:hidden z-20">
          <div
            className="w-[50px] fixed top-[12px] right-[10%] h-[50px] bg-[#222] rounded-full flex items-center justify-center "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <MdClose color="#fff" fontSize={28} />
            ) : (
              <HiMenuAlt1 color="#fff" fontSize={28} />
            )}
          </div>
        </div>
      </div>

      <div
        className={`w-full z-10 fixed top-0 left-0 right-0 bottom-0 h-screen  bg-[#8f8f8f] ${
          open
            ? "translate-x-0 transition ease-in-out duration-500"
            : "translate-x-[100%] transition ease-in-out duration-500 delay-200"
        }`}
      ></div>

      <div
        className={`w-full z-10 fixed top-0 left-0 right-0 bottom-0 h-screen  bg-[#222] ${
          open
            ? "translate-x-0 transition ease-out duration-500 delay-200"
            : "translate-x-[100%] transition ease-out duration-500"
        } `}
      >
        <h1 className="text-white">Hello</h1>
      </div>
    </div>
  );
};
export default Navbar;
