"use client";

import Rating from "@/components/Rating";
import Image from "next/image";
import img from "../../../heroImg.jpg";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useState } from "react";

type Props = {
  params: {
    categoryId: string;
  };
};
const DetailPage = ({ params: { categoryId } }: Props) => {
  const [showSize, setShowSize] = useState<boolean>(false);
  const [size, setSize] = useState<string>("king");
  const [quantity, setQuantity] = useState<number>(0);
  const [wishlist, setWishlist] = useState<boolean>(false);
  const [showFeature, setShowFeature] = useState<boolean>(false);
  const [showDimension, setShowDimension] = useState<boolean>(false);
  const [showShipping, setShowShipping] = useState<boolean>(false);
  const [showDetailProduct, setShowDetailProduct] = useState<boolean>(false);
  const [showDetailDimension, setShowDetailDimension] =
    useState<boolean>(false);
  const [showDetailMaterial, setShowDetailMaterial] = useState<boolean>(false);
  const [showDetailDesigner, setShowDetailDesigner] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-4 w-full">
        <Image
          src={img}
          alt="Product Image"
          className="w-full h-[250px] md:w-[400px] md: md:h-[400px] object-cover lg:w-[500px] xl:w-[800px] xl:h-[500px]"
        />

        <div className="flex flex-col gap-5 flex-1">
          <div className="flex items-center md:justify-between w-full gap-3">
            <div className="flex gap-1">
              <Rating />
            </div>
            <span className="text-xs md:text-xs lg:text-base">
              Item No.1234567
            </span>
          </div>

          <div
            className="border border-[#222] p-2 w-full transition-all ease-in-out duration-300"
            onClick={() => setShowSize(!showSize)}
          >
            <div className="flex justify-between items-center">
              <p>Size</p>
              <div className="flex gap-2 items-center justify-center">
                <p>King</p>
                <button>
                  {showSize ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </button>
              </div>
            </div>

            {showSize ? (
              <div className="p-4 flex justify-between gap-4">
                <button
                  onClick={() => setSize("queen")}
                  className={`border border-[#222] p-1 w-[150px] md:w-full transition-all ease-in-out duration-300 ${
                    size === "queen" ? "bg-[#222] text-white" : "text-[#222]"
                  }`}
                >
                  Queen
                </button>
                <button
                  onClick={() => setSize("king")}
                  className={`border border-[#222] p-1 w-[150px] md:w-full transition-all ease-in-out duration-300 ${
                    size === "king" ? "bg-[#222] text-white" : "text-[#222]"
                  }`}
                >
                  King
                </button>
              </div>
            ) : null}
          </div>

          <div className="flex gap-5">
            <p className="text-2xl font-medium">Quantity: </p>

            <div className="flex gap-3 items-center">
              <button
                onClick={() => setQuantity((prev) => (prev -= 1))}
                disabled={quantity < 1 ? true : false}
                className="disabled:text-gray-400 "
              >
                <BsArrowLeftCircle fontWeight={900} size={24} />
              </button>

              <span className="text-2xl">
                {quantity < 0
                  ? `00`
                  : quantity < 10
                  ? `0${quantity}`
                  : quantity}
              </span>

              <button
                onClick={() => setQuantity((prev) => (prev += 1))}
                className=""
              >
                <BsArrowRightCircle fontWeight={900} size={24} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 bg-[#222] w-full text-white">
              Add to cart
            </button>
            <button onClick={() => setWishlist(!wishlist)}>
              {wishlist ? (
                <AiFillHeart color="red" size={24} />
              ) : (
                <AiOutlineHeart size={24} />
              )}
            </button>
          </div>

          <div className="">
            <div className="border-y border-[#222] p-2 ">
              <div
                className=" flex items-center justify-between"
                onClick={() => setShowFeature(!showFeature)}
              >
                <p>Product Feature</p>
                <button>
                  {showFeature ? (
                    <AiOutlineMinus size={20} color="#222" />
                  ) : (
                    <AiOutlinePlus size={20} color="#222" />
                  )}
                </button>
              </div>

              {showFeature ? (
                <p className="text-[12px] font-light py-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur ipsam.
                </p>
              ) : null}
            </div>

            <div className="border-b border-[#222] p-2 ">
              <div
                className=" flex items-center justify-between"
                onClick={() => setShowDimension(!showDimension)}
              >
                <p>Dimensions</p>
                <button>
                  {showDimension ? (
                    <AiOutlineMinus size={20} color="#222" />
                  ) : (
                    <AiOutlinePlus size={20} color="#222" />
                  )}
                </button>
              </div>

              {showDimension ? (
                <p className="text-[12px] font-light py-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur ipsam.
                </p>
              ) : null}
            </div>

            <div className="border-b border-[#222] p-2 ">
              <div
                className=" flex items-center justify-between"
                onClick={() => setShowShipping(!showShipping)}
              >
                <p>Shipping and Return</p>
                <button>
                  {showShipping ? (
                    <AiOutlineMinus size={20} color="#222" />
                  ) : (
                    <AiOutlinePlus size={20} color="#222" />
                  )}
                </button>
              </div>

              {showShipping ? (
                <p className="text-[12px] font-light py-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur ipsam.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-col">
        <div className="my-5">
          <h1 className="text-3xl mb-2 md:text-6xl ">Galery</h1>

          <Image
            src={img}
            alt="Galery Image"
            className="object-cover w-full h-[300px] my-3"
          />

          <p className="text-sm font-light">
            <strong className="text-base">Lorem, ipsum dolor.</strong> Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis at
            cum maxime expedita adipisci odio maiores vel reprehenderit debitis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            dolores.
          </p>
        </div>

        <div className="my-5">
          <h1 className="text-3xl mb-2 md:text-6xl">Details</h1>

          <div className="border-y border-[#222] p-2 mt-5">
            <div
              className=" flex items-center justify-between"
              onClick={() => setShowDetailProduct(!showDetailProduct)}
            >
              <div className="flex items-start gap-3">
                <span className="text-base font-medium">01</span>
                <p className="text-2xl font-medium">Product Feature</p>
              </div>
              <button>
                {showDetailProduct ? (
                  <AiOutlineMinus size={20} color="#222" fontWeight={500} />
                ) : (
                  <AiOutlinePlus size={20} color="#222" fontWeight={500} />
                )}
              </button>
            </div>

            {showDetailProduct ? (
              <p className="text-[12px] font-light my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ipsam.
              </p>
            ) : null}
          </div>

          <div className="border-b border-[#222] p-2 ">
            <div
              className=" flex items-center justify-between"
              onClick={() => setShowDetailDimension(!showDetailDimension)}
            >
              <div className="flex items-start gap-3">
                <span className="text-base font-medium">02</span>
                <p className="text-2xl font-medium">Dimensions</p>
              </div>
              <button>
                {showDetailDimension ? (
                  <AiOutlineMinus size={20} color="#222" fontWeight={500} />
                ) : (
                  <AiOutlinePlus size={20} color="#222" fontWeight={500} />
                )}
              </button>
            </div>

            {showDetailDimension ? (
              <p className="text-[12px] font-light my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ipsam.
              </p>
            ) : null}
          </div>

          <div className="border-b border-[#222] p-2 ">
            <div
              className=" flex items-center justify-between"
              onClick={() => setShowDetailMaterial(!showDetailMaterial)}
            >
              <div className="flex items-start gap-3">
                <span className="text-base font-medium">03</span>
                <p className="text-2xl font-medium">Materials</p>
              </div>
              <button>
                {showDetailMaterial ? (
                  <AiOutlineMinus size={20} color="#222" fontWeight={500} />
                ) : (
                  <AiOutlinePlus size={20} color="#222" fontWeight={500} />
                )}
              </button>
            </div>

            {showDetailMaterial ? (
              <p className="text-[12px] font-light my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ipsam.
              </p>
            ) : null}
          </div>

          <div className="border-b border-[#222] p-2 ">
            <div
              className=" flex items-center justify-between"
              onClick={() => setShowDetailDesigner(!showDetailDesigner)}
            >
              <div className="flex items-start gap-3">
                <span className="text-base font-medium">04</span>
                <p className="text-2xl font-medium">Designers</p>
              </div>
              <button>
                {showDetailDesigner ? (
                  <AiOutlineMinus size={20} color="#222" fontWeight={500} />
                ) : (
                  <AiOutlinePlus size={20} color="#222" fontWeight={500} />
                )}
              </button>
            </div>

            {showDetailDesigner ? (
              <p className="text-[12px] font-light my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ipsam.
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl md:text-6xl">You might like</h1>

        <div className="my-5 flex flex-wrap items-center gap-4 justify-center">
          {[...Array(4)].map((el, i) => {
            return (
              <div
                key={i}
                className="w-full h-[250px] md:w-[200px] lg:w-[240px] xl:w-[280px] relative group overflow-hidden"
              >
                <div className="z-10 absolute top-0 right-0 left-0 bottom-0 bg-[#22222200]  group-hover:bg-[#22222267] transition-all duration-500 ease-in-out">
                  <p className="z-[11] text-lg font-semibold opacity-0 group-hover:opacity-100 flex justify-end items-end w-full h-full p-5 text-white transition-all duration-500 ease-in-out">
                    Beatiful Chair
                  </p>
                </div>
                <Image
                  src={img}
                  alt="Suggestion"
                  className="w-full h-full object-cover group-hover:scale-125 transition-all ease-in-out duration-700"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
