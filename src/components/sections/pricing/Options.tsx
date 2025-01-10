"use client";

import { BlackButton } from "@/components/common/Buttons";
import { pricingOptions } from "@/constants";
import Image from "next/image";
import WhiteMark from "/public/common/white-mark.png";
import BlueMark from "/public/common/mark.png";
import styles from "@/style";
import { useState } from "react";

const Options = () => {
    
  const [billingType, setBillingType] = useState("yearly");

  const renderPricingOptions = () => {
    return pricingOptions.map(
      ({ id, discount, included, type, yearlyPrice, monthlyPrice }, i) => (
        <div
          className={`col-span-12 md:col-span-4 ${
            i === 1 ? "bg-primary-300" : "bg-white"
          } p-8 rounded-2xl`}
          key={id}
        >
          <div className="flex justify-between items-center text-left">
            <div
              className={`${
                i === 1 ? "text-white" : "text-primary-200"
              } text-[18px] font-semibold`}
            >
              {type}
            </div>
            <div
              className={`px-[6px] py-1 rounded-full ${
                i === 1 ? "text-[#2B6587] bg-[#A3DDFF]" : "text-gray-500"
              }`}
            >
              {i === 0 ? `.` : `${discount}% OFF`}
              
            </div>
          </div>
          <h2
            className={`mt-4 mb-1 ${styles.heading200M} 
                  ${i === 1 ? "text-gray-200" : "text-primary-200"}`}
          >
            {i === 0
              ? "Free"
              : `$ ${billingType === "yearly" ? yearlyPrice : monthlyPrice}`}
            {i !== 0 && (
              <span
                className={`text-[18px] font-normal 
                      ${i === 1 ? "text-gray-200" : "text-gray-500"}`}
              >
                &nbsp;/month
              </span>
            )}
          </h2>
          <p className={i === 1 ? "text-gray-200" : "text-primary-200"}>
            {billingType === "yearly" ? "Yearly Billing" : "Monthly Billing"}
          </p>

          <div
            className={`${i === 1 ? "bg-gray-600" : "bg-gray-200"} 
                  divider w-full h-[1px] bg-gray-200 my-9`}
          />

          <h6
            className={`${
              i === 1 ? "text-white" : "text-primary-200"
            } text-base font-semibold mb-4`}
          >
            What&apos;s included
          </h6>
          <ul className="flex flex-col gap-4 mb-10">
            {included.map(({ id, text }) => (
              <li className="flex items-center gap-2" key={id}>
                <Image
                  width={20}
                  height={20}
                  src={i === 1 ? WhiteMark : BlueMark}
                  alt="The mark icon"
                />
                <p
                  className={`text-base ${
                    i === 1 ? "text-white" : "text-primary-200"
                  }`}
                >
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <div className="overflow-hidden">
            <BlackButton
              className="text-[18px] py-[12px] text-center w-full"
              href="/"
              title="Get Started"
            />
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <div className="my-14 text-center">
        <button
          onClick={() => setBillingType("monthly")}
          className={`py-[10px] px-[32px] rounded-md inline-block font-bold ${
            billingType === "monthly"
              ? "text-white bg-primary-200"
              : "text-primary-200 bg-neutral-50"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingType("yearly")}
          className={`py-[10px] px-[25px] rounded-md inline-block font-bold ${
            billingType === "yearly"
              ? "text-white bg-primary-200"
              : "text-primary-200 bg-neutral-50"
          }`}
        >
          Yearly <span className="text-gray-500">&nbsp;(20% OFF)</span>
        </button>
      </div>
      <div key={billingType} className="grid grid-cols-12 gap-4">
        {renderPricingOptions()}
      </div>
     
    </>
  );
};

export default Options;
