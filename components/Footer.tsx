import Link from "next/link";
import Button from "./Button";

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="my-5 py-[2rem] px-[10%] md:px-[4rem] lg:px-[8rem]">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="">
          <p className="font-normal text-lg mb-3">Contacts</p>
          <p className="font-medium text-3xl md:text-5xl lg:text-7xl mb-2">
            (62) 123 456 7890
          </p>
          <p className="font-medium text-3xl md:text-5xl lg:text-7xl">
            furniture@mail.com
          </p>

          <div className="flex gap-3 flex-wrap my-5">
            <Link href="https://www.instagram.com/" target="_blank">
              <Button text="Instagram" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Button text="Whatsapp" />
            </Link>
            <Link href="https://www.twitter.com/" target="_blank">
              <Button text="Twitter" />
            </Link>
          </div>
        </div>

        <div className="md:text-right">
          <p className="font-normal text-lg my-2">Menu</p>

          <ul className="">
            <li className="font-medium text-2xl">
              <Link href="/">Home</Link>
            </li>
            <li className="font-medium text-2xl">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="font-medium text-2xl">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
