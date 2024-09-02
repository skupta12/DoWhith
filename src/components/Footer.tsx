import styles from "@/style";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import { BlackButton } from "./Buttons";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { footerLinks } from "@/data/placeholder-data";

const Footer = () => {
  return (
    <footer className="lg:py-24 py-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-5">
            <div className="flex flex-col gap-y-5">
              <div>
                <Image width={172} height={40} src={Logo} alt="DoWhith logo" />
              </div>
              <div className="text-[18px] font-medium">
                Join for free finance tips!
              </div>
              <form className="flex gap-x-4" action="#">
                <input
                  className="outline-none border py-[8px] px-[12px] text-[15px]"
                  type="text"
                  name="email"
                  placeholder="Enter your e-mail"
                />
                <BlackButton className="h-full" type="submit" title="Sign up" />
              </form>
              <div className="media-icons flex gap-x-3">
                <Link href="/">
                  <Facebook />
                </Link>
                <Link href="/">
                  <Twitter />
                </Link>
                <Link href="/">
                  <Linkedin />
                </Link>
                <Link href="/">
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-12 gap-3">
              {footerLinks.map((link, i) => (
                <div className="col-span-4" key={i}>
                  <h6 className="text-[20px] font-semibold">{link.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
