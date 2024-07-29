import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import SeamlessImage2 from "/public/seamless/seamless-image-2.png";
import SeamlessImage1 from "/public/seamless/seamless-image-1.png";
import NeonLine from "/public/neon-line.png";
import SeamlessBg from "/public/seamless/seamless-bg.png";
// import

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
          <div className="grid grid-cols-12 lg:gap-x-7 gap-x-5 lg:gap-y-7 gap-y-10">
            <div
              className="relative lg:col-span-7 col-span-12 overflow-hidden p-[2px] rounded-xl 
            bg-gradient-to-b from-primary-900 to-primary-800"
            >
              <Image className="absolute bottom-0 w-full" src={SeamlessBg} alt="seamless background"/>
              <div className="bg-primary-100 rounded-xl p-[2px] h-full">
                <div className="flex flex-col gap-y-4 rounded-xl p-5 bg-primary-100">
                  <h3 className={`${styles.heading3V} text-white opacity-80`}>
                    Connect 10+ Integrations
                  </h3>
                  <p className={`${styles.paragraph} text-white opacity-70`}>
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
            </div>
            <div className="relative lg:col-span-5 col-span-12 overflow-hidden rounded-xl
            p-[2px] bg-gradient-to-b from-primary-900 to-primary-800">
              <div className="bg-primary-100 rounded-xl h-full">
                <Image
                  className="w-full absolute p-[6px] top-0 left-0"
                  src={NeonLine}
                  alt="neon line"
                />
                <div className="flex flex-col gap-y-4 p-[30px]">
                  <h3 className={`${styles.heading3V} text-white opacity-80`}>
                    Connect 10+ Integrations
                  </h3>
                  <p className={`${styles.paragraph} text-white opacity-70`}>
                    Seamlessly Connect 10+ Platforms with Ease. Simplify your
                    workflow and productivity.
                  </p>
                  <Image
                    className="relative overflow-hidden left-1/2 transform -translate-x-[50%] -bottom-20"
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
