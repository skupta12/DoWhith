import { BlackButton } from "@/components/common/Buttons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroImage from "/public/home/hero.png";
import { YStransition } from "@/components/common/motion/Transitions";

const Hero = () => {
  return (
    <section
      className={`lg:pt-16 lg:pb-28 pt-32 md:pb-20 pb-14 relative overflow-hidden`}
    >
      <Image
        priority
        className="object-cover"
        fill
        sizes="(min-width: 2380px) 100vw, (min-width: 1180px) calc(10.25vw + 2118px), 
          (min-width: 500px) calc(101.52vw + 1061px), (min-width: 360px) calc(43.33vw + 1397px), 
          calc(110vw + 1307px)"
        src="https://cdn.prod.website-files.com/65a9f49b837859a8d466af31/65e93ae394b1b15990661894_g.png"
        alt="The main background image"
      />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-5 items-center text-center mb-14">
          {/* label */}
          <YStransition y={60} delay={0}>
            <div
              className="rounded-full bg-gradient-to-r 
          from-neutral-100 to-primary-300 p-[1px]"
            >
              <div className="rounded-full bg-white px-4 py-[6px]">
                <span
                  className={`text-[14px] font-medium ${styles.flexItems} gap-x-3`}
                >
                  Watch our investment series{" "}
                  <span
                    className="bg-gradient-to-r from-primary-300 to-neutral-100 
                rounded-full px-[10px] py-[2px]"
                  >
                    <ArrowRight color="white" />
                  </span>
                </span>
              </div>
            </div>
          </YStransition>
          <YStransition y={60} delay={0.05}>
            <h1 className={`${styles.heading100L} max-w-[750px]`}>
              Manage your money efficiently with DoWhith
            </h1>
          </YStransition>
          <YStransition y={60} delay={0.10}>
            <p className={`${styles.paragraph100} max-w-[750px]`}>
              Keep your business account and all your finance needs safely
              organized and manage money quickly, easily & efficiently.
            </p>
          </YStransition>
          <YStransition y={60} delay={0.20}>
            <BlackButton
              className="text-[18px] py-[12px]"
              href="/"
              type="button"
              title="Get Early Access"
            />
          </YStransition>
        </div>
        <YStransition y={60} delay={0.20}>
          <div className="flex justify-center">
            <Image
              loading="eager"
              width={970}
              height={572}
              src={HeroImage}
              alt="The hero image"
            />
          </div>
        </YStransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
