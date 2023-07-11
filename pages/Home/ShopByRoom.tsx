import { FiArrowUpRight } from "react-icons/fi";
import img from "../../app/heroImg.jpg";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Living Room",
  },
  {
    id: 2,
    name: "Bedroom",
  },
  {
    id: 3,
    name: "Home Office",
  },
  {
    id: 4,
    name: "Dining Room",
  },
  {
    id: 5,
    name: "Kitchen Room",
  },
  {
    id: 6,
    name: "Home Office Furniture",
  },
];

type Props = {};
const ShopByRoom = (props: Props) => {
  return (
    <div className="my-[4rem]">
      <div className="pl-[10%] pr-[10%] md:pl-[4rem] md:pr-0 lg:pl-[8rem]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mb-10">Shop By Room</h1>

        <div className="flex gap-20 flex-col md:flex-row justify-between w-full">
          <div className="w-full">
            <div className="w-[100%] h-[2px] bg-[#222] rounded-lg" />

            <div className="mt-5">
              {products.map((product) => {
                return (
                  <div className="group" key={product.id}>
                    <div className="flex justify-between items-center py-5 px-2  hover:px-5 transition-all ease-in-out duration-300">
                      <div className="flex">
                        <div className="mr-8 text-xs group-hover:text-sm lg:text-2xl font-medium lg:group-hover:text-3xl transition-all ease-in-out duration-400">
                          {product.id < 10 ? `0${product.id}` : product.id}
                        </div>
                        <div className="text-xs group-hover:text-sm lg:text-2xl font-medium lg:group-hover:text-3xl transition-all ease-in-out duration-400">
                          {product.name}
                        </div>
                      </div>
                      <FiArrowUpRight
                        className="text-xs group-hover:text-sm lg:text-2xl font-medium lg:group-hover:text-3xl transition-all ease-in-out duration-400"
                        fontSize={24}
                        color="#222"
                      />
                    </div>
                    <div className="w-[100%] h-[1px] bg-[#acacac] rounded-lg" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <Image
              src={img}
              alt="products"
              className="w-full md:w-[350px] rounded-sm lg:w-full md:h-[360px] lg:h-[460px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopByRoom;
