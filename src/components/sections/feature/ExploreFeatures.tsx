import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { exploreFeatures } from "@/constants";
import styles from "@/style";
import Image from "next/image";

const ExploreFeatures = () => {
  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <div className="text-center mb-20">
          <div className={`${styles.blueLabel} mb-3`}>Features Explored</div>
          <h2 className={styles.heading200V}>Explore Our Powerful Features</h2>
        </div>
        <div className="grid grid-cols-12 gap-y-14 sm:gap-x-12 gap-x-0 sm:text-start text-center">
          {exploreFeatures.map((item, i) => (
            <div
              key={i}
              className="lg:col-span-4 sm:col-span-6 col-span-12 flex flex-col gap-y-4"
            >
              <div className="sm:mx-0 mx-auto">
                <Image className="mb-3" src={item.icon} alt={item.alt} width={48} height={48} />
              </div>
             
              <h3 className={styles.heading300V}>{item.title}</h3>
              <p className={styles.paragraph100}>{item.text}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ExploreFeatures;
