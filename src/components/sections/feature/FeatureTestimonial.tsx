import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";

const FeatureTestimonial = () => {
  return (
    <section
      className={`feature-testimonial-section border-t  ${styles.sectionPadding}`}
    >
      <MaxWidthWrapper>
        <div>
          <div className="feature-text text-center flex flex-col gap-y-6">
            <h2 className={`${styles.heading200V} max-w-[800px] mx-auto`}>
              Turn your spend management into a fast, secure
            </h2>
            <p className={`${styles.paragraph100} max-w-[750px] mx-auto`}>
              Reimburse employee expenses seamlessly, without paperwork.
              Consolidate expense reimbursements alongside all other company
              spending.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeatureTestimonial;
