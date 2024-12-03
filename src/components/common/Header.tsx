"use client";

import Image from "next/image";
import Logo from "/public/common/logo.png";
import { nav } from "@/constants";
import Link from "next/link";
import { BlackButton, WhiteButton } from "./Buttons";
import { useState } from "react";
import styles from "@/style";
import GradientBg from "/public/bgs/gradient-bg.png";

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
        className="absolute top-0 left-0 object-cover opacity-[75%] -z-[1]"
        priority
        fill
        src={GradientBg}
        alt="background gradient"
      />
      <header className={`${styles.headerStyles} mt-4`}>
        <div
          className={`${styles.flexBetween} sm:py-4 py-2`}
        >
          <div className="flex items-center lg:gap-x-14">
            <Link className="sm:w-[172px] w-[142px] h-auto" onClick={() => isOpen(false)} href="/">
              <Image src={Logo} alt="DoWhith logo" />
            </Link>

            {/* desktop nav */}
            <nav className="lg:block hidden">
              <ul className="flex items-center gap-x-6">
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
              className={`lg:hidden flex absolute bg-white h-[580px] rounded-md left-0 
             right-0 z-[1] p-4 top-0 justify-start ease-out
          ${
            !open
              ? "transform -translate-y-[103%] duration-0"
              : "transform translate-y-[15%] duration-[550ms]"
          }`}
            >
              <ul className="flex w-full flex-col gap-y-4">
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
            <div className="md:flex hidden items-center gap-x-3">
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
