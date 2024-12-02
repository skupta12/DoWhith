import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import PhysicalCardImage from "/public/physical-card-image.png";
import PhysicalBgImage from "/public/home-features/bg-feature-1.png";
import PaymentReceivedImage from "/public/payment-received.png";
import { physicalCards } from "@/constants";

const PhysicalCard = () => {
  return (
    <section className={`physicalcard-section ${styles.sectionPaddingV1}`}>
      <MaxWidthWrapper>
        <div className="text-center lg:mb-20 sm:mb-16 mb-10">
          <span className={`mb-3 ${styles.blueLabel}`}>Expense Card</span>
          <h2 className={`${styles.heading200V} max-w-[800px] mx-auto`}>
            Issue virtual & physical cards with built-in rules
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-7">
          <div className="lg:col-span-7 col-span-12 relative overflow-hidden rounded-xl bg-neutral-50">
            <Image
              className="absolute bottom-0 left-0 z-[10]"
              width={582}
              height={480}
              quality={90}
              src={PhysicalCardImage}
              alt="The physical card"
            />
            <Image
              className="lg:absolute block bottom-0 left-0 z-[5] w-full"
              width={549}
              quality={90}
              height={550}
              src={PhysicalBgImage}
              alt="The Physical background image"
            />
            <Image
              className="absolute sm:bottom-8 bottom-4 sm:right-8 right-4 z-[15]"
              width={180}
              height={121}
              quality={90}
              src={PaymentReceivedImage}
              alt="The payment received image"
            />
          </div>
          <div className="lg:col-span-5 col-span-12">
            <div className="grid grid-cols-12 gap-4">
              {physicalCards.map(({ id, label, text, value }) => (
                <div
                  key={id}
                  className={`bg-neutral-50 text-center p-6 rounded-xl ${
                    id === 3 ? "col-span-12" : "sm:col-span-6 col-span-12"
                  }`}
                >
                  <span className={`${styles.blueLabel} mb-3`}>{label}</span>
                  <h3 className="lg:text-[58px] text-[42px] font-semibold mb-3">
                    {value}
                  </h3>
                  <p
                    className={`text-base text-primary-100 sm:max-w-[350px] mx-auto`}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PhysicalCard;
