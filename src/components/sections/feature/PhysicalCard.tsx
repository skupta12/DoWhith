import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import PhysicalCardImage from "/public/physical-card-image.png";

const PhysicalCard = () => {
  return (
    <section className={styles.sectionPaddingV1}>
      <MaxWidthWrapper>
        <div className="text-center mb-20">
          <div className={`mb-3 ${styles.blueLabel}`}>Expense Card</div>
          <h2 className={`${styles.heading200V} max-w-[800px] mx-auto`}>
            Issue virtual & physical cards with built-in rules
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-7 relative overflow-hidden">
            <Image
              width={582}
              height={480}
              src={PhysicalCardImage}
              alt="The physical card"
            />
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 text-center bg-neutral-50 p-6 rounded-xl">
                <div className={`${styles.blueLabel} mb-3`}>Trusted user</div>
                <h3 className="lg:text-[58px] text-[42px] font-semibold mb-3">9.4k</h3>
                <p className={`text-base text-primary-100`}>Lorem ipsum dolor sit amet. Aut autem maxime et consequuntur</p>
              </div>
              <div className="col-span-6 text-center bg-neutral-50 p-6 rounded-xl">
                <div className={`${styles.blueLabel} mb-3`}>Rating</div>
                <h3 className="lg:text-[58px] text-[42px] font-semibold mb-3 ">9.4k</h3>
                <p className={`text-base text-primary-100`}>Lorem ipsum dolor sit amet. Aut autem maxime et consequuntur</p>
              </div>
              <div className="col-span-12 text-center bg-neutral-50 p-6 rounded-xl"> <div className={`${styles.blueLabel} mb-3`}>Fund</div>
                <h3 className="lg:text-[58px] text-[42px] font-semibold mb-3 ">9.4k</h3>
                <p className={`text-base text-primary-100`}>Lorem ipsum dolor sit amet. Aut autem maxime et consequuntur</p></div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PhysicalCard;
