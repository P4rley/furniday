"use client";

import AboutHome from "@/pages/Home/AboutHome";
import Hero from "@/pages/Home/Hero";
import Product from "@/pages/Home/Product";
import ShopByRoom from "@/pages/Home/ShopByRoom";
import Trending from "@/pages/Home/Trending";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Hero />
      <Product />
      <Trending />
      <ShopByRoom />
      <AboutHome />
    </motion.main>
  );
}
