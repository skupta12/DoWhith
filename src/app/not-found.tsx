import { BlackButton } from "@/components/common/Buttons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Ytransition } from "@/components/common/motion/Transitions";
import styles from "@/style";
import Image from "next/image";

const NotFound = () => {
  return (
    <section
      className={`relative overflow-hidden lg:pt-32 lg:pb-72 pt-32 pb-32`}
    >
      <div className="absolute top-40 left-0 right-0 w-[105vw] h-[700px]">
        <Image
          priority
          className="object-cover"
          fill
          sizes="(min-width: 1360px) 105vw, 1328px"
          quality={90}
          src="https://cdn.prod.website-files.com/65a9f49b837859a8d466af31/65b48cc27db264a75dec9169_glass-abstract-gray.png"
          alt="The not found page background"
        />
      </div>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center text-center justify-center gap-y-5">
          <Ytransition delay={0}>
            <span className={styles.blueLabel}>404 error</span>
          </Ytransition>
          <Ytransition delay={0.04}>
            <h2 className={styles.heading200L}>We&apos;ve lost this page</h2>
          </Ytransition>
          <Ytransition delay={0.08}>
            <p className={styles.paragraph100}>
              The page you are looking for doesn&apos;t exist or has been moved
            </p>
          </Ytransition>
          <Ytransition delay={0.12}>
            <BlackButton
              href="/"
              className="w-full text-[19px] py-[12px]"
              title="Back to home"
            />
          </Ytransition>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default NotFound;
