import AboutHome from "@/pages/Home/AboutHome";
import Hero from "@/pages/Home/Hero";
import Product from "@/pages/Home/Product";
import ShopByRoom from "@/pages/Home/ShopByRoom";
import Trending from "@/pages/Home/Trending";

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <Trending />
      <ShopByRoom />
      <AboutHome />
    </main>
  );
}
