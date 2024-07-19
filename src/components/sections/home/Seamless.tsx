import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";

const Seamless = () => {
  return (
    <section className={`${styles.sectionPadding} bg-primary-100`}>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-10">
          <div className="text-center">
            <div className="bg-primary-200 text-white font-semibold px-3 py-1 rounded-full inline-block mb-3">
              Approval
            </div>
            <div>
              <h2 className={`${styles.heading2V} text-white`}>
                Seamless integration with your{" "}
                <br className="sm:block hidden" /> accounting tools
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-7">
              <div className="flex flex-col gap-y-4 border rounded-xl p-5 ">
                <h3 className={`${styles.heading3V} text-white opacity-80`}>
                  Connect 10+ Integrations
                </h3>
                <p className={`${styles.paragraph} text-white opacity-70`}>
                  Seamlessly Connect 10+ Platforms with Ease. Simplify your
                  workflow and productivity.
                </p>
              </div>
            </div>
            <div className="col-span-5">
              <div className="flex flex-col gap-y-4 border rounded-xl p-5 ">
                <h3 className={`${styles.heading3V} text-white opacity-80`}>
                  Connect 10+ Integrations
                </h3>
                <p className={`${styles.paragraph} text-white opacity-70`}>
                  Seamlessly Connect 10+ Platforms with Ease. Simplify your
                  workflow and productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Seamless;
