import React from "react";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="border-2 border-[#222] p-2 text-lg md:text-2xl font-medium active:translate-y-[10px] hover:text-white hover:bg-[#222] transition ease-in-out duration-500">
      {text}
    </button>
  );
};

export default Button;
