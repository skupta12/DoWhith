import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import SeamlessImageF from "/public/seamless/seamless-image-2.png";
import SeamlessImageS from "/public/seamless/seamless-image-1.png";

const Seamless = () => {
  return (
    <section className={`${styles.sectionPadding} bg-primary-100`}>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-10">
          <div className="text-center">
            <div className={`mb-3 ${styles.blueLabel}`}>Approval</div>
            <div>
              <h2 className={`${styles.heading2V} text-white`}>
                Seamless integration with your{" "}
                <br className="sm:block hidden" /> accounting tools
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-7 lg:gap-y-7 gap-y-10">
            <div className="lg:col-span-7 col-span-12 overflow-hidden rounded-xl bg-primary-400 p-[2px]">
              <div className="flex flex-col gap-y-4 rounded-xl p-5 bg-primary-100 ">
                <h3 className={`${styles.heading3V} text-white opacity-80`}>
                  Connect 10+ Integrations
                </h3>
                <p className={`${styles.paragraph} text-white opacity-70`}>
                  Seamlessly Connect 10+ Platforms with Ease. Simplify your
                  workflow and productivity.
                </p>
                <Image
                  className="relative -bottom-16 lg:h-[330px] object-contain"
                  src={SeamlessImageS}
                  alt="seamless-image 1"
                />
              </div>
            </div>
            <div className="lg:col-span-5 col-span-12 overflow-hidden rounded-xl bg-primary-400 p-[2px]">
              <div className="flex flex-col gap-y-4 p-5 rounded-xl bg-primary-100">
                <h3 className={`${styles.heading3V} text-white opacity-80`}>
                  Connect 10+ Integrations
                </h3>
                <p className={`${styles.paragraph} text-white opacity-70`}>
                  Seamlessly Connect 10+ Platforms with Ease. Simplify your
                  workflow and productivity.
                </p>
                <Image
                  className="relative -bottom-16 lg:h-[330px] object-contain"
                  src={SeamlessImageF}
                  alt="seamless image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Seamless;
