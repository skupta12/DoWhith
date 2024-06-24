import Anim from "@/components/sections/home/Anim";
import Brands from "@/components/sections/home/Brands";
import GetControl from "@/components/sections/home/GetControl";
import Hero from "@/components/sections/home/Hero";
import IssueVirtual from "@/components/sections/home/IssueVirtual";
import Services from "@/components/sections/home/Services";


export default function MainPage() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <GetControl />
      <IssueVirtual />
      {/* <Anim /> */}
    </>
  );
}
