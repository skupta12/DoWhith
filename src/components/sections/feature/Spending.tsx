import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { spending } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import SpendingImage from "/public/spending-image.jpg";
import ReceiveImage from "/public/receive-image.jpg";

const Spending = () => {
  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <ul className="grid grid-cols-12 gap-7">
          {spending.map((item, i) => (
            <li key={i} className="col-span-4 flex flex-col gap-y-5">
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
          <div className="col-span-12">
            <Image
              className="w-full"
              src={SpendingImage}
              alt="The spending image"
            />
          </div>
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Spending;
