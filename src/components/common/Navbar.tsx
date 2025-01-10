"use client";

import Link from "next/link";
import { nav } from "@/constants";
import { BlackButton, WhiteButton } from "./Buttons";
import { NavbarProps } from "@/lib/definitions";

const Navbar = ({ open, setOpen, closeMenu }: NavbarProps) => {
  return (
    <>
    
      {/* Desktop nav */}
      <nav className="lg:block hidden">
        <ul className="flex items-center gap-x-7">
          {nav.map((item, i) => (
            <li key={i}>
              <Link
                className="text-[18px] font-medium"
                href={item.href}
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      <nav
        className={`lg:hidden flex absolute bg-white h-[580px] rounded-md left-0 
        right-0 z-[1] p-4 top-0 justify-start ease-out
        ${
          !open
            ? "transform -translate-y-[103%] duration-0"
            : "transform translate-y-[12%] duration-[500ms]"
        }`}
      >
        <ul className="flex w-full flex-col gap-y-6">
          {nav.map((item, i) => (
            <li key={i}>
              <Link
                className="text-[18px] font-medium"
                href={item.href}
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            </li>
          ))}
          <div className="md:hidden flex items-center gap-3">
            <WhiteButton
              href="/log-in"
              title="Log In"
              onClick={closeMenu}
            />
            <BlackButton
              href="/sign-up"
              title="Sign Up"
              onClick={closeMenu}
            />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
