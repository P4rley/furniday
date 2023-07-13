"use client";

import { motion } from "framer-motion";
import "@/styles/Navbar.css";

type Props = {
  children: React.ReactNode;
};

const ShopLayout = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="px-[10%] md:px-[4rem] lg:px-[8rem]"
    >
      <div>{children}</div>
    </motion.div>
  );
};
export default ShopLayout;
