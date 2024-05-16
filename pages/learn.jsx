import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/style.module.css";
import { useState } from "react";
export default function Learn() {
  const [resume, setresume] = useState(false);
  const [activeSection, setActiveSection] = useState("learn");
  const [submit, setsubmit] = useState(false);
  const [abort, setabort] = useState(false);
  const handleResume = () => {
    setresume(true);
  };
  const setActiveAndSection = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <Navbar />
      {activeSection === "learn" && (
        <div
          className={
            resume
              ? "flex justify-between max-hamburger:flex-col gap-[20px] pt-[30.32px] px-[20px] pb-[25.5px]"
              : "flex justify-between max-hamburger:flex-col gap-[19px] pt-[30.32px] px-[20px] pb-[25.5px]"
          }
        >
          {resume ? (
            <div className=" w-[calc(100%-513px)] max-xl:w-[calc(100%-400px)] max-hamburger:w-full">
              <div className="bg-black w-full h-[541.36px] mb-[13.32px] max-smallphone:h-[250px]"></div>
              <section className="w-[100%] pt-[36.23px] pb-[44.4px] max-sm:py-[25px] max-smalllaptop:px-[15px] pl-[29px] pr-[31.28px] flex max-sm:flex-col max-sm:gap-[12px] max-sm:h-auto justify-between h-[188px] bg-white">
                <div>
                  <p className="text-[16px] leading-[20.18px] mb-[9px]">
                    Module 03{" "}
                  </p>
                  <h1 className="text-[24px] leading-[31.2px] mb-[22px]">
                    Justo Est Urna Pellentesque C...
                  </h1>
                  <div className="flex gap-[5px] items-center">
                    <Image src="/Subtract.svg" width={24.36} height={24.36} />
                    <p className="text-[14px]">2,500 pts available</p>
                  </div>
                </div>
                <div className="w-[208px] max-smallphone:w-full max-smalllaptop:w-[160px] border-[1px] border-black rounded-[4px] h-[48px] flex gap-[12px] justify-center items-center">
                  <p className="text-[16px]">I have a doubt</p>
                  <Image src="/open.svg" width={16} height={16} />
                </div>
              </section>
            </div>
          ) : (
            <div className="mt-[11.68px] max-hamburger:w-full w-[calc(100%-513px)]">
              <section className="pt-[27.96px] pb-[31.94px] pl-[25.1px] max-xl:px-[27.96px] max-sm:px-[15px] pr-[88.46px] bg-white">
                <h1 className="text-[20px] leading-[26px] font-bold">
                  Continue Learning
                </h1>
                <div className="pl-[3.9px] pt-[33.04px] flex max-xl:flex-col max-hamburger:flex-row max-md:flex-col gap-[19px]">
                  <div className="w-[44.855%] h-[251.06px] max-smallphone:h-[100px] max-xl:w-full max-hamburger:w-[44.855%] max-md:w-full bg-[#F7F7F7]"></div>
                  <div className="flex w-[51.362%] max-xl:w-full max-hamburger:w-[51.362%] max-md:w-full gap-[22px] flex-col">
                    <div className="flex gap-[11px] flex-col">
                      <p className="text-[16px] leading-[20.8px] text-[#363636]">
                        Module 03
                      </p>
                      <h1 className="h-[68.47px] text-[24px] max-xl:h-auto max-hamburger:h-[68.47px] max-md:h-auto leading-[29.04px] pr-[0.77px]">
                        Bit Manipulation And Complexity
                      </h1>
                    </div>
                    <div className="flex mt-[43.04px] max-xl:mt-[1px] max-hamburger:mt-[43.04px] max-md:mt-[1px] h-[18.78px] gap-[8px]">
                      <h1 className="text-[24px] leading-[31.2px] text-[#729805]">
                        75%
                      </h1>
                      <p className="text-[#729805] text-[14px] pt-[8.78px] leading-[18.2px]">
                        Completed
                      </p>
                    </div>
                    <div className="py-[0.85px] max-smallphone:flex-wrap-reverse flex justify-between">
                      <button
                        onClick={handleResume}
                        className="h-[43.07px] max-smallphone:w-full w-[140px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
                      >
                        Resume{" "}
                      </button>{" "}
                      <div className="w-[92.54px]  max-smallphone:w-full flex flex-wrap h-[44.77px]">
                        <Image
                          src="/Subtract.svg"
                          className="w-[24.54px] h-[24.54px]"
                          width={24.54}
                          height={24.54}
                        />
                        <p className="ml-[5px] py-[3.27px] max-smallphone:mx-[5px] text-[14px] h-[18px] leading-[18.2px]">
                          2,500 pts
                        </p>
                        <p className="text-[14px] max-smallphone:mt-[2.5px] max-smallphone:w-auto w-[92.54px] text-right leading-[18.2px]">
                          Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="pt-[39.5px] mt-[21px] pb-[46px] max-md:px-[15px] pl-[38.46px] pr-[88.46px] bg-white">
                <h1 className="text-[20px] pl-[0.04px] leading-[26px] font-bold">
                  Your Progress{" "}
                </h1>
                <div className="w-[670.62px] h-[218px] max-md:w-full mt-[54.5px] max-sm:flex-col max-smalllaptop:flex-col max-hamburger:flex-row max-smalllaptop:h-auto max-hamburger:h-[218px] max-sm:mt-[24px] max-sm:h-auto max-sm:gap-[30px] flex max-xl:gap-[50px] max-xl:justify-start justify-between">
                  <div>
                    <h1 className="text-[133.68px] max-smallphone:text-[100px] max-smallphone:leading-[140px] leading-[100.79px] h-[96px]">
                      50%
                    </h1>
                    <p className="text-[16px] mt-[16px] leading-[20.8px]">
                      Course Progress
                    </p>
                  </div>
                  <div className="flex w-[273.62px] gap-[15px] flex-col">
                    <div className="flex gap-[3.62px] items-center h-[49px]">
                      <Image src="/Subtract.svg" width={49} height={49} />
                      <p className="text-[69.05px] leading-[89.76px] max-smallphone:text-[50px] max-smallphone:leading-[90px]">
                        75,805
                      </p>
                    </div>
                    <p className="text-[16px] leading-[20.8px]">
                      Points Earned
                    </p>
                    <div className="flex gap-[3.62px] mt-[30px] items-center h-[49px]">
                      <p className="text-[69.05px] leading-[89.76px] max-smallphone:text-[50px] max-smallphone:leading-[90px]">
                        10,501
                      </p>
                    </div>
                    <p className="text-[16px] mt-[3px] leading-[20.8px] capitalize">
                      peers have finished this course
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}
          <section
            className={
              resume
                ? "mt-[11.18px] w-[453px] max-hamburger:w-full max-xl:w-[400px] max-hamburger:h-[419px] h-[919px] bg-white"
                : "mt-[10.68px] w-[494px] max-hamburger:w-full max-hamburger:h-[419px] h-[919px] bg-white"
            }
          >
            <div className="py-[27px] pb-[23px] pl-[23.5px] border-b-[1px]">
              <h1 className="text-[20px] leading-[26px] font-bold">
                Course Content{" "}
              </h1>
            </div>
            <div className={style.learn}>
              <div className="pt-[30.2px] pl-[14px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 01
                </p>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div
                    onClick={() => setActiveAndSection("module1")}
                    className="flex flex-col gap-[11px] cursor-pointer"
                  >
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
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
                        <p className="py-[3.19px] text-[14px]">
                          7,500 pts claimed
                        </p>
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
              <div className="pt-[30.2px] pl-[14px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 02
                </p>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div
                  onClick={() => setActiveAndSection("module2")}
                  className="py-[10px] cursor-pointer border-b-[1px] flex gap-[12px]"
                >
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
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
                        <p className="py-[3.19px] text-[14px]">
                          7,500 pts claimed
                        </p>
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
              <div className="pt-[30.2px] pl-[14px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 03
                </p>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts claimed
                        </p>
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
                <div className="py-[10px] bg-[#DEEBFE] border-b-[1px] flex gap-[12px]">
                  <div
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <div
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setActiveAndSection("module3")}
                  className="py-[10px] cursor-pointer border-b-[1px] flex gap-[12px]"
                >
                  <Image
                    src="/Frame 212.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
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
                        <p className="py-[3.19px] text-[14px]">
                          7,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[30.2px] opacity-60 pl-[14px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 04
                </p>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/lock.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/lock.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        02
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/lock.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        03
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/lock.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        04
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
                        Justo est urna pellentesque c...{" "}
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
                        <p className="py-[3.19px] text-[14px]">
                          2,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px]  border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/lock.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex flex-col gap-[11px]">
                    <div className="flex gap-[20px]">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        05
                      </p>
                      <h1 className="text-[20px] leading-[26px]">
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
                        <p className="py-[3.19px] text-[14px]">
                          7,500 pts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {(activeSection === "module1" ||
        activeSection === "module2" ||
        activeSection === "submit") && (
        <section className="py-[71px] max-md:px-[40px] max-sm:py-[40px] max-sm:px-[20px] pl-[60px] pr-[63px]">
          <div className="w-full bg-white rounded-[8px] pt-[62.4px] max-sm:py-[30px] max-hamburger:px-[40px] max-md:px-[20px] max-sm:px-[15px] pl-[72.37px] pb-[61.92px] relative">
            {(activeSection === "module1" || activeSection === "module2") && (
              <p className="text-[20px] leading-[26px] font-light">All Done</p>
            )}
            {activeSection === "submit" && (
              <p className="text-[20px] leading-[26px] font-light">
                Congratulations!
              </p>
            )}
            {activeSection === "module1" && (
              <h1 className="mt-[13.37px] text-[50.3px] max-sm:text-[40px] max-smallphone:text-[32px] max-smallphone:leading-[36px] max-sm:leading-[48px] leading-[67.4px] max-hamburger:w-full w-[769.81px] font-semibold">
                You have already finished Module 01 Assessment!
              </h1>
            )}
            {activeSection === "module2" && (
              <h1 className="mt-[13.37px] text-[50.3px] max-sm:text-[40px] max-smallphone:text-[32px] max-smallphone:leading-[36px] max-sm:leading-[48px] leading-[67.4px] max-hamburger:w-full w-[769.81px] font-semibold">
                You have already finished Module 02 Assessment!
              </h1>
            )}
            {activeSection === "submit" && (
              <h1 className="mt-[13.37px] text-[50.3px] max-sm:text-[40px] max-smallphone:text-[32px] max-smallphone:leading-[36px] max-sm:leading-[48px] capitalize leading-[67.4px] max-hamburger:w-full w-[769.81px] font-semibold">
                You have successfully finished Module 03 Assessment!{" "}
              </h1>
            )}
            <div className="mt-[91.23px] max-smallphone:mt-[41px]">
              <h1 className="text-[49.73px] leading-[36px]">8/8</h1>
              <p className="text-[14px] leading-[18.82px] mt-[16px]">
                Answers Correct
              </p>
            </div>
            <div className="flex mt-[32px] gap-[21.8px] max-smallphone:gap-[0] max-sm:items-end">
              <div className="flex gap-[44.81px] max-sm:flex-col max-smallphone:gap-[20px]">
                <div>
                  <div className="flex gap-[2.61px] items-center h-[49px]">
                    <Image src="/Subtract.svg" width={35.41} height={35.41} />
                    <p className="text-[49.9px] leading-[36px] max-sm:text-[36px]">
                      7,500
                    </p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Points Earned</p>
                </div>
                <div>
                  <div className="flex gap-[3.62px] items-center h-[49px]">
                    <p className="text-[49.73px] leading-[36px] max-smallphone:text-[36px]">
                      00:30s
                    </p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Time Remaining</p>
                </div>
              </div>
              <div>
                <div className="flex gap-[1.92px] items-center max-sm:h-[85px] max-sm:h-[80px] h-[49px]">
                  <p className="text-[36.56px] leading-[26px]">+</p>
                  <Image src="/Subtract.svg" width={35.41} height={35.41} />
                  <p className="text-[36.56px] max-smallphone:text-[30px] leading-[26px]">
                    500
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[70px] max-smallphone:mt-[40px]">
              <div className="flex gap-[6.05px] items-center">
                <Image src="/Subtract.svg" width={82.05} height={82.05} />
                <p className="text-[115.63px] leading-[83px] max-smallphone:text-[60px] max-sm:text-[80px]">
                  8,000
                </p>
              </div>
              <p className="text-[20px] leading-[26px] mt-[37.06px]">
                Total points earned
              </p>
            </div>
            <button
              onClick={() => setActiveAndSection("learn")}
              className="h-[59px] max-sm:static max-sm:mt-[12px] max-smallphone:w-full w-[143px] bg-black absolute right-[52px] max-hamburger:right-[40px] max-md:right-[20px] max-md:bottom-[40px] bottom-[68.92px] text-white rounded-[6px] text-[16px] leading-[19.2px]"
            >
              Go Back{" "}
            </button>{" "}
          </div>
        </section>
      )}
      {activeSection === "abort" && (
        <section className="py-[71px] pl-[60px] max-sm:py-[40px] max-hamburger:px-[60px] max-md:px-[40px] max-sm:px-[20px] pr-[63px]">
          <div className="w-full bg-white rounded-[8px] max-md:pb-[30px] max-sm:py-[30px] max-hamburger:px-[40px] max-md:px-[20px] max-sm:px-[15px]  pt-[62.4px] pl-[72.37px] pb-[61.92px] relative">
            <p className="text-[20px] leading-[26px] font-light">Try Again</p>
            <h1 className="mt-[13.37px] max-hamburger:w-full text-[50.3px] max-md:text-[40px] max-md:leading-[125%] max-sm:text-[32px] leading-[67.4px] w-[769.81px] font-semibold">
              You have aborted Module 03 Assessment.{" "}
            </h1>
            <div className="mt-[91.23px] max-smallphone:mt-[41px]">
              <h1 className="text-[49.73px] leading-[36px]">-/-</h1>
              <p className="text-[14px] leading-[18.82px] mt-[16px]">
                Answers Correct
              </p>
            </div>
            <div className="flex mt-[32px] gap-[21.8px]">
              <div className="flex max-sm:flex-col gap-[44.81px]">
                <div>
                  <div className="flex gap-[2.61px] items-center h-[49px]">
                    <Image src="/Subtract.svg" width={35.41} height={35.41} />
                    <p className="text-[49.9px] leading-[36px] max-smallphone:text-[36px]">
                      0
                    </p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Points Earned</p>
                </div>
                <div>
                  <div className="flex gap-[3.62px] items-center h-[49px] max-smallphone:text-[36px]">
                    <p className="text-[49.73px] leading-[36px]">--:--s</p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Time Remaining</p>
                </div>
              </div>
            </div>
            <div className="mt-[70px] max-smallphone:mt-[40px]">
              <div className="flex gap-[6.05px] items-center">
                <Image src="/Subtract.svg" width={82.05} height={82.05} />
                <p className="text-[115.63px] leading-[83px] max-smallphone:text-[60px] max-sm:text-[80px]">
                  0
                </p>
              </div>
              <p className="text-[20px] leading-[26px] mt-[37.06px]">
                Total points earned
              </p>
            </div>
            <div className="absolute max-smallphone:flex-col bottom-[68.92px] max-sm:gap-[12px] max-md:static max-md:mt-[12px] flex gap-[21px] right-[52px]">
              <button
                onClick={() => setActiveAndSection("learn")}
                className="h-[59px] w-[230px] max-smallphone:w-full max-hamburger:w-[180px] bg-white text-black border-[1px] border-black rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Rewatch Module 03{" "}
              </button>{" "}
              <button
                onClick={() => setActiveAndSection("module3")}
                className="h-[59px] w-[151px] max-smallphone:w-full max-sm:w-[120px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Try Again{" "}
              </button>{" "}
            </div>
          </div>
        </section>
      )}
      {activeSection === "module3" && (
        <section className="pt-[88px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[40px] pb-[90px] pl-[60px] pr-[63px]">
          <div className="w-full bg-white flex flex-col justify-between items-center rounded-[8px] pt-[88.78px] max-sm:py-[30px] max-sm:px-[15px] pb-[85.78px] relative">
            <div>
              <h1 className="capitalize w-[519.65px] max-sm:text-[32px] max-sm:leading-[36px] max-sm:w-full text-[48px] leading-[61.92px] tracking-[-1.92px] text-center">
                You are about to start Module 03 Assessment.
              </h1>
              <div className="flex mt-[57.37px] max-sm:flex-wrap justify-center gap-[24.34px]">
                <div>
                  <h1 className="text-[37.83px] leading-[27px]">08</h1>
                  <p className="text-[14px] leading-[18.2px] mt-[12.17px]">
                    Total Question
                  </p>
                </div>
                <div>
                  <h1 className="text-[37.83px] leading-[27px]">2:30s</h1>
                  <p className="text-[14px] leading-[18.2px] mt-[12.17px]">
                    Time Limit
                  </p>
                </div>
                <div>
                  <div className="flex gap-[1.99px] items-center">
                    <Image src="/Subtract.svg" width={26.94} height={26.94} />
                    <p className="text-[37.83px] leading-[27px]">7,500</p>
                  </div>{" "}
                  <p className="text-[14px] leading-[18.2px] mt-[12.17px]">
                    Points Available
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[124.83px] max-sm:mt-[60px] max-smallphone:flex-col max-smallphone:w-full flex gap-[16px]">
              <button
                onClick={() => setActiveAndSection("learn")}
                className="h-[43.07px] w-[140px] bg-white text-black max-smallphone:w-full border-[1px] border-black rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Go Back{" "}
              </button>{" "}
              <button
                onClick={() => setActiveAndSection("start")}
                className="h-[43.07px] w-[140px] bg-black text-white max-smallphone:w-full rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Start{" "}
              </button>{" "}
            </div>
          </div>
        </section>
      )}
      {activeSection === "start" && (
        <section className="pb-[77px] max-md:px-[40px] max-sm:px-[20px] pl-[60px] pr-[63px]">
          <div className="mt-[43px] flex gap-[16px] justify-between">
            <button
              onClick={() => setabort(true)}
              className="h-[43.07px] w-[101px] bg-[transparent] text-[#DE3D0A] border-[1px] border-[#DE3D0A] rounded-[6px] text-[16px] leading-[19.2px]"
            >
              Go Back{" "}
            </button>{" "}
            <div className="flex gap-[12px] items-center">
              <p className="text-[16px] leading-[20.8px] max-smallphone:text-sm">
                Time remaining:
              </p>{" "}
              <h1 className="text-[24px] leading-[31.2px] max-smallphone:text-base">
                01:56
              </h1>
            </div>{" "}
          </div>
          <div className="my-[23px] bg-white pl-[38.5px] max-smallphone:flex-col max-smallphone:items-start relative pt-[13.92px] max-md:px-[20px] max-sm:px-[15px] pb-[14.08px] pr-[31px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center justify-between">
            <div>
              <p className="text-[16px] leading-[20.8px]">Timed Assessment</p>
              <h1 className="text-[32px] leading-[41.6px] max-sm:text-[28px] max-sm:leading-[36px] font-semibold mt-[8px]">
                Module 03
              </h1>
            </div>
            <button
              onClick={() => setsubmit(true)}
              className="h-[59px] w-[228px] bg-black max-smallphone:w-full max-sm:w-[160px] max-sm:h-[43px] text-white rounded-[6px] text-[16px] leading-[19.2px]"
            >
              Submit Assessment{" "}
            </button>{" "}
          </div>
          <div className="w-full bg-white rounded-[8px] max-smallphone:py-[30px] pt-[44.53px] pl-[47.3px] max-sm:px-[15px] max-md:px-[20x] max-hamburger:px-[40px] max-sm:pb-[157px] pb-[57px] relative">
            <div>
              <p className="text-[16px] leading-[20.8px]">01</p>
              <h1 className="capitalize pr-[197.72px] text-[32px] max-lg:pr-[40px] max-md:pr-[20px] max-md:px-0 max-hamburger:text-[24px] max-sm:text-[16px] max-sm:leading-[20px] max-hamburger:leading-[32px] leading-[42.88px] mt-[14.63px] font-normal">
                Est facilisis senectus etiam lobortis sociis. Tellus mollis
                laoreet egestas potenti donec sagittis adipiscing. Netus ipsum
                mauris massa.{" "}
              </h1>
            </div>
            <div className="gap-[20px] mt-[35.75px] flex flex-col">
              <label className="flex w-[216px] cursor-pointer items-center">
                <input type="radio" name="educationStatus" value="option1" />
                <p className="ml-[8px]"> A. Timed Assessment</p>
              </label>
              <label className="flex w-[216px] cursor-pointer mb-[2.5px] items-center">
                <input type="radio" name="educationStatus" value="option2" />
                <p className="ml-[8px]"> B. Timed Assessment</p>
              </label>
              <label className="flex w-[216px] cursor-pointer items-center">
                <input type="radio" name="educationStatus" value="option1" />
                <p className="ml-[8px]"> C. Timed Assessment</p>
              </label>
              <label className="flex w-[216px] cursor-pointer items-center">
                <input type="radio" name="educationStatus" value="option2" />
                <p className="ml-[8px]"> D. Timed Assessment</p>
              </label>
            </div>
            <button
              onClick={() => setActiveAndSection("start")}
              className="h-[47px] w-[115px] bg-[#989898] mt-[132.5px] text-white rounded-[6px] text-[16px] max-sm:mt-[30px] leading-[19.2px]"
            >
              Skip{" "}
            </button>{" "}
            <div className="absolute max-smallphone:static max-smallphone:mt-[30px] max-smallphone:flex-wrap max-smallphone:w-full right-[66px] max-hamburger:right-[40px] max-md:right-[20px] max-sm:right-[15px] max-sm:bottom-[30px] bottom-[57px]">
              <div className="flex gap-[11px]">
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[2px] border-black cursor-pointer">
                  1
                </p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">
                  2
                </p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">
                  3
                </p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">
                  4
                </p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">
                  5
                </p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">
                  6
                </p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">
                  7
                </p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">
                  8
                </p>
              </div>
              <p className="text-[16px] text-right leading-[20.8px] mt-[14px]">
                1 / 8 questions attempted
              </p>
            </div>
          </div>

          {submit && (
            <>
              <div className="bg-white absolute flex flex-col justify-center shadow-2xl max-sm:shadow-md items-center max-sm:top-[120px] top-[150px] rounded-[8px] left-[22.15%] max-hamburger:w-[80%] max-hamburger:left-[10%] max-md:w-[96%] max-md:left-[2%] h-[439px] w-[55.7%]">
                <Image
                  src="/Vector (2).svg"
                  className="absolute max-md:right-[40px] max-sm:right-[5%] right-[36.12px] max-smallerphone:top-[20px] cursor-pointer top-[37.29px]"
                  width={23.35}
                  onClick={() => setsubmit(false)}
                  height={23.35}
                />
                <p className="w-[273.24px] text-[32px] leading-[41.28px] tracking-[-1.28px] text-center">
                  Are you sure about submitting?
                </p>
                <div className="flex mb-[58px] mt-[28px] max-sm:mb-[34px] max-smallphone:gap-[10px] gap-[59px]">
                  <div>
                    <h1 className="text-[49.73px] leading-[39.65px]">8/8</h1>
                    <p className="mt-[16px] text-[14px] leading-[18.2px]">
                      Questions attempted
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[49.73px] leading-[39.65px]">01:56</h1>
                    <p className="mt-[16px] text-[14px] leading-[18.2px]">
                      Time remaining{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    onClick={() => setsubmit(false)}
                    className="h-[43.07px] w-[234px] max-smallphone:w-full max-hamburger:w-[170px] bg-white text-black border-[1px] border-black rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    Resume Assessment{" "}
                  </button>{" "}
                  <button
                    onClick={() => setActiveAndSection("submit")}
                    className="h-[43.07px] w-[228px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    Submit Assessment{" "}
                  </button>
                </div>
              </div>
            </>
          )}
          {abort && (
            <>
              <div className="bg-white shadow-2xl absolute flex flex-col justify-center max-sm:shadow-md items-center max-sm:top-[120px] top-[150px] rounded-[8px] left-[22.15%] max-hamburger:w-[80%] max-hamburger:left-[10%] max-md:w-[96%] max-md:left-[2%] h-[439px] w-[55.7%]">
                <Image
                  src="/Vector (2).svg"
                  className="absolute max-md:right-[40px] max-sm:right-[5%] right-[36.12px] max-smallerphone:top-[20px] cursor-pointer top-[37.29px]"
                  width={23.35}
                  onClick={() => setabort(false)}
                  height={23.35}
                />
                <p className="w-[422.24px] text-[32px] leading-[41.28px] tracking-[-1.28px] text-center">
                  Are you sure about quitting?{" "}
                </p>
                <p className="text-[16px] leading-[20.64px] tracking-[-0.32px]">
                  You can retake it again later.
                </p>
                <div className="flex mb-[58px] mt-[28px] max-sm:mb-[34px] max-smallphone:gap-[10px] gap-[59px]">
                  <div>
                    <h1 className="text-[49.73px] leading-[39.65px]">0/8</h1>
                    <p className="mt-[16px] text-[14px] leading-[18.2px]">
                      Questions attempted
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[49.73px] leading-[39.65px]">01:56</h1>
                    <p className="mt-[16px] text-[14px] leading-[18.2px]">
                      Time remaining{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    onClick={() => setActiveAndSection("abort")}
                    className="h-[43.07px] w-[207px] max-smallphone:w-full max-hamburger:w-[170px] bg-white border-[1px] border-[#D41717] text-[#D41717] rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    Quit Assessment{" "}
                  </button>{" "}
                  <button
                    onClick={() => setabort(false)}
                    className="h-[43.07px] w-[233px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    Resume Assessment{" "}
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
