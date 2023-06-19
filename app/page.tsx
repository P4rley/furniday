"use client";

import Button from "@/components/Button";
import Image from "next/image";
import heroImg from "./heroImg.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className={"h-[70vh]"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="px-[10%] md:px-[4rem] lg:px-[8rem]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mb-5 py-7 border-b-2 border-[#222]">
          FURNITURE FOR YOUR DAY.
        </h1>

        <div className="w-full flex items-center justify-between mb-5">
          <Button text="Get Started" />

          <p className="text-[10px] md:text-xs w-[120px] md:w-[200px] font-light text-[#222]">
            We deliver the best furniture to make you feel comfortable.
          </p>
        </div>
      </div>
      <Image
        src={heroImg}
        alt="Hero Image"
        className="w-full h-full object-center object-cover"
      />
    </motion.main>
  );
}
