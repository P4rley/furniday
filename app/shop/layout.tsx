import "@/styles/Navbar.css";

type Props = {
  children: React.ReactNode;
};

const ShopLayout = ({ children }: Props) => {
  return (
    <div className="px-[10%] md:px-[4rem] lg:px-[8rem]">
      <div>{children}</div>
    </div>
  );
};
export default ShopLayout;
