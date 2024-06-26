import Navbar from "@/components/navbar";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
export default function Notification() {
  const scrollRef = useRef(null);
  const [notification, setnotification] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
  return (
    <>
      <Navbar />
      <section className="pt-[51.08px] max-sm:py-[30px] max-md:px-[40px] max-sm:px-[20px] px-[60px] pb-[123px]">
        <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
          Notifications
        </h1>
        <div className="flex max-md:flex-col max-md:relative gap-[20px]">
          <div className="w-[762px] max-xl:w-[50%] max-md:w-full h-[567px] rounded-[5px] bg-[white] pt-[0px] pl-[41px] max-sm:px-[20px] pr-[102.28pxpx]">
            <div
              ref={scrollRef}
              className="h-[505px] max-xl:w-[90%] max-sm:w-full max-xl:overflow-x-hidden overflow-y-scroll w-[618.72px] mt-[31px]"
            >
              <div>
                {" "}
                <h1 className="text-[16px] leading-[20.8px] mb-[16px]">
                  14 April 2024
                </h1>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize max-xl:truncate text-[20px] leading-[26px]">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
              </div>
              <div className="mt-[31px]">
                <h1 className="text-[16px] leading-[20.8px] mb-[16px]">
                  15 April 2024
                </h1>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
              </div>
              <div className="mt-[31px]">
                <h1 className="text-[16px] leading-[20.8px] mb-[16px]">
                  Yesterday
                </h1>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
              </div>
              <div className="mt-[31px] pb-[80px] max-sm:pb-[20px]">
                <h1 className="text-[16px] leading-[20.8px] mb-[16px]">
                  Today
                </h1>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
                <div
                  onClick={() => setnotification(true)}
                  className="py-[10px] h-[75px] w-[618.72px] max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                    Justo est urna pellentesque commodo quis eget.
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    04:30PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          {notification && (
            <div className="h-[561px] max-sm:p-[20px] max-xl:w-[50%] max-md:w-full max-md:absolute w-[calc(100%-782px)] bg-[white] rounded-[5px] mt-[6px] pt-[38.5px] pl-[23.5px] pr-[43.5px]">
              <h1 className="capitalize max-hamburger:w-[90%] text-[20px] leading-[26px] font-semibold">
                Justo est urna pellentesque commodo quis eget.
              </h1>
              <div className="mt-[20.16px] max-hamburger:mb-[10px] flex gap-[29.43px] mb-[45.08px]">
                <p className="text-[14px] leading-[18.2px] opacity-60">
                  04:30PM
                </p>
                <p className="text-[14px] leading-[18.2px] opacity-60">
                  12th April 2024
                </p>
              </div>
              <p className="text-base max-hamburger:mb-[20px] mb-[36.61px]">
                Justo odio a at sed quisque tempus mattis nulla quis.
                Suspendisse odio donec hendrerit eget. Urna cum eu in aliquet
                libero non viverra molestie. Dolor morbi maecenas elit nascetur
                aliquet. Magna consequat risus neque mauris. Porta imperdiet vel
                augue risus in. Hendrerit tempor libero iaculis mauris rutrum
                justo interdum semper. Arcu etiam ullamcorper.
              </p>
              <button className="h-[43px] max-sm:w-full w-[134px] bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                Join in zoom{" "}
              </button>{" "}
              <span
                onClick={() => setnotification(false)}
                className="hidden max-md:block"
              >
                <Image
                  src="/Vector (2).svg"
                  className="absolute max-md:right-[40px] max-sm:right-[20px] right-[50.33px] cursor-pointer top-[37.29px]"
                  width={23.35}
                  height={23.35}
                />{" "}
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
