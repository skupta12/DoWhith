import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import PricingOptions from "./Options";

const Pricing = () => {
  return (
    <section>
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
          <div className="flex flex-col gap-y-5 items-center text-center">
            {/* label */}
            <span className={`mb-0 ${styles.blueLabel}`}>Approval</span>
            <h1 className={`${styles.heading100L} max-w-[750px]`}>
              Transparent Pricing, Tailored to You
            </h1>
            <p className={`${styles.paragraph100} max-w-[750px]`}>
              We offer fully customized pricing for businesses of any size, from
              startups to enterprises.
            </p>
          </div>    
          <PricingOptions />
        </MaxWidthWrapper>
      </section>
    </section>
  );
};

export default Pricing;
