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
import SecPostDetailsImage from "/public/feature/posts/secondary-post-image.png";
import { LatestArticles } from "@/components/sections/feature";

const PostDetails = ({ params }: { params: { url: string } }) => {

  const post = blogs?.find((obj) => obj.url === params.url);

  if (!post) return <div>Not Found</div>;

  const { 
    title, 
    src, 
    label,
     author, 
     authorsImage, 
     position, 
     date } = post;

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
          quality={90}
          src="https://cdn.prod.website-files.com/65a9f49b837859a8d466af31/65b48cc27db264a75dec9169_glass-abstract-gray.png"
          alt="The details post image"
        />
      </div>
      <MaxWidthWrapper className="max-w-[990px]">
        <div className="text-details text-center mb-10">
          <span className={`mb-3 ${styles.blueLabel}`}>{label}</span>
          <h1 className={styles.heading100M}>{title}</h1>
        </div>
        <div className="flex justify-between items-center mb-6">
          <Link href="/post">
            <div className="back-button flex items-center gap-x-2">
              <ArrowLeft />
              <button
                className="font-semibold"
                type="button"
                aria-label="The back button"
              >
                Back
              </button>
            </div>
          </Link>

          <div className="media-icons flex items-center sm:gap-x-5 gap-x-2">
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
        <div className="bg-white md:p-8 p-4 rounded-2xl flex flex-col">
          <div>
            <Image
              className="mx-auto w-full rounded-2xl"
              // quality={85}
              width={846}
              height={563}
              src={src}
              alt="The details post image"
            />
          </div>

          <div className="author-block flex md:flex-row flex-col gap-y-4 
          justify-between py-8">
            <div className="flex gap-x-5 items-center">
              <Image
                width={60}
                height={60}
                src={authorsImage}
                alt="The author's icon"
              />
              <div>
                <h6 className="text-base font-semibold">{author}</h6>
                <p className="text-[14px]">{position}</p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <span className="text-[14px]">{label}</span>
              <span className="opacity-[50%]">{date}</span>
            </div>
          </div>

          <div className="post-details-wrapper flex flex-col gap-y-10">
            <div className="post-details-block">
              <h2 className={`${styles.heading200M} mb-9`}>
                Go Beyond Simple Text
              </h2>
              <div className="flex flex-col gap-y-4 mb-10">
                <p className={styles.paragraph100}>
                  Leverage rich multi-media chat features that go beyond simple
                  text messages. This will increase engagement and keep
                  conversations rolling.
                </p>
                <blockquote className="sm:text-[24px] text-[20px] font-medium
                 text-gray-400 relative pl-10">
                  <span className="absolute top-0 left-0 h-full 
                  w-[6px] bg-primary-300" />
                  “Today&apos;s users expect more out of their online chat
                  experiences. Basic text messaging isn&apos;t enough to keep
                  people engaged. Including even just an image is shown to
                  increase the likelihood that a user will respond by 57%.“
                </blockquote>
                <p className={styles.paragraph100}>
                  Give your users the opportunity to share images, gifs, videos,
                  and more. For example, remote learning apps can share
                  courseware with students, or use chat to assign work.
                  Companies that aren&apos;t allowing users to connect with
                  modern chat functionality are missing out on longer session
                  times, higher engagement rates, and ultimately – revenue.
                </p>
                <p className={styles.paragraph100}>
                  There are many different software applications available to
                  assist with task tracking. Some are designed for personal use,
                  while others are intended for businesses and teams. There is
                  no one “best” way to track tasks; the best solution will vary
                  depending on your needs and preferences.
                </p>
              </div>
            </div>
            <div className="post-details-block">
              <h2 className={`${styles.heading200M}`}>
                How To Use Technology for Individual Task Tracking?
              </h2>
              <div className="my-9">
                <Image
                  className="rounded-lg"
                  src={SecPostDetailsImage}
                  alt="The second post image"
                />
              </div>
              <div className="flex flex-col gap-y-4 mb-10">
                <p className={styles.paragraph100}>
                  Real human-to-human conversation is more than an exchange of
                  sentences. Allow users to connect with each other by sharing
                  thoughts, feelings, information, and more.
                </p>
                <ul className="list-inside list-disc">
                  <li className={styles.paragraph100}>
                    Improve overall in-app retention and conversions by
                    supplementing digital conversations with modern chat
                    features like message reactions, message threading, typing
                    indicators, and more.
                  </li>
                  <li className={styles.paragraph100}>
                    These simple ways of communication are easier than writing
                    out full messages and reduce friction in the user
                    experience. This will empower users to engage and connect
                    through more meaningful conversations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="post-details-block">
              <h2 className={`${styles.heading200M}`}>Create Community</h2>
              <div className="flex flex-col gap-y-4 my-10">
                <p className={styles.paragraph100}>
                  Group chats also allow users to congregate around shared
                  interests or goals. This means that people will naturally find
                  others with common interests and develop more meaningful
                  connections. As these connections strengthen so does the
                  stickiness of your app.
                </p>
                <ul className="list-inside list-disc">
                  <li className={styles.paragraph100}>
                    Empower users to connect, regardless of their native
                    language. Compared to audio or video, in-app messaging
                    presents a unique opportunity to use translation tools to
                    cross international barriers.
                  </li>
                  <li className={styles.paragraph100}>
                    Apps with an international user base should allow users to
                    translate messages and communicate in any language. Tools
                    like Video Hype allow users to translate messages
                    instantaneously or on-demand.
                  </li>
                  <li className={styles.paragraph100}>
                    For live events, users can break out into smaller chat
                    groups or share information and resources that supplement
                    the live experience – rather than being a passive
                    participant.
                  </li>
                </ul>
                <p className={styles.paragraph100}>
                  There are many different software applications available to
                  assist with task tracking. Some are designed for personal
                  Video Hype is the most comprehensive real-time communication
                  experience. When paired with industry-leading live video and
                  audio capabilities, users can engage and connect on any level.
                  Build a truly immersive user experience with our web and
                  mobile chat SDKs that work seamlessly with our video, voice,
                  and streaming products. use, while others are intended for
                  businesses and teams. There is no one “best” way to track
                  tasks; the best solution will vary depending on your needs and
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
    <LatestArticles />
    </>
  );
};

export default PostDetails;
