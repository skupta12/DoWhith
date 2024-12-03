import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { blogs } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <section className={styles.sectionPaddingV1}>
      <MaxWidthWrapper>
        <div>
          <div className="articles-text mb-10">
            <span className={` mb-3 ${styles.blueLabel}`}>
              Blogs & Insights
            </span>
            <h2 className={styles.heading200L}>Latest Articles</h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {blogs.map(({ id, title, src, url, label }) => (
              <Link
                className="lg:col-span-3 md:col-span-6 col-span-12"
                href={`/post/${url}`}
                key={id}
              >
                <div className="flex flex-col h-full">
                  <Image
                    className="rounded-lg w-full"
                    width={272}
                    height={177}
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
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Post;
