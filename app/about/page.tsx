import Image from "next/image";
import img from "../heroImg.jpg";
import { motion } from "framer-motion";

type Props = {};
const About = (props: Props) => {
  return (
    <div className="">
      <div className="px-[10%] md:px-[4rem] lg:px-[8rem]">
        <div className="py-10 border-b border-[#222]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center">
            ABOUT FURNIDAY
          </h1>
        </div>
      </div>

      <div className="my-5 relative w-full h-[75vh] lg:h-[74vh] xl:h-[70vh]">
        <div className="absolute top-0 right-0 left-0 bottom-0 h-full w-full bg-slate-800 opacity-30 -z-[2]" />
        <Image
          src={img}
          alt="about hero image"
          className="absolute top-0 -z-10 right-0 left-0 bottom-0 top w-full h-full object-cover"
        />

        <div className="h-full px-[10%] z-20 md:px-[4rem] lg:px-[8rem]">
          <h1 className="text-white drop-shadow-2xl pt-10 text-5xl md:text-7xl flex justify-self-start">
            FURNIDAY
          </h1>
          <p className="text-white absolute font-light lg:text-base drop-shadow-md bottom-24 right-0 md:right-[4rem] lg:right-[8rem] text-xs w-[250px] md:w-[300px] flex justify-self-end items-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quo
            harum nam minus voluptates aperiam facere itaque.
          </p>
        </div>
      </div>

      <div className="my-10 md:pl-[4rem] lg:pl-[8rem]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="px-[10%] md:p-[0]">
            <h1 className="text-2xl font-medium md:text-4xl">Our Vision</h1>
            <p className="font-light text-base lg:text-lg xl:w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at
              ex fuga sed nobis corrupti numquam assumenda voluptatum
              doloremque, totam excepturi, odit modi consequatur ab?
            </p>
          </div>
          <Image
            src={img}
            alt="about hero image"
            className="w-full h-[250px] lg:h-[400px] object-cover"
          />
        </div>
      </div>

      <div className="my-10 md:pr-[4rem] lg:pr-[8rem]">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
          <Image
            src={img}
            alt="about hero image"
            className="w-full h-[250px] lg:h-[400px] object-cover"
          />

          <div className="px-[10%] md:p-[0]">
            <h1 className="text-2xl font-medium md:text-4xl">What We Do</h1>
            <p className="font-light text-base lg:text-lg xl:w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at
              ex fuga sed nobis corrupti numquam assumenda voluptatum
              doloremque, totam excepturi, odit modi consequatur ab?
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 md:pl-[4rem] lg:pl-[8rem]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="px-[10%] md:p-[0]">
            <h1 className="text-2xl font-medium md:text-4xl">Our Brand</h1>
            <p className="font-light text-base lg:text-lg xl:w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at
              ex fuga sed nobis corrupti numquam assumenda voluptatum
              doloremque, totam excepturi, odit modi consequatur ab?
            </p>
          </div>

          <Image
            src={img}
            alt="about hero image"
            className="w-full h-[250px] lg:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
