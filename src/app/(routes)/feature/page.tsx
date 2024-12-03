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
  SecondaryCta
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
      <FeatureSteps />
      <PhysicalCard />
      <SecondaryCta />
      <LatestArticles />
    </>
  );
}
