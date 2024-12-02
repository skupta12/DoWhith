import {
  Brands,
  Features,
  Hero,
  LatestArticles,
  Management,
  PhysicalCard,
  SaveTime,
  FeatureSteps,
  Testimonial,
} from "@/components/sections/feature";
import SecondaryCta from "@/components/sections/feature/SecondaryCta";

export default function Feature() {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <Testimonial />
      <SaveTime />
      <Management />
      <FeatureSteps />
      <PhysicalCard />
      <SecondaryCta />
      <LatestArticles />
    </>
  );
}
