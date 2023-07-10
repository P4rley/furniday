"use client";

import AboutHome from "@/components/Home/AboutHome";
import Hero from "@/components/Home/Hero";
import Product from "@/components/Home/Product";
import ShopByRoom from "@/components/Home/ShopByRoom";
import Trending from "@/components/Home/Trending";
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
