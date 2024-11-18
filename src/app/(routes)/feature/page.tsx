import {
  Brands,
  Features,
  Hero,
  Management,
  PhysicalCard,
  SaveTime,
  Spending,
  Testimonial,
} from "@/components/sections/feature";

export default function Feature() {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <Testimonial />
      <SaveTime />
      <Management />
      <Spending />
      <PhysicalCard />
    </>
  );
}
