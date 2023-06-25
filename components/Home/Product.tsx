import Image from "next/image";
import img from "../../app/heroImg.jpg";
import Card from "../Card";

type Props = {};
const Product = (props: Props) => {
  return (
    <div className="min-h-screen relative my-[4rem]">
      <div className="px-[10%] md:px-[4rem] lg:px-[8rem]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mb-10">
          Our Top Products
        </h1>

        <div className="flex gap-6 flex-col md:flex-row justify-between w-full">
          <div className="">
            <div className="shadow-lg rounded-md overflow-hidden">
              <Image
                src={img}
                alt="products"
                className="h-[400px] object-cover w-[100%] md:w-[300px] lg:w-[500px] lg:h-[600px]"
              />
              <div className="flex w-full justify-between p-4">
                <span className="text-lg font-medium">Chair</span>
                <span className="text-lg font-medium">IDR 300,000</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-end justify-end gap-4">
              {[...Array(4)].map((el, i) => {
                return <Card key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
