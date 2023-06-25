"use client";

import Hero from "@/components/Home/Hero";
import Product from "@/components/Home/Product";
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
    </motion.main>
  );
}
