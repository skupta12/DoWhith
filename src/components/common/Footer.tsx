import Link from "next/link";
import Image from "next/image";
import Logo from "/public/common/logo.png";
import { BlackButton } from "./Buttons";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { footerLinks } from "@/constants";
import { Ytransition } from "./motion/Transitions";

const Footer = () => {
  return (
    <footer className="lg:py-24 py-16">
      <MaxWidthWrapper>
        <Ytransition>
          <div className="grid grid-cols-12 gap-x-5 lg:gap-y-5 gap-y-10">
            <div className="lg:col-span-5 col-span-12">
              <div className="flex flex-col gap-y-5">
                <div>
                  <Image
                    width={172}
                    height={40}
                    src={Logo}
                    alt="DoWhith logo"
                  />
                </div>
                <div className="text-[18px] font-medium">
                  Join for free finance tips!
                </div>
                <form className="flex" action="#">
                  <input
                    className="outline-none rounded-md border py-[8px] px-[12px] 
                  text-[15px] w-full lg:max-w-[200px] max-w-[150px]"
                    type="text"
                    name="email"
                    placeholder="Enter your e-mail"
                  />
                  <BlackButton
                    className="h-full"
                    title="Sign up"
                    href="/sign-up"
                  />
                </form>
                <div className="media-icons flex gap-x-3">
                  <Link aria-label="Facebook icon" href="/">
                    <Facebook name="" />
                  </Link>
                  <Link aria-label="Twitter icon" href="/">
                    <Twitter />
                  </Link>
                  <Link aria-label="Linkedin icon" href="/">
                    <Linkedin />
                  </Link>
                  <Link aria-label="Instagram icon" href="/">
                    <Instagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <div className="grid grid-cols-12 gap-4">
                {footerLinks.map((link, i) => (
                  <div
                    className={`md:col-span-4 col-span-6 ${
                      i === 2 ? "col-span-12" : ""
                    }`}
                    key={i}
                  >
                    <div className="flex flex-col gap-y-5">
                      <h6 className="text-[20px] font-semibold mb-3">
                        {link.title}
                      </h6>
                      {link.links.map((item, i) => (
                        <ul key={i}>
                          <li className="text-[18px] font-medium flex gap-3">
                            <Link
                              className="hover:opacity-70 duration-300"
                              href={item.href}
                            >
                              {item.link}
                            </Link>
                            {item.link === "Careers" && (
                              <div
                                className="bg-gradient-to-r from-neutral-100
                             to-primary-300 text-white px-4 py-[0.5px] rounded-full"
                              >
                                Hiring
                              </div>
                            )}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
