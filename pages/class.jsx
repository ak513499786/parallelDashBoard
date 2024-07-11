import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import style from "../styles/style.module.css";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="px-[60px] max-md:px-[40px] max-sm:px-[20px] max-hamburger:flex-col pb-[31px] pt-[42px] flex gap-[20px]">
        <div className="w-[58.61%] max-hamburger:w-full">
          <section className="pt-[27.96px] pb-[28px] pl-[25.1px] max-sm:p-[15px] pr-[27.46px] bg-white">
            <h1 className="text-[20px] leading-[26px] font-bold">
              Continue Learning
            </h1>
            <div className="pl-[3.9px] max-sm:pt-[20px] max-md:flex-col max-xl:flex-col max-hamburger:flex-row pt-[33.04px] flex gap-[19px]">
              <div className="w-[44.855%] max-md:w-full max-xl:w-full max-hamburger:w-[44.855%] h-[209px] bg-[#F7F7F7]"></div>
              <div className="flex w-[51.362%] gap-[22px] max-xl:w-full max-hamburger:w-[51.362%] max-md:w-full flex-col">
                <div className="flex gap-[11px] flex-col">
                  <p className="text-[16px] leading-[20.8px] text-[#363636]">
                    Module 03
                  </p>
                  <h1 className="h-[68.4px] text-[24px] max-xl:h-auto max-hamburger:68.4px max-md:h-auto leading-[29.04px] pr-[0.77px]">
                    Bit Manipulation And Complexity
                  </h1>
                </div>
                <div className="flex h-[18.78px] gap-[8px]">
                  <h1 className="text-[24px] leading-[31.2px] text-[#729805]">
                    75%
                  </h1>
                  <p className="text-[#729805] text-[14px] pt-[8.78px] leading-[18.2px]">
                    Completed
                  </p>
                </div>
                <div className="py-[0.85px] max-smallphone:flex-wrap-reverse flex justify-between">
                  <button className="h-[43.07px] max-smallphone:w-full max-lg:w-[120px] w-[140px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                    Resume{" "}
                  </button>{" "}
                  <div className="w-[92.54px] flex  max-smallphone:w-full flex flex-wrap h-[44.77px]">
                    <Image
                      src="/Subtract.svg"
                      className="w-[24.54px] h-[24.54px]"
                      width={24.54}
                      height={24.54}
                    />
                    <p className="ml-[5px] py-[3.27px] max-smallphone:mx-[5px] text-[14px] h-[18px] leading-[18.2px]">
                      2,500 pts
                    </p>
                    <p className="text-[14px] max-smallphone:mt-[3.5px] max-smallphone:w-auto w-[92.54px] text-right leading-[18.2px]">
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-[24.62px] h-[659px] bg-white">
            <div className="pt-[30px] max-sm:p-[15px] max-sm:items-center pb-[23px] pl-[25.1px] pr-[43px] border-b-[1px] flex justify-between">
              <h1 className="py-[1.5px] text-[20px] leading-[24px] font-bold">
                Modules
              </h1>
              <div className="border-[1px] border-black py-[5px] px-[10px] rounded-[4px]">
                View curriculum
              </div>
            </div>
            <div className={style.module}>
              <div className="pt-[33px] max-md:px-[20px] max-sm:px-[15px] pl-[25px] pr-[41.64px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 01
                </p>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] max-smallphone:text-base leading-[26px]">
                        Module 01 Assessment{" "}
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">7,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 02
                </p>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02{" "}
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] max-smallphone:text-base leading-[26px]">
                        Module 02 Assessment{" "}
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">7,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 03
                </p>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02{" "}
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] max-smallphone:text-base leading-[26px]">
                        Module 03 Assessment{" "}
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">7,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 04
                </p>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02{" "}
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                        Justo est urna pellentesque commodo quis eget.
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">2,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                  <div className="flex flex-col gap-[11px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] max-smallphone:text-base leading-[26px]">
                        Module 04 Assessment{" "}
                      </h1>
                    </div>
                    <div className="flex gap-[5px]">
                      <Image
                        src="/Subtract.svg"
                        className="w-[24.37px] h-[24.37px]"
                        width={24.37}
                        height={24.37}
                      />
                      <div className="flex gap-[2px]">
                        <p className="text-[14px] py-[3.19px]">7,500 pts claimed</p>
                        <Image
                          src="/complete.svg"
                          className="px-[2.73px] pt-[4.25px] pb-[4.23px]"
                          width={17}
                          height={17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-[41.4%] max-hamburger:w-full">
          <section className="w-[100%] max-xl:h-auto max-sm:px-[16px] py-[22.5px] flex justify-between pl-[24px] pr-[26px] h-[77px] bg-white">
            <div className="flex gap-[9px]">
              <Image src="/whatsapp.svg" width={26.53} height={26.67} />
              <p className="text-[16px] max-sm:text-sm leading-[20.8px] py-[5.5px] font-bold capitalize">
                Clear doubts, connect with your peers and more
              </p>
            </div>
            <Image src="/open.svg" width={16.53} height={16.67} />
          </section>
          <section className="w-[100%] mt-[22px] h-[445px] bg-white">
            <div className="">
              <h1 className="text-[20px] font-bold leadng-[26px] pl-[23.5px] pt-[27.36px] pb-[17.64px] block w-full border-b-[1px]">
                Live Sessions
              </h1>
            </div>
            <div className={style.zoom}>
              <div className="border-b-[1px] h-[82px] flex justify-between items-center max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                <div className="w-[261px]">
                  <p className="text-[16px] leading-[20.8px] max-smallerphone:text-sm">
                    07th April <span className="ml-[17px]">09:30PM</span>
                  </p>
                  <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                    Guest talk: Sollicitudin eget{" "}
                  </h1>
                </div>
                <button className="h-[43px] w-[134px] max-sm:w-full bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                  Join in zoom{" "}
                </button>{" "}
              </div>
              <div className="border-b-[1px] h-[82px] flex justify-between items-center max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                <div className="w-[261px]">
                  <p className="text-[16px] leading-[20.8px] max-smallerphone:text-sm">
                    07th April <span className="ml-[17px]">09:30PM</span>
                  </p>
                  <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                    Guest talk: Sollicitudin eget{" "}
                  </h1>
                </div>
                <button className="h-[43px] w-[134px] max-sm:w-full bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                  Join in zoom{" "}
                </button>{" "}
              </div>
              <div className="border-b-[1px] h-[82px] flex justify-between items-center max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                <div className="w-[261px]">
                  <p className="text-[16px] leading-[20.8px] max-smallerphone:text-sm">
                    07th April <span className="ml-[17px]">09:30PM</span>
                  </p>
                  <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                    Guest talk: Sollicitudin eget{" "}
                  </h1>
                </div>
                <button className="h-[43px] w-[134px] max-sm:w-full bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                  Join in zoom{" "}
                </button>{" "}
              </div>
              <div className="border-b-[1px] h-[82px] flex justify-between items-center max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                <div className="w-[261px]">
                  <p className="text-[16px] leading-[20.8px] max-smallerphone:text-sm">
                    07th April <span className="ml-[17px]">09:30PM</span>
                  </p>
                  <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                    Guest talk: Sollicitudin eget{" "}
                  </h1>
                </div>
                <button className="h-[43px] w-[134px] max-sm:w-full bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                  Join in zoom{" "}
                </button>{" "}
              </div>
              <div className="border-b-[1px] h-[82px] flex justify-between items-center max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                <div className="w-[261px]">
                  <p className="text-[16px] leading-[20.8px] max-smallerphone:text-sm">
                    07th April <span className="ml-[17px]">09:30PM</span>
                  </p>
                  <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                    Guest talk: Sollicitudin eget{" "}
                  </h1>
                </div>
                <button className="h-[43px] w-[134px] max-sm:w-full bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                  Join in zoom{" "}
                </button>{" "}
              </div>
              <div className="border-b-[1px] h-[82px] flex justify-between items-center max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                <div className="w-[261px]">
                  <p className="text-[16px] leading-[20.8px] max-smallerphone:text-sm">
                    07th April <span className="ml-[17px]">09:30PM</span>
                  </p>
                  <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                    Guest talk: Sollicitudin eget{" "}
                  </h1>
                </div>
                <button className="h-[43px] w-[134px] max-sm:w-full bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                  Join in zoom{" "}
                </button>{" "}
              </div>
            </div>
          </section>
          <section className="w-[100%] mt-[22px] pt-[27px] pb-[38px] pl-[18.16px] h-[183px] bg-white">
            <p className="text-[20px] leading-[26px] pl-[5.34px] mb-[27px] font-bold capitalize">
              Total points{" "}
            </p>
            <div className="flex gap-[11px] h-[65px]">
              <Image
                src="/Subtract.svg"
                className="py-[6px]"
                width={53}
                height={53}
              />
              <p className="text-[54px] leading-[65.34px]">10,560</p>
            </div>
          </section>
          <section className="w-[100%] mt-[22px] h-[314px] bg-white">
            <div className="flex px-[23.5px] pt-[27px] pb-[7px] justify-between">
              <h1 className="text-[20px] font-bold leading-[26px]">Ranking </h1>
              <div className="border-[1px] border-black py-[5px] px-[10px] rounded-[4px]">
                View All
              </div>
            </div>
            <div className={style.rank}>
              <div className="border-t-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center max-lg:px-[15px]">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">1.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">15,000 pts</p>
                </div>{" "}
              </div>
              <div className="border-t-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center max-lg:px-[15px]">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">2.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">14,800 pts</p>
                </div>{" "}
              </div>
              <div className="border-t-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center max-lg:px-[15px]">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">3.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">14,653 pts</p>
                </div>{" "}
              </div>
              <div className="border-t-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center max-lg:px-[15px]">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">4.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">14,556 pts</p>
                </div>{" "}
              </div>
              <div className="border-t-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center max-lg:px-[15px]">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">5.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">13,200 pts</p>
                </div>{" "}
              </div>
              <div className="border-t-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center max-lg:px-[15px]">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">6.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">13,000 pts</p>
                </div>{" "}
              </div>
              <div className="border-t-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center max-lg:px-[15px]">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">7.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">12,800 pts</p>
                </div>{" "}
              </div>
              <div className="h-[62px] flex justify-between sticky pl-[26.45px] max-sm:px-[15px] pr-[30.17px] bg-[#DEEBFE] w-[100%] bottom-0 items-center">
                <div className="flex items-center gap-[18px] max-sm:gap-[12px]">
                  <p className="text-[14px] leading-[18.2px]">115.</p>
                  <h1 className="text-[20px] leading-[26px] max-lg:text-base max-smallphone:text-sm">
                    (You) Sit tellus
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px] max-sm:text-base">10,560 pts</p>
                </div>{" "}
              </div>
            </div>
          </section>
          <section className="w-[100%] mt-[22px] pt-[25.4px] border-[2px] border-[#672B094D] rounded-[6px] pb-[36px] pl-[22.32px] h-[131px] bg-[#FFEAC9]">
            <p className="text-[20px] leading-[26px] pl-[2.78px] mb-[27px] max-sm:mb-[7px] font-bold capitalize text-[#672B09]">
              Support{" "}
            </p>
            <p className="text-[16px] leading-[20.8px] text-[#672B09]">
              Facing Issues? Get Help At{" "}
              <a
                href="mailto:help@parallel.com"
                className="font-bold border-b-[1px] border-[#672B09]"
              >
                help@parallel.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
