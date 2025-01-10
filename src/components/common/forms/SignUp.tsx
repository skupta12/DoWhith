"use client";

import { signUpForm } from "@/constants";
import React from "react";
import { SubmitButton } from "../Buttons";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "/public/common/google-icon.png";
import FacebookIcon from "/public/common/facebook-icon.png";

const SignUpForm = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Passwords cannot be submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-x-4">
        {signUpForm.map(({ id, label, name, placeholder, type }, i) => (
          <div
            className={`${
              i === 0 || i === 1 ? "col-span-6" : "col-span-12"
            } flex flex-col gap-y-2 mb-6`}
            key={id}
          >
            <label className="font-semibold block">{label}</label>
            <input
              required
              className="w-full focus:outline-none p-3 border 
            rounded-md placeholder:text-[14px]"
              type={type}
              name={name}
              placeholder={placeholder}
            />
          </div>
        ))}
      </div>

        <SubmitButton
          className="w-full text-[19px] py-[12px]"
          title="Sign In"
        />
  
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-t-black/10" />
        </div>
        <div className="relative flex justify-center my-6">
          <span className="px-3 bg-white">Or</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <Link href="https://google.com">
          <button
            className="flex gap-x-3 w-full justify-center items-center 
          border focus:outline-none p-3 rounded-md font-semibold"
            type="button"
          >
            <Image
              width={24}
              height={24}
              src={GoogleIcon}
              alt="The google icon"
            />
            Sign up with Google
          </button>
        </Link>
        <Link href="https://facebook.com">
          <button
            className="flex gap-x-3 w-full justify-center items-center 
          border focus:outline-none p-3 rounded-md font-semibold"
            type="button"
          >
            <Image
              width={24}
              height={24}
              src={FacebookIcon}
              alt="The facebook icon"
            />
            Sign up with Facebook
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
