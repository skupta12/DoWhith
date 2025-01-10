"use client";

import { loginForm } from "@/constants";
import React, { useState } from "react";
import { SubmitButton } from "../Buttons";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "/public/common/google-icon.png";
import FacebookIcon from "/public/common/facebook-icon.png";

const LoginForm = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Passwords cannot be submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      {loginForm.map(({ id, label, name, placeholder, type }) => (
        <div className="flex flex-col gap-y-2 mb-6" key={id}>
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
      <SubmitButton
        className={`w-full text-[19px] py-[12px]`}
        title="Sign in"
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
        <div className="flex items-center justify-center gap-x-1 mt-3">
          <p>Don&apos;t have an account?</p>
          <Link className="text-primary-300" href="/sign-up">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
