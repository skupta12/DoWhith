import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { spending } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import SpendingImage from "/public/spending-image.jpg";
import ReceiveImage from "/public/receive.png";

const Spending = () => {
  return (
    <section className={`spending-section ${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <ul className="grid grid-cols-12 gap-6">
          {spending.map((item, i) => (
            <li
              key={i}
              className={`${
                i === 2 ? "col-span-12" : "sm:col-span-6"
              } lg:col-span-4 col-span-12 flex flex-col gap-y-5`}
            >
              <span
                className="w-[40px] h-[40px] bg-primary-300 rounded-full overflow-hidden 
              flex justify-center font-semibold text-[20px] items-center text-white"
              >
                {item.id}
              </span>
              <h3 className={styles.heading300V}>{item.title}</h3>
              <p className={styles.paragraph100}>{item.text}</p>
            </li>
          ))}
          <div className="col-span-12 relative">
            <div>
              <Image
                quality={90}
                className="w-full sm:h-full h-[200px] object-cover rounded-lg"
                src={SpendingImage}
                alt="The spending image"
              />
            </div>

            <div
              className="absolute md:bottom-10 bottom-6 md:right-10 
            right-6 md:w-auto md:h-auto w-[200px] h-[65px]"
            >
              <Image src={ReceiveImage} alt="The receive image" />
            </div>
          </div>
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Spending;
