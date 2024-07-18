import Hello from "@/components/hello";
import Brands from "@/components/sections/home/Brands";
import GetControl from "@/components/sections/home/GetControl";
import Hero from "@/components/sections/home/Hero";
import IssueVirtual from "@/components/sections/home/IssueVirtual";
import MoveLine from "@/components/sections/home/MoveLine";
import Seamless from "@/components/sections/home/Seamless";
import Services from "@/components/sections/home/Services";
import SetLimits from "@/components/sections/home/SetLimits";


export default function MainPage() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <MoveLine />
      <GetControl />
      <IssueVirtual />
      <SetLimits />
      <Seamless />
      {/* <Hello/> */}
      {/* <Anim /> */}
    </>
  );
}
