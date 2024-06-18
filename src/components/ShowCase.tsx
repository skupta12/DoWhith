import styles from "@/style";
import Image from "next/image";

const ShowCase = ({
  label,
  title,
  text,
  mainSrc,
  bgSrc,
  extraSrc,
  reverseImage,
}: {
  label?: string;
  title?: string;
  text?: string;
  mainSrc: string;
  bgSrc: string;
  extraSrc: string;
  reverseImage?: boolean;
}) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <div className="relative">
          <Image
            className="rounded-2xl bg-gray-100"
            width={568}
            height={524}
            quality={100}
            src={bgSrc}
            alt="background image"
          />
          <Image
            quality={100}
            className="absolute bottom-0 left-0"
            width={472}
            height={524}
            src={mainSrc}
            alt="background image"
          />
          <Image
            className="absolute bottom-5 left-10"
            width={304}
            height={147}
            src={extraSrc}
            alt="background image"
          />
        </div>
      </div>
      <div className="col-span-6 lg:pl-32">
        <div className="bg-primary-200 text-white font-semibold px-3 py-1 rounded-full inline-block mb-3">{label}</div>
        <h2 className="lg:text-[58px] md:text-[48px] text-[36px] leading-[1.2] font-semibold mb-3">
          {title}
        </h2>
        <p className={styles.paragraph}>{text}</p>
        <button>button</button>
      </div>
    </div>
  );
};

export default ShowCase;
