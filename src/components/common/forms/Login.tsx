"use client";

import { loginForm } from "@/constants";
import React, { useState } from "react";
import { SocialButton, SubmitButton } from "../Buttons";
import Link from "next/link";
import GoogleIcon from "/public/common/google-icon.png";
import FacebookIcon from "/public/common/facebook-icon.png";
import { LoginFormSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const LoginForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginFormSchema>> = async (
    data
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
      alert("Passwords cannot be submitted");
      // console.log(data);
      setIsFormSubmitted(true);
      reset();
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginForm.map(({ id, label, name, placeholder, type }) => (
        <div className="flex flex-col mb-6" key={id}>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold block">{label}</label>

            <div>
              {errors[name] ? (
                <span className="text-red-500 text-[14px] block">
                  {errors[name]?.message}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <input
            // autoComplete="off"
            {...register(name)}
            disabled={isSubmitting}
            required
            className="w-full focus:outline-none p-3 border border-gray-300
            rounded-md placeholder:text-[14px]"
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </div>
      ))}
      <SubmitButton
        className={`w-full text-[19px] py-[12px] duration-300 ${
          isSubmitting ? "bg-gray-500" : ""
        }`}
        title={isSubmitting ? "Loading..." : "Sign in"}
      />
      {/* <div className="relative">
      {isFormSubmitted && (
        <div className="text-red-500 text-[14px] absolute top-0 left-0">Disabled</div>
      )}
      </div> */}

      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-t-black/10" />
        </div>
        <div className="relative flex justify-center my-6">
          <span className="px-3 bg-white">Or</span>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <SocialButton
          title="Google"
          src={GoogleIcon.src}
          href="https://google.com"
        />
        <SocialButton
          title="Facebook"
          src={FacebookIcon.src}
          href="https://facebook.com"
        />
      </div>

      <div className="flex items-center justify-center gap-x-1 mt-6">
        <p>Don&apos;t have an account?</p>
        <Link className="text-primary-300" href="/sign-up">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
