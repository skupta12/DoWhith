import { inter } from "@/app/fonts";
import { BlackButton } from "@/components/common/Buttons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Ytransition } from "@/components/common/motion/Transitions";
import { steps } from "@/constants";
import styles from "@/style";


const Steps = () => {
  return (
    <section
      className={`steps-section ${styles.spotlightPaddingDown} bg-primary-100 overflow-hidden`}
    >
      <MaxWidthWrapper
        className={`${styles.spotlightPaddingUp} border-t border-white/10`}
      >
        <div className="effects">
          <div
            className="white-line absolute -top-[1px] left-1/2 
          transform -translate-x-1/2 w-48 h-[1px]"
          />
          <div
            className="spotlight absolute w-52 h-24 bg-primary-300 -top-20 left-1/2 
          transform -translate-x-1/2 blur-xl opacity-35 rounded-full"
          />
        </div>
        <Ytransition>
          <div className="grid grid-cols-12 lg:gap-x-14 gap-y-10">
            <div className="lg:col-span-6 col-span-12">
              <div className="text mb-7">
                <span className={`mb-3 ${styles.blueLabel}`}>Approval</span>
                <h2 className={`${styles.heading200L} text-white`}>
                  Three steps to smarter spending
                </h2>
              </div>
              <div className="overflow-hidden">
                <BlackButton
                  className="text-[18px] py-[12px] border border-white/10"
                  href="/log-in"
                  title="Get Early Access"
                />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 flex flex-col lg:gap-y-14 gap-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-x-10 text-white">
                  <div
                    className={`relative font-medium rounded-[50%] 
                    w-[24px] h-[24px] p-8 border border-non-neutral-300 inline-flex 
                    justify-center items-center ${inter.className}`}
                  >
                    <div className="relative">
                      <span
                        className="text-[32px] font-semibold text-transparent bg-clip-text 
                 bg-gradient-to-b from-primary-300 to-neutral-100"
                      >
                        {step.id}
                      </span>
                      {i !== steps.length - 1 && (
                        <span
                          className="absolute lg:block hidden w-[1px] h-[50px] left-1/2 
                      top-[160%] bg-non-neutral-300 transform translate-x-[-50%]"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className={`${styles.heading300M} text-white mb-3`}>
                      {step.title}
                    </h3>
                    <p className={`${styles.paragraph100White} opacity-75`}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Steps;
