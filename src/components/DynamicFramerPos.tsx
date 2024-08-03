import { ReactNode } from "react";


const DynamicFramerPos = ({ x, y, children }: { x: string; y: string; children: ReactNode }) => {
  return (
    <div>{children}</div>
  )
}

export default DynamicFramerPos