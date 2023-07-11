type Props = {};
const ShopSection = (props: Props) => {
  return (
    <div>
      <h1 className="font-bold text-4xl flex justify-center items-center my-6">
        BEAUTIFUL FURNITURE
      </h1>

      <div className="border-y-[1px] border-[#222] py-3">
        <ul className="flex flex-row items-center justify-center gap-3">
          <li className="cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Chairs</li>
          <li className="cursor-pointer">Beds</li>
          <li className="cursor-pointer">Desks</li>
          <li className="cursor-pointer">Dining Table</li>
          <li className="cursor-pointer">Sofas</li>
        </ul>
      </div>
    </div>
  );
};
export default ShopSection;
