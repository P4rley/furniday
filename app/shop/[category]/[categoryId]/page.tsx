"use client";

import Rating from "@/components/Rating";
import Image from "next/image";
import img from "../../../heroImg.jpg";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineHeart,
  AiFillHeart,
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

  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="">
        <Image src={img} alt="Product Image" className="w-full h-[250px]" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="flex gap-1">
            <Rating />
          </div>
          <span>Item No.1234567</span>
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
                className={`border border-[#222] p-1 w-[150px] transition-all ease-in-out duration-300 ${
                  size === "queen" ? "bg-[#222] text-white" : "text-[#222]"
                }`}
              >
                Queen
              </button>
              <button
                onClick={() => setSize("king")}
                className={`border border-[#222] p-1 w-[150px] transition-all ease-in-out duration-300 ${
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
              {quantity < 0 ? `00` : quantity < 10 ? `0${quantity}` : quantity}
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
      </div>
    </div>
  );
};
export default DetailPage;
