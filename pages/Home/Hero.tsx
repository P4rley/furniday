import Button from "@/components/Button";
import Image from "next/image";
import heroImg from "../../app/heroImg.jpg";

type Props = {};
const Hero = (props: Props) => {
  return (
    <div className="h-[90vh]">
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
        className="w-full h-[75%] object-center object-cover"
      />
    </div>
  );
};
export default Hero;
