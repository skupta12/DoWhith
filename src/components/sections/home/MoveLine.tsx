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
import { motion, useScroll, useTransform } from "framer-motion"

const MoveLine = () => {
  return (
    <section className="lg:pb-32 pb-16 lg:block hidden">
      <MaxWidthWrapper>
        <div className="relative">
        <motion.div    >
            <Image src={MoveLineImage} alt="" />
          </motion.div>
          <div className="icon-box absolute left-[57%] top-[39%] transform -translate-x-1/2 z-[10]">
            <div className="bg-white p-2 rounded-lg">
              <Image className="text-center mx-auto mb-1" src={ApprovalIcon} alt="approval icon" />
              <span className="font-semibold">Approval</span>
            </div>
          </div>
          <div className="icon-box absolute left-[60%] top-[29%] transform -translate-x-1/2 z-[5]">
            <div className="bg-white p-2 rounded-lg">
              <Image className="text-center mx-auto mb-1" src={BudgetIcon} alt="budget icon" />
              <span className="font-semibold">Budget</span>
            </div>
          </div>
          <div className="icon-box absolute left-[60%] top-[29%] transform -translate-x-1/2 z-[5]">
            <div className="bg-white p-2 rounded-lg">
              <Image className="text-center mx-auto mb-1" src={InvoiceIcon} alt="invoice icon" />
              <span className="font-semibold">Invoice</span>
            </div>
          </div>
          <div className="icon-box absolute right-[47%] top-[39%] transform -translate-x-1/2 z-[10]">
            <div className="bg-white p-2 rounded-lg">
              <Image className="text-center mx-auto mb-1" src={PaymentIcon} alt="payment icon" />
              <span className="font-semibold">Payment</span>
            </div>
          </div>
          <div className="icon-box absolute right-[50%] top-[29%] transform -translate-x-1/2 z-[5]">
            <div className="bg-white p-2 rounded-lg">
              <Image className="text-center mx-auto mb-1" src={ReportIcon} alt="report icon" />
              <span className="font-semibold">Report</span>
            </div>
          </div>
          <div className="icon-box absolute right-[50%] top-[29%] transform -translate-x-1/2 z-[5]">
            <div className="bg-white p-2 rounded-lg">
              <Image className="text-center mx-auto mb-1" src={TreasuryIcon} alt="treasury icon" />
              <span className="font-semibold">Treasury</span>
            </div>
          </div>  
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MoveLine;
