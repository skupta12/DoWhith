"use client"; 

import { useRef, useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

const Accordion = ({
  title,
  content,
  initialActive = false,
  className,
}: {
  title: string;
  content: string;
  initialActive?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState<boolean>(initialActive);
  const [height, setHeight] = useState<string>("0px");
  const [rotate, setRotate] = useState<string>("");

  const contentSpace = useRef<null>(null);

  useEffect(() => {
    //@ts-ignore
    setHeight(active ? `${contentSpace.current.scrollHeight}px` : "0px");
  }, [active]);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    setRotate(active ? "transform duration-300" : "transform duration-300 rotate-[90deg]");
  }

  return (
    <div className={`flex flex-col border my-7 py-6 px-4 ${className}`}>
      <button
        className="flex items-center justify-between outline-none"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-x-6">
          <div className="lg:text-[24px] text-[20px] text-white font-semibold">
            {title}
          </div>
        </div>

        <div className={`accordion-icon ml-3 ${rotate}`}>
          {active ? (
            <Minus color="white" className="rotate-90" />
          ) : (
            <Plus color="white" />
          )}
        </div>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-300 ease-out"
      >
        <p className={`text-white text-base`}>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
