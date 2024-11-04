import Accordion from "@/components/common/Accordion";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { managementAccordion } from "@/constants";
import styles from "@/style";

const Management = () => {
  return (
    <section className={`bg-primary-100 ${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <div>
        {managementAccordion.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.text}
          initialActive={item.id === 1}
        />
      ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Management;
