import Image from "next/image";
import img from "../app/heroImg.jpg";

type Props = {};
const Card = (props: Props) => {
  return (
    <div className="shadow-lg h-[200px] w-full md:w-[150px] lg:w-[250px] lg:h-[250px] rounded-md overflow-hidden">
      <Image
        src={img}
        alt="products"
        className="h-[150px] lg:h-[200px] w-full object-cover"
      />
      <div className="flex w-full justify-between p-4">
        <span className="text-xs font-medium">Chair</span>
        <span className="text-xs font-medium">IDR 300,000</span>
      </div>
    </div>
  );
};
export default Card;
