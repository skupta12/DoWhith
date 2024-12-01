import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import SeamlessImage2 from "/public/seamless/seamless-image-2.png";
import SeamlessImage1 from "/public/seamless/seamless-image-1.png";
import NeonLine from "/public/neon-line.png";
import SeamlessBg from "/public/seamless/seamless-bg.png";

const Seamless = () => {
  return (
    <section
      className={`seamless-section ${styles.sectionPadding} bg-primary-100`}
    >
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-12">
          <div className="text-center">
            <span className={`mb-3 ${styles.blueLabel}`}>Approval</span>
            <div>
              <h2 className={`${styles.heading200V} text-white`}>
                Seamless integration with your{" "}
                <br className="sm:block hidden" /> accounting tools
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 lg:gap-x-7 gap-x-5 lg:gap-y-7 gap-y-10">
            <div
              className="relative lg:col-span-7 col-span-12 p-[2px] rounded-xl 
            bg-gradient-to-b from-non-neutral-400 to-non-neutral-300 overflow-hidden"
            >
              <Image
                className="absolute bottom-0 left-0 w-full"
                src={SeamlessBg}
                alt="seamless background"
              />
              <div className="rounded-xl bg-primary-100 p-8 h-full overflow-hidden">
                <h3
                  className={`${styles.heading300V} text-white opacity-80 mb-4`}
                >
                  Connect 10+ Integrations
                </h3>
                <p className={`${styles.paragraph100V} text-white opacity-70`}>
                  Seamlessly Connect 10+ Platforms with Ease. Simplify your
                  workflow and productivity.
                </p>
                <Image
                  className="relative left-1/2 transform -translate-x-[50%] -bottom-14"
                  src={SeamlessImage1}
                  alt="seamless-image 1"
                />
              </div>
            </div>
            <div
              className="relative lg:col-span-5 col-span-12 overflow-hidden rounded-xl
            p-[2px] bg-gradient-to-b from-non-neutral-400 to-non-neutral-300"
            >
              <div className="bg-primary-100 rounded-2xl h-full">
                <Image
                  className="w-full absolute p-[6px] top-0 left-0"
                  src={NeonLine}
                  alt="The neon line"
                />
                <div className="p-8">
                  <h3
                    className={`${styles.heading300V} text-white opacity-80 mb-4`}
                  >
                    Connect 10+ Integrations
                  </h3>
                  <p
                    className={`${styles.paragraph100V} text-white opacity-70`}
                  >
                    Seamlessly Connect 10+ Platforms with Ease. Simplify your
                    workflow and productivity.
                  </p>
                  <Image
                    className="relative overflow-hidden left-1/2 transform -translate-x-[50%] -bottom-24"
                    src={SeamlessImage2}
                    alt="seamless image 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Seamless;
