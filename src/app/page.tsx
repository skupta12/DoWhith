import Brands from "@/components/sections/home/Brands";
import Hero from "@/components/sections/home/Hero";
import HomeFeatures from "@/components/sections/home/HomeFeatures";
import Services from "@/components/sections/home/Services";


export default function MainPage() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <HomeFeatures />
    </>
  );
}
