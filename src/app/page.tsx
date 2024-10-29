import {
  Brands,
  GetControl,
  Hero,
  IssueVirtual,
  MoveLine,
  Seamless,
  SetLimits,
  Steps,
  Testimonial,
} from "@/components/sections/home";
import Services from "@/components/sections/home/Services";

export default function HomePage() {
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
      <Steps />
      <Testimonial />
    </>
  );
}
