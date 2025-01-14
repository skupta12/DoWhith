"use client";

import { signUpForm } from "@/constants";
import React, { useState } from "react";
import { SocialButton, SubmitButton } from "../Buttons";
import GoogleIcon from "/public/common/google-icon.png";
import FacebookIcon from "/public/common/facebook-icon.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterFormSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof RegisterFormSchema>> = async (
    data
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
      alert(`Passwords cannot be submitted`);
      console.log(data);
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
      <div className="grid grid-cols-12 gap-x-4">
        {signUpForm.map(({ id, label, name, placeholder, type }, i) => (
          <div
            className={`${
              i === 0 || i === 1 ? "col-span-6" : "col-span-12"
            } flex flex-col mb-4 relative`}
            key={id}
          >
            <div className="flex justify-between items-center mb-2">
              <label className="font-semibold block">{label}</label>

          
            </div>

            <input
              {...register(name)}
              required
              className="w-full focus:outline-none sm:p-3 p-[11px] border border-gray-300
            rounded-md placeholder:text-[14px]"
              type={type}
              name={name}
              placeholder={placeholder}
            />
               <div className="sm:h-[11px] h-[16px]">
                {errors[name] ? (
                  <span className="text-red-500 text-[14px] block">
                    {errors[name]?.message}
                  </span>
                ) : (
                  ""
                )}
              </div>
          </div>
        ))}
      </div>

      <SubmitButton
        className={`w-full text-[19px] py-[12px] duration-300 ${
          isSubmitting ? "bg-gray-500" : ""
        }`}
        title={isSubmitting ? "Loading..." : "Sign in"}
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
    </form>
  );
};

export default SignUpForm;
