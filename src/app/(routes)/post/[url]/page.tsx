import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { blogs, mediaIcons } from "@/constants";
import styles from "@/style";
import {
  ArrowLeft,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PostDetails = ({ params }: { params: { url: string } }) => {

  const post = blogs?.find((obj) => obj.url === params.url);

  if (!post) return <div>Not Found</div>;

  const { title, src, label } = post;

  return (
    <section className={`${styles.sectionPadding} relative`}>
        <Image
          priority
          className="object-cover"
          fill
          layout="fixed"
          quality={100}
          src="https://cdn.prod.website-files.com/65a9f49b837859a8d466af31/65b48cc27db264a75dec9169_glass-abstract-gray.png"
          alt="The details post image"
        />
      <MaxWidthWrapper className="max-w-[1000px]">
        <div className="text-details text-center mb-10">
          <span className={`mb-3 ${styles.blueLabel}`}>{label}</span>
          <h1 className={styles.heading100M}>{title}</h1>
        </div>
        <div className="flex justify-between">
          <div className="back-button flex items-center gap-x-3">
            <ArrowLeft />
            <button type="button" aria-label="The back button">
              Back
            </button>
          </div>

          <div className="media-icons flex gap-x-5">
            {mediaIcons.map(({ id, href, icon: Icon }) => (
              <Link
                className="p-1 group hover:bg-gradient-to-r from-neutral-100
               to-primary-300 rounded-full"
                href={href}
                key={id}
              >
                <Icon size={20} className="group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg">
          <div className="">
            <Image
              className="mx-auto w-full"
              quality={85}
              width={920}
              height={612}
              src={src}
              alt="The details post image"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PostDetails;
