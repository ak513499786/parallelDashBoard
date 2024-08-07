import Navbar from "../components/navbar";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
export default function Notification() {
  const [notification, setnotification] = useState(false);
  return (
    <>
      <Navbar />
      <section className="pt-[51.08px] max-sm:py-[30px] max-md:px-[40px] max-sm:px-[20px] px-[60px] pb-[123px]">
        {!notification && (
          <>
            <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
              Notifications
            </h1>
            <div className="w-full max-xl:w-[50%] max-md:w-full h-[567px] rounded-[5px] bg-[white] pt-[0px] pl-[37px] max-sm:px-[20px] pr-[61px]">
              <div className="h-[505px] max-xl:w-[90%] max-sm:w-full max-xl:overflow-x-hidden overflow-y-scroll w-full mt-[31px]">
                <div className="mt-[37px]">
                  <h1 className="text-[16px] leading-[20.8px] pb-[16px] border-b-[1px]">
                    Today
                  </h1>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px]">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        04:30PM
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px]">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        04:30PM
                      </p>
                    </div>
                    <div
                      onClick={() => setnotification(true)}
                      className="border-[1px] w-[131px] h-[29px] text-[14px] border-black py-[5px] px-[10px] rounded-[4px] cursor-pointer opacity-1"
                    >
                      Join with Meet
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px]">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        04:30PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-[31px]">
                  <h1 className="text-[16px] leading-[20.8px] mb-[16px]">
                    Older Notifications
                  </h1>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                  <div className="py-[10px] flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
                    <div className="flex gap-[24px] items-center">
                      <div className="w-[645.83px] flex gap-[37px] items-center">
                        <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px] opacity-0 cursor-arrow">
                          New
                        </div>
                        <h1 className="capitalize text-[20px] leading-[26px] max-xl:truncate">
                          Justo est urna pellentesque commodo quis eget.
                        </h1>
                      </div>
                      <p className="text-[14px] leading-[18.2px] opacity-60">
                        13th July
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] absolute right-[60px] mt-[20px]">
              <div className="w-[32px] h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
              <div className="flex gap-[8px]">
                <p className="w-[32px] text-[17.23px] cursor-pointer bg-[#31E39E] leading-[16px] h-[32px] flex justify-center items-center text-black border-[#000]">
                  1
                </p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  2
                </p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  3
                </p>
                <p className="w-[25px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer"></p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  42
                </p>
              </div>
              <div className="w-[32px] rotate-180 h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
            </div>
          </>
        )}
        {notification && (
          <>
            <Image
              src="back.svg"
              className="mb-[28.02px] cursor-pointer"
              onClick={() => setnotification(false)}
              width={44.97}
              height={44.97}
            />
            <div className="max-sm:p-[20px] w-full bg-[white] rounded-[5px] pt-[48.5px] pl-[50px] pb-[136px] pr-[43.5px]">
              <h1 className="capitalize text-[31px] leading-[37px]">
                Guest talk: Interview Preparation
              </h1>
              <div className="mt-[16px] max-hamburger:mb-[10px] flex gap-[29.43px] mb-[42.08px]">
                <p className="text-[14px] leading-[18.2px] opacity-60">
                  04:30PM
                </p>
                <p className="text-[14px] leading-[18.2px] opacity-60">
                  12th April 2024
                </p>
              </div>
              <p className="text-base max-hamburger:mb-[20px] mb-[42px] w-[808px]">
                Justo odio a at sed quisque tempus mattis nulla quis.
                Suspendisse odio donec hendrerit eget. Urna cum eu in aliquet
                libero non viverra molestie. Dolor morbi maecenas elit nascetur
                aliquet. Magna consequat risus neque mauris. Porta imperdiet vel
                augue risus in. Hendrerit tempor libero iaculis mauris rutrum
                justo interdum semper. Arcu etiam ullamcorper.
              </p>
              <button className="h-[43px] max-sm:w-full w-[134px] bg-[#30E29D] rounded-[6px] text-base font-semibold">
                Join In Meet{" "}
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
          </>
        )}
      </section>
    </>
  );
}
