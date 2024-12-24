import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { integrationCalendars, integrationCalendarsSecond, videoConference } from "@/constants";
import styles from "@/style";
import Image from "next/image";

const Features = () => {
  return (
    <section className={`integration-features-section ${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-10">
          <div className="lg:w-[25%]">
            <h6 className="lg:text-[24px] text-[22px] font-semibold">
              Calendars
            </h6>
          </div>

          <div className="grid grid-cols-12 lg:gap-10 gap-6 lg:w-[75%]">
            {integrationCalendars.map(
              ({ id, src, title, text, width, height }) => (
                <div
                  className="lg:col-span-4 md:col-span-6 col-span-12"
                  key={id}
                >
                  <div className="p-[30px] rounded-lg bg-neutral-50 h-full">
                    <Image
                      className="object-contain"
                      width={width}
                      height={height}
                      src={src}
                      alt=""
                    />
                    <h6 className="lg:text-[20px] text-[18px] font-semibold mt-3 mb-1 ">
                      {title}
                    </h6>
                    <p className="text-base">{text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        
        </div>
        <div className="divider w-full bg-slate-100 h-[2px] lg:my-16 my-12"/>

        <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-10">
          <div className="lg:w-[25%]">
            <h6 className="lg:text-[24px] text-[22px] font-semibold">
              Calendars
            </h6>
          </div>

          <div className="grid grid-cols-12 lg:gap-10 gap-6 lg:w-[75%]">
            {integrationCalendarsSecond.map(
              ({ id, src, title, text, width, height }) => (
                <div
                  className="lg:col-span-4 md:col-span-6 col-span-12"
                  key={id}
                >
                  <div className="p-[30px] rounded-lg bg-neutral-50 h-full">
                    <Image
                      className="object-contain"
                      width={width}
                      height={height}
                      src={src}
                      alt=""
                    />
                    <h6 className="lg:text-[20px] text-[18px] font-semibold mt-3 mb-1">
                      {title}
                    </h6>
                    <p className="text-base">{text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        
        </div>

        <div className="divider w-full bg-slate-100 h-[2px] lg:my-16 my-12" />

        <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-10">
          <div className="lg:w-[25%]">
            <h6 className="lg:text-[24px] text-[22px] font-semibold">
              Video Conference
            </h6>
          </div>

          <div className="grid grid-cols-12 lg:gap-10 gap-6 lg:w-[75%]">
            {videoConference.map(
              ({ id, src, title, text, width, height }) => (
                <div
                  className="lg:col-span-4 md:col-span-6 col-span-12"
                  key={id}
                >
                  <div className="p-[30px] rounded-lg bg-neutral-50 h-full">
                    <Image
                      className="object-contain"
                      width={width}
                      height={height}
                      src={src}
                      alt=""
                    />
                    <h6 className="lg:text-[20px] text-[18px] font-semibold mt-3 mb-1">
                      {title}
                    </h6>
                    <p className="text-base">{text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Features;
