import Brands from "@/components/sections/home/Brands";
import GetControl from "@/components/sections/home/GetControl";
import Hero from "@/components/sections/home/Hero";
import IssueVirtual from "@/components/sections/home/IssueVirtual";
import Services from "@/components/sections/home/Services";
import SetLimits from "@/components/sections/home/SetLimits";


export default function MainPage() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <GetControl />
      {/* <IssueVirtual />
      <SetLimits /> */}
      {/* <Anim /> */}
    </>
  );
}
