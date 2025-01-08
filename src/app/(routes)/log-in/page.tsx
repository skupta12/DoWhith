import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import Logo from "/public/common/logo.png";
import Stars from "/public/common/stars.png";
import LogInImage from "/public/log-in.png";
import Quotes from "/public/home/testimonial/quotes.png";
import Link from "next/link";
import LoginForm from "@/components/common/forms/Login";


const page = () => {
  return (
    <section className="log-in-section lg:pb-[110px]">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 lg:gap-x-16 lg:gap-y-0 gap-y-16 py-8">
          <div className="lg:col-span-6 col-span-12">
            <Link href="/">
              <Image width={172} height={40} src={Logo} alt="The logo icon" />
            </Link>

            <div className="max-w-[484px] mx-auto mt-[100px]">
              <div className="text-center mb-6">
                <div className="flex justify-center items-start gap-x-2 mb-1">
                  <h1 className="sm:text-[42px] text-[32px] font-semibold">
                    Welcome to DoWhith
                  </h1>
                  <Image
                    className="object-contain max-w-full sm:inline-block hidden"
                    width={42}
                    height={43}
                    src={Stars}
                    alt="The stars icon"
                  />
                </div>
                <div>
                  <p className={styles.paragraph100}>
                    Get Started for free. No credit card needed.
                  </p>
                </div>
              </div>
              <LoginForm />
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 relative sm:block hidden">
            <Image
              className="rounded-lg w-full"
              width={620}
              height={848}
              src={LogInImage}
              alt="The log in image"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white p-[30px] rounded-lg">
              <div className="flex flex-col gap-y-5">
                <Image
                  width={47}
                  height={31}
                  src={Quotes}
                  alt="The quotes icon"
                />
                <p className="text-[20px]">
                  Positive experience Rich and Kandi have had a great experience
                  with their finance account. They have found the service to be
                  reliable and easy to use. The customer service has been
                  excellent and they have been able to get all of their
                  questions answered quickly. We highly recommend this service
                </p>
                <div>
                  <h6 className="text-[20px] font-semibold">Rich and Kandi</h6>
                  <p className="text-[20px]">UX Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
