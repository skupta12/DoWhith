import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { services } from "@/data/placeholder-data";
import styles from "@/style";
import Image from "next/image";

const Services = () => {
  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-4 text-center">
            <h2
              className={`${styles.heading2V} max-w-[850px] mx-auto`}
            >
              Make faster & smarter spending decisions
            </h2>
            <p className={`${styles.paragraph} max-w-[750px] mx-auto`}>
              Unit simplifies compliance, bank partnerships, and technical
              integration so you can build, launch, and grow faster.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {services.map((item, i) => (
              <div key={i} className={`lg:col-span-4 md:col-span-6 col-span-12 p-5 
              bg-primary-600 h-full rounded-2xl`}>
                <div className="mb-5 hover:scale-105 duration-200">
                  <Image
                    quality={90}
                    className="aspect-[2/2] sm:w-[180px] w-[130px] sm:h-[200px] h-[150px] object-contain"
                    width={180}
                    height={200}
                    src={item.src}
                    alt={`${item.alt} ${item.id}`}
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h3 className={styles.heading3}>{item.title}</h3>
                  <p className={styles.paragraph}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
