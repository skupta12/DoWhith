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
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-7 border">ghggbgbgb</div>
            <div className="col-span-5 border">vffvfvvfvf</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Seamless;
