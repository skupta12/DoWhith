"use client";

import Image from "next/image";
import Logo from "/public/logo.png";
import { nav } from "@/constants";
import Link from "next/link";
import { BlackButton, WhiteButton } from "./Buttons";
import { useState } from "react";
import styles from "@/style";
import GradientBg from "/public/gradient-bg.png";

const Header = () => {
  const isClicked = false;
  const [open, isOpen] = useState<boolean>(isClicked);

  const handleClick = () => {
    isOpen((prev) => !prev);
  };

  return (
    <>
      {/* custom gradient */}
      <Image
        className="object-cover opacity-50"
        priority
        fill
        src={GradientBg}
        alt="background gradient"
      />
      <header className={`${styles.boxWidth} py-5`}>
        <div
          className="flex justify-between items-center 
      sm:p-4 p-3 bg-non-neutral-200 rounded-md gap-x-4"
        >
          <div className="flex items-center lg:gap-x-14">
            <Link onClick={handleClick} href="/">
              <Image width={172} height={40} src={Logo} alt="DoWhith logo" />
            </Link>

            {/* desktop nav */}
            <nav className="lg:block hidden">
              <ul className="flex items-center gap-x-5">
                {nav.map((item, i) => (
                  <li key={i}>
                    <Link className="text-[18px] font-medium" href={item.href}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* mobile nav */}
            <nav
              className={`lg:hidden flex absolute bg-white rounded-md sm:left-10 left-4 
            sm:right-10 right-4 z-[1] top-0 justify-start items-center duration-500 ease-out
          ${
            !open
              ? "transform -translate-y-full duration-0"
              : "transform translate-y-[40%]"
          }`}
            >
              <ul className="flex w-full flex-col gap-y-4 sm:p-4 p-3">
                {nav.map((item, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => isOpen(false)}
                      className="text-[18px] font-medium"
                      href={item.href}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
                <div className="flex items-center gap-4">
                  <WhiteButton href={"/"} type="button" title="Log In" />
                  <BlackButton href={"/"} type="button" title="Sign Up" />
                </div>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="md:flex hidden items-center gap-x-4">
              <WhiteButton href={"/"} type="button" title="Log In" />
              <BlackButton href={"/"} type="button" title="Sign Up" />
            </div>
            <div className="burger-menu lg:hidden block">
              <button
                aria-label="burger menu"
                onClick={handleClick}
                className="flex flex-col p-3"
              >
                <span className="w-[22px] h-[2px] bg-black"></span>
                <span className="w-[22px] h-[2px] bg-black my-[3px]"></span>
                <span className="w-[22px] h-[2px] bg-black"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
