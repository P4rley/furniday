import Image from "next/image";
import img from "../../app/lamp.jpg";
import Link from "next/link";

type Props = {};
const AboutHome = (props: Props) => {
  return (
    <div className="w-full relative h-screen">
      <div className="px-[10%] md:px-[4rem] h-full flex flex-col justify-center lg:px-[8rem]">
        <h1 className="text-9xl font-bold text-[#222] max-w-[250px]">
          Furniture Within Reach
        </h1>
        <Link href="/about">
          <button className="outline-none border-2 border-white m-2 bg-white text-[#222] px-4 py-2 rounded-3xl active:translate-y-[10px]  hover:border-[#222] transition ease-in-out duration-300">
            About us
          </button>
        </Link>
      </div>

      <Image
        src={img}
        alt="about home background"
        className="w-full absolute -z-10 top-0 right-0 left-0 bottom-0 h-full object-cover"
      />
    </div>
  );
};
export default AboutHome;
