import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Ytransition } from "@/components/common/motion/Transitions";
import { exploreFeatures } from "@/constants";
import styles from "@/style";
import Image from "next/image";

const ExploreFeatures = () => {
  return (
    <section className={`explore-section ${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="text-center lg:mb-20 sm:mb-16 mb-10">
          <Ytransition>
            <span className={`${styles.blueLabel} mb-3`}>
              Features Explored
            </span>
          </Ytransition>
          <Ytransition delay={0.26}>
            <h2 className={styles.heading200L}>
              Explore Our Powerful Features
            </h2>
          </Ytransition>
        </div>
          <div
            className="grid grid-cols-12 gap-y-10 sm:gap-x-12 
        gap-x-0 sm:text-start text-center"
          >
            {exploreFeatures.map((item, i) => (
              <div
                key={i}
                className="lg:col-span-4 sm:col-span-6 
              col-span-12 flex flex-col gap-y-4"
              >
                <Ytransition>

           
                <div className="sm:mx-0 mx-auto">
                  <Image
                    className="mb-3"
                    src={item.icon}
                    alt={item.alt}
                    width={48}
                    height={48}
                  />
                </div>

                <h3 className={styles.heading300M}>{item.title}</h3>
                <p className={styles.paragraph100}>{item.text}</p>
                </Ytransition>
              </div>
            ))}
          </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ExploreFeatures;
