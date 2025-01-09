"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import GradientBg from "/public/bgs/gradient-bg.png";
import styles from "@/style";
import Navbar from "./Navbar";
import Logo from "/public/common/logo.png";
import { BlackButton, WhiteButton } from "./Buttons";

const Header = () => {

  const [open, setOpen] = useState<boolean>(false);

  const pathName = usePathname();

  const hideHeader = pathName === "/log-in" || pathName === "/sign-up";

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathName]);

  return (
    <>
      {/* Custom gradient */}
      <Image
        className="absolute top-0 left-0 object-cover 
        sm:opacity-[50%] opacity-[30%] -z-[1] w-[1920px] h-[800px]"
        priority
        sizes="100vw"
        quality={1}
        src={GradientBg}
        alt="The background gradient image"
      />
      {!hideHeader && (
        <header className={`${styles.headerStyles} mt-4`}>
          <div className={`${styles.flexBetween} sm:py-4 py-2`}>
            <div className="flex items-center lg:gap-x-14">
              <Link
                className="sm:w-[172px] w-[142px] h-auto"
                href="/"
                onClick={closeMenu}
              >
                <Image src={Logo} alt="The DoWhith logo" />
              </Link>
              <Navbar open={open} setOpen={setOpen} closeMenu={closeMenu} />
            </div>
            <div className="flex items-center gap-6">
              <div className="md:flex hidden items-center gap-3">
                <WhiteButton
                  href="/log-in"
                  type="button"
                  title="Log In"
                  onClick={closeMenu}
                />
                <BlackButton
                  href="/sign-up"
                  type="button"
                  title="Sign Up"
                  onClick={closeMenu}
                />
              </div>

              <div className="burger-menu lg:hidden block">
                <button
                  aria-label="burger menu"
                  onClick={() => setOpen(!open)}
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
      )}
    </>
  );
};

export default Header;
