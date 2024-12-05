import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import Image from "next/image";
import MainPostImage from "/public/feature/posts/post-image-1.jpg";
import AuthorsImage from "/public/feature/posts/authors-image-1.png";
import Link from "next/link";
import { blogs } from "@/constants";

const page = () => {
  return (
    <>
      <section
        className={`${styles.routeSectionPadding} relative overflow-hidden`}
      >
        <div className="absolute top-[20%] left-0 right-0 w-[105vw] h-[700px]">
          <Image
            priority
            className="object-cover"
            fill
            quality={85}
            src="https://cdn.prod.website-files.com/65a9f49b837859a8d466af31/65b48cc27db264a75dec9169_glass-abstract-gray.png"
            alt="The details post image"
          />
        </div>
        <MaxWidthWrapper>
          <div className="text-details text-center mb-10">
            <span className={`mb-3 ${styles.blueLabel}`}>Blogs & Insights</span>
            <h1 className={styles.heading100L}>Latest Articles</h1>
          </div>
          <div className="grid grid-cols-12 items-center lg:gap-x-10 sm:p-7 p-3 bg-white rounded-2xl">
            <div className="lg:col-span-7 col-span-12">
              <Image
                className="rounded-lg w-full"
                src={MainPostImage}
                width={578}
                height={400}
                alt="The main post image"
              />
            </div>
            <div className="lg:col-span-5 col-span-12">
              <div className="article-type-wrap">
                <div className="flex sm:flex-row flex-col gap-x-5 lg:mt-0 mt-4">
                  <span className="text-[14px]">Company Announcement</span>
                  <span className="opacity-[50%]">March 19, 2024</span>
                </div>
                <Link
                  href="/post/do-startups-valuations-matter-for-investment-returns"
                  className="hover:underline mt-4 mb-10 block"
                >
                  <h2 className={styles.heading200M}>
                    Do startups valuations matter for investment returns?
                  </h2>
                </Link>
                <div className="flex gap-x-5 items-center">
                  <Image
                    width={60}
                    height={60}
                    src={AuthorsImage}
                    alt="The author's icon"
                  />
                  <div>
                    <h6 className="text-base font-semibold">Mat Mursmark</h6>
                    <p className="text-[14px]">Senior Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className={` bg-neutral-50 ${styles.sectionPaddingV1}`}>
        <MaxWidthWrapper>
          <div className="mb-10">
            <h2 className={styles.heading200L}>Latest Articles</h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {blogs.map(({ id, title, src, url, label }) => (
              <Link
                className="lg:col-span-4 md:col-span-6 col-span-12"
                href={`/post/${url}`}
                key={id}
              >
                <div className="flex flex-col h-full">
                  <Image
                    className="rounded-lg w-full"
                    width={272}
                    height={177}
                    quality={90}
                    src={src}
                    alt={`The post image ${id}`}
                  />
                  <h3
                    className={`mt-4 mb-5 hover:underline ${styles.heading300L}`}
                  >
                    {title}
                  </h3>
                  <span className="mt-auto">{label}</span>
                </div>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default page;
