import { useRef, useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AccordionProps } from "@/types";
import styles from "@/style";

const Accordion = ({
  title,
  content,
  isActive,
  onToggle,
  color,
  bgColor,
  style,
}: AccordionProps) => {
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
    <div
      onClick={() => (!isActive && onToggle ? onToggle() : null)}
      className="cursor-pointer"
      style={style}
    >
      <div
        className={`border border-white/10 rounded-lg px-6 py-[22px]`}
        style={{ backgroundColor: bgColor }}
      >
        <div className={`outline-none ${styles.flexBetween}`}>
          <span
            className={`font-semibold lg:text-[24px] text-[20px]`}
            style={{ color: color }}
          >
            {title}
          </span>
          <span
            className={`transform transition-transform duration-500 ${
              isActive ? "rotate-[180deg]" : ""
            }`}
          >
            {isActive ? <Minus color={color} /> : <Plus color={color} />}
          </span>
        </div>
        <div
          ref={contentSpace}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-max-height duration-500 ease-in-out"
        >
          <p className={`text-base mt-3`} style={{ color: color }}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
