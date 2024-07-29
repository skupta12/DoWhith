import { ReactNode } from "react";

// Creating a container

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string; // optional
  children: ReactNode;
}) => {
  return (
    <div
      className={`${className} mx-auto w-full max-w-[1200px] px-4 sm:px-10 relative`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;