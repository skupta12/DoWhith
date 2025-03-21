import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import CtaImage from "/public/integration/integration-cta.png";
import Image from "next/image";
import { BlackButton } from "@/components/common/Buttons";
import BgCtaImage from "/public/integration/integration-bg-cta.png";
import { Ytransition } from "@/components/common/motion/Transitions";

const IntegrationCta = () => {
  return (
    <section className={`integration-cta-section ${styles.sectionPaddingV1}`}>
      <MaxWidthWrapper>
        <Ytransition>
          <div
            className="bg-primary-100 grid grid-cols-12 gap-6 lg:px-20 sm:px-10 
        px-6 sm:py-10 py-8 items-center rounded-2xl"
          >
            <div className="cta-text md:col-span-6 col-span-12 lg:pr-14">
              <h2
                className={`text-white mb-[23px] text-[20px] ${styles.heading200L}`}
              >
                Contact our award winning team
              </h2>

              <div
                className="overflow-hidden w-max rounded-[10px] p-[2px] 
            bg-gradient-to-r from-neutral-100 to-primary-300"
              >
                <BlackButton
                  className="text-[20px] py-[12px] rounded-[10px]"
                  title="Request Integration"
                  href="/log-in"
                />
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 justify-self-end relative">
              <div>
                <Image
                  className="mx-auto"
                  width={675}
                  height={509}
                  src={BgCtaImage}
                  alt="The background of CTA image"
                />
              </div>
              <div className="absolute top-0 left-0">
                <Image
                  width={528}
                  height={387}
                  src={CtaImage}
                  alt="The CTA image"
                />
              </div>
            </div>
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default IntegrationCta;
