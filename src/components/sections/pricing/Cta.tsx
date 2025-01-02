import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Image from "next/image";
import CtaImage from "/public/pricing/pricing-cta.png";
import { BlackButton } from "@/components/common/Buttons";

const Cta = () => {
  return (
    <section className="bg-primary-100">
      <MaxWidthWrapper>
        <div className="flex md:flex-row flex-col gap-6 justify-between items-center border border-white/10 p-10 rounded-2xl">
          <div className="flex md:flex-row flex-col items-center gap-7">
            <Image
              width={135}
              height={153}
              src={CtaImage}
              alt="The pricing cta image"
            />
            <div className="cta-text text-center md:text-left flex flex-col gap-y-3">
              <div className="lg:text-[32px] md:text-[28px] text-[26px] font-semibold text-white">
                Startup Discount?
              </div>
              <p className="text-white">
                We offer discounts for startups. Apply for more details.
              </p>
            </div>
          </div>
          <div
            className="overflow-hidden w-max rounded-[10px] p-[2px] 
            bg-gradient-to-r from-neutral-100 to-primary-300"
          >
            <BlackButton
              className="text-[20px] py-[12px] rounded-[10px]"
              title="Contact Us"
              type="button"
              href="/"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cta;
