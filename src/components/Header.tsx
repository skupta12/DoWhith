import Image from "next/image";
import Logo from "/public/logo.png";
import { nav } from "@/data/placeholder-data";
import Link from "next/link";
import { BlackButton, WhiteButton } from "./Buttons";

const Header = () => {
  return (
    <header className="max-w-[1380px] mx-auto py-5">
      <div
        className="flex justify-between items-center 
      p-4 bg-header rounded-md"
      >
        <div className="flex items-center gap-x-14">
          <div className="logo">
            <Image width={172} height={40} src={Logo} alt="DoWhith logo" />
          </div>
          <nav>
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
        </div>
        <div className="flex items-center gap-x-4">
          <WhiteButton 
            href={"/"} 
            type="button" 
            title={"Log In"} />
          <BlackButton
            className={""}
            href={"/"}
            type="button"
            title={"Sign Up"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
