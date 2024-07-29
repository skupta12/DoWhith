"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import MoveLineImage from "/public/mov-sec/move-lines.png";
import ApprovalIcon from "/public/mov-sec/approval-icon.png";
import BudgetIcon from "/public/mov-sec/budget-icon.png";
import InvoiceIcon from "/public/mov-sec/invoice-icon.png";
import PaymentIcon from "/public/mov-sec/payment-icon.png";
import ReportIcon from "/public/mov-sec/report-icon.png";
import TreasuryIcon from "/public/mov-sec/treasury-icon.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MoveLine = () => {
  
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1.7 1", "10 1"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const reverseTranslateX = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const reverseTranslateY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section className="lg:pb-32 pb-16 lg:block hidden">
      <MaxWidthWrapper>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            ref={ref}
            style={{ opacity: scrollYProgress }}
          >
            <Image src={MoveLineImage} alt="move line image" />
          </motion.div>
          <div className="icon-box absolute left-[57%] top-[39%] transform -translate-x-1/2 z-[10]">
            <motion.div
              className="transition ease-linear duration-75"
              initial={{ translateX: 0, translateY: 0 }}
              ref={ref}
              style={{
                translateX: reverseTranslateX,
                translateY: reverseTranslateY,
              }}
            >
              <div className="bg-white p-2 rounded-lg">
                <Image
                  width={33}
                  height={32}
                  className="text-center mx-auto mb-1"
                  src={ApprovalIcon}
                  alt="approval icon"
                />
                <span className="font-semibold">Approval</span>
              </div>
            </motion.div>
          </div>
          <div className="icon-box absolute left-[60%] top-[39%] transform -translate-x-1/2 z-[5]">
            <motion.div
              className="transition ease-linear duration-75"
              initial={{ translateX: 0, opacity: 0 }}
              ref={ref}
              style={{
                translateX: reverseTranslateX,
                opacity: scrollYProgress,
              }}
            >
              <div className="bg-white p-2 rounded-lg">
                <Image
                  width={33}
                  height={32}
                  className="text-center mx-auto mb-1"
                  src={BudgetIcon}
                  alt="budget icon"
                />
                <span className="font-semibold">Budget</span>
              </div>
            </motion.div>
          </div>
          <div className="icon-box absolute left-[60%] top-[29%] transform -translate-x-1/2 z-[5]">
            <motion.div
              className="transition ease-linear duration-75"
              initial={{ translateX: 0, translateY: 0 }}
              ref={ref}
              style={{
                translateX: reverseTranslateX,
                translateY: translateY,
              }}
            >
              <div className="bg-white p-2 rounded-lg">
                <Image
                  width={33}
                  height={32}
                  className="text-center mx-auto mb-1"
                  src={InvoiceIcon}
                  alt="invoice icon"
                />
                <span className="font-semibold">Invoice</span>
              </div>
            </motion.div>
          </div>
          <div className="icon-box absolute right-[47%] top-[39%] transform -translate-x-1/2 z-[10]">
            <motion.div
              className="transition ease-linear duration-75"
              initial={{ translateX: 0, translateY: 0 }}
              ref={ref}
              style={{
                translateX,
                translateY: reverseTranslateY,
              }}
            >
              <div className="bg-white p-2 rounded-lg">
                <Image
                  width={33}
                  height={32}
                  className="text-center mx-auto mb-1"
                  src={PaymentIcon}
                  alt="payment icon"
                />
                <span className="font-semibold">Payment</span>
              </div>
            </motion.div>
          </div>
          <div className="icon-box absolute right-[50%] top-[29%] transform -translate-x-1/2 z-[5]">
            <motion.div
              className="transition ease-linear duration-75"
              initial={{ translateX: 0, translateY: 0 }}
              ref={ref}
              style={{
                translateX,
                translateY: translateY,
              }}
            >
              <div className="bg-white p-2 rounded-lg">
                <Image
                  width={33}
                  height={32}
                  className="text-center mx-auto mb-1"
                  src={ReportIcon}
                  alt="report icon"
                />
                <span className="font-semibold">Report</span>
              </div>
            </motion.div>
          </div>
          <div className="icon-box absolute right-[50%] top-[39%] transform -translate-x-1/2 z-[5]">
            <motion.div
              className="transition ease-linear duration-75"
              initial={{ translateX: 0, opacity: 0 }}
              ref={ref}
              style={{ opacity: scrollYProgress, translateX }}
            >
              <div className="bg-white p-2 rounded-lg">
                <Image
                  width={33}
                  height={32}
                  className="text-center mx-auto mb-1"
                  src={TreasuryIcon}
                  alt="treasury icon"
                />
                <span className="font-semibold">Treasury</span>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MoveLine;
