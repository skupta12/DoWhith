import { useRef, useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AccordionProps } from "@/types";
import styles from "@/style";

const Accordion = ({ title, content, isActive, onToggle }: AccordionProps) => {

  const contentSpace = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(
    isActive ? `${contentSpace.current?.scrollHeight}px` : "0px"
  );

  useEffect(() => {
    if (contentSpace.current) {
      setHeight(isActive ? `${contentSpace.current.scrollHeight}px` : "0px");
    }
  }, [isActive]);

  return (
    <div onClick={() => !isActive ? onToggle() : null} className="mb-6 cursor-pointer">
      <div className="border border-white/10 bg-primary-200 rounded-lg px-4 py-[22px]">
        <div className={`outline-none ${styles.flexBetween}`}>
          <span className="text-white font-semibold lg:text-[24px] text-[20px]">
            {title}
          </span>
          <span
            className={`transform transition-transform duration-500 ${
              isActive ? "rotate-[180deg]" : ""
            }`}
          >
            {isActive ? <Minus color="white" /> : <Plus color="white" />}
          </span>
        </div>
        <div
          ref={contentSpace}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-max-height duration-500 ease-in-out"
        >
          <p className="text-white text-base mt-3">{content}</p>
        </div>
        </div>
    </div>
  );
};

export default Accordion;
