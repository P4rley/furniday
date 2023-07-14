import Image from "next/image";
import img from "../../app/lamp.jpg";
import Link from "next/link";

type Props = {};
const AboutHome = (props: Props) => {
  return (
    <div className="w-full relative h-screen">
      <div className="px-[10%] justify-center flex flex-col h-full md:px-[4rem] lg:px-[8rem]">
        <h1 className="text-6xl md:text-9xl font-bold text-[#222] max-w-[250px]">
          Furniture Within Reach
        </h1>
        <Link href="/about">
          <button className="outline-none border-2 border-white m-2 bg-white text-[#222] px-4 py-2 rounded-3xl active:translate-y-[10px]  hover:border-[#222] transition ease-in-out duration-300">
            About us
          </button>
        </Link>
      </div>

      <Image
        src={"https://utfs.io/f/51df6010-637c-4f2a-a985-ff33037eeef3_lamp.jpg"}
        width={0}
        height={0}
        sizes="100vw"
        alt="about home background"
        className="w-full absolute -z-10 top-0 right-0 left-0 bottom-0 h-full object-cover"
        priority
      />
    </div>
  );
};
export default AboutHome;
