import Button from "../Button";
import Card from "../Card";

type Props = {};
const Trending = (props: Props) => {
  return (
    <div className="relative my-4">
      <div className="px-[10%] md:px-[4rem] lg:px-[8rem]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mb-10">Trending now</h1>
      </div>
      <div className="relative flex gap-10 overflow-x-hidden">
        <div className="py-12 mx-4 flex gap-10  animate-marquee">
          {[...Array(5)].map((el, i) => {
            return <Card key={i} />;
          })}
        </div>

        <div className="absolute mx-4 left-10 flex gap-10 top-0 py-12 animate-marquee2">
          {[...Array(5)].map((el, i) => {
            return <Card key={i} />;
          })}
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <Button text="SEE ALL" />
      </div>
    </div>
  );
};
export default Trending;
