import { BlackButton } from "@/components/Buttons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroImage from "/public/hero.png";
import Bg1 from "/public/hero-bg-1.png";
import GradientBg from "/public/gradient-bg.png";

const Hero = () => {
  return (
    <section className="pt-12 pb-20 relative overflow-hidden">
      <Image quality={100} priority className="object-cover" fill src={Bg1} alt="background image 1"  />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-5 items-center text-center mb-14">
          {/* label */}
          <div className="rounded-full bg-gradient-to-r from-primary-300 to-primary-200 p-[1px]">
            <div className="rounded-full bg-white px-4 py-[6px]">
              <span className="text-[14px] font-medium flex items-center gap-x-3">
                Watch our investment series{" "}
                <span className="bg-gradient-to-r from-primary-300 to-primary-200 
                rounded-full px-[10px] py-[2px]">
                  <ArrowRight color="white" />
                </span>
              </span>
            </div>
          </div>
          <h1 className={`${styles.heading1} max-w-[750px]`}>
            Manage your money efficiently with DoWhith
          </h1>
          <p className={`${styles.paragraph} max-w-[750px]`}>
            Keep your business account and all your finance needs safely
            organized and manage money quickly, easily & efficiently.
          </p>
          <BlackButton
            className="text-[18px] py-[12px]"
            href="/"
            type="button"
            title="Get Early Access"
          /> 
        </div>
        <div className="flex justify-center">
          <Image width={970} height={572} src={HeroImage} alt="hero image"/>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
