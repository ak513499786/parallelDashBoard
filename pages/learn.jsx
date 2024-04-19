import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/style.module.css";
import { useState } from "react";
export default function Learn() {
  const [resume, setresume] = useState(false);
  const [activeSection, setActiveSection] = useState("learn");
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
              ? "flex justify-between gap-[20px] pt-[30.32px] px-[20px] pb-[25.5px]"
              : "flex justify-between gap-[19px] pt-[30.32px] px-[20px] pb-[25.5px]"
          }
        >
          {resume ? (
            <div className=" w-[calc(100%-513px)]">
              <div className="bg-black w-full h-[541.36px] mb-[13.32px]"></div>
              <section className="w-[100%] pt-[36.23px] pb-[44.4px] pl-[29px] pr-[31.28px] flex justify-between h-[188px] bg-white">
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
                <div className="w-[208px] border-[1px] border-black rounded-[4px] h-[48px] flex gap-[12px] justify-center items-center">
                  <p className="text-[16px]">I have a doubt</p>
                  <Image src="/open.svg" width={16} height={16} />
                </div>
              </section>
            </div>
          ) : (
            <div className="mt-[11.68px] w-[calc(100%-513px)]">
              <section className="pt-[27.96px] pb-[31.94px] pl-[25.1px] pr-[88.46px] bg-white">
                <h1 className="text-[20px] leading-[26px] font-bold">
                  Continue Learning
                </h1>
                <div className="pl-[3.9px] pt-[33.04px] flex gap-[19px]">
                  <div className="w-[44.855%] h-[251.06px] bg-[#F7F7F7]"></div>
                  <div className="flex w-[51.362%] gap-[22px] flex-col">
                    <div className="flex gap-[11px] flex-col">
                      <p className="text-[16px] leading-[20.8px] text-[#363636]">
                        Module 03
                      </p>
                      <h1 className="h-[68.47px] text-[24px] leading-[29.04px] pr-[0.77px]">
                        Bit Manipulation And Complexity
                      </h1>
                    </div>
                    <div className="flex mt-[43.04px] h-[18.78px] gap-[8px]">
                      <h1 className="text-[24px] leading-[31.2px] text-[#729805]">
                        75%
                      </h1>
                      <p className="text-[#729805] text-[14px] pt-[8.78px] leading-[18.2px]">
                        Completed
                      </p>
                    </div>
                    <div className="py-[0.85px] flex justify-between">
                      <button
                        onClick={handleResume}
                        className="h-[43.07px] w-[140px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
                      >
                        Resume{" "}
                      </button>{" "}
                      <div className="w-[92.54px] flex flex-wrap h-[44.77px]">
                        <Image
                          src="/Subtract.svg"
                          className="w-[24.54px] h-[24.54px]"
                          width={24.54}
                          height={24.54}
                        />
                        <p className="ml-[5px] py-[3.27px] text-[14px] h-[18px] leading-[18.2px]">
                          2,500 pts
                        </p>
                        <p className="text-[14px] w-[92.54px] text-right leading-[18.2px]">
                          Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="pt-[39.5px] mt-[21px] pb-[46px] pl-[38.46px] pr-[88.46px] bg-white">
                <h1 className="text-[20px] pl-[0.04px] leading-[26px] font-bold">
                  Your Progress{" "}
                </h1>
                <div className="w-[670.62px] h-[218px] mt-[54.5px] flex justify-between">
                  <div>
                    <h1 className="text-[133.68px] leading-[100.79px] h-[96px]">
                      50%
                    </h1>
                    <p className="text-[16px] mt-[16px] leading-[20.8px]">
                      Course Progress
                    </p>
                  </div>
                  <div className="flex w-[273.62px] gap-[15px] flex-col">
                    <div className="flex gap-[3.62px] items-center h-[49px]">
                      <Image src="/Subtract.svg" width={49} height={49} />
                      <p className="text-[69.05px] leading-[89.76px]">75,805</p>
                    </div>
                    <p className="text-[16px] leading-[20.8px]">
                      Points Earned
                    </p>
                    <div className="flex gap-[3.62px] mt-[30px] items-center h-[49px]">
                      <p className="text-[69.05px] leading-[89.76px]">10,501</p>
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
                ? "mt-[11.18px] w-[453px] h-[919px] bg-white"
                : "mt-[10.68px] w-[494px] h-[919px] bg-white"
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
        <section className="py-[71px] pl-[60px] pr-[63px]">
          <div className="w-full bg-white rounded-[8px] pt-[62.4px] pl-[72.37px] pb-[61.92px] relative">
            {(activeSection === "module1" || activeSection === "module2") && (
              <p className="text-[20px] leading-[26px] font-light">All Done</p>
            )}
            {activeSection === "submit" && (
              <p className="text-[20px] leading-[26px] font-light">
                Congratulations!
              </p>
            )}
            {activeSection === "module1" && (
              <h1 className="mt-[13.37px] text-[50.3px] leading-[67.4px] w-[769.81px] font-semibold">
                You have already finished Module 01 Assessment!
              </h1>
            )}
            {activeSection === "module2" && (
              <h1 className="mt-[13.37px] text-[50.3px] leading-[67.4px] w-[769.81px] font-semibold">
                You have already finished Module 02 Assessment!
              </h1>
            )}
            {activeSection === "submit" && (
              <h1 className="mt-[13.37px] text-[50.3px] capitalize leading-[67.4px] w-[769.81px] font-semibold">
                You have successfully finished Module 03 Assessment!{" "}
              </h1>
            )}
            <div className="mt-[91.23px]">
              <h1 className="text-[49.73px] leading-[36px]">8/8</h1>
              <p className="text-[14px] leading-[18.82px] mt-[16px]">
                Answers Correct
              </p>
            </div>
            <div className="flex mt-[32px] gap-[21.8px]">
              <div className="flex gap-[44.81px]">
                <div>
                  <div className="flex gap-[2.61px] items-center h-[49px]">
                    <Image src="/Subtract.svg" width={35.41} height={35.41} />
                    <p className="text-[49.9px] leading-[36px]">7,500</p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Points Earned</p>
                </div>
                <div>
                  <div className="flex gap-[3.62px] items-center h-[49px]">
                    <p className="text-[49.73px] leading-[36px]">00:30s</p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Time Remaining</p>
                </div>
              </div>
              <div>
                <div className="flex gap-[1.92px] items-center h-[49px]">
                  <p className="text-[36.56px] leading-[26px]">+</p>
                  <Image src="/Subtract.svg" width={35.41} height={35.41} />
                  <p className="text-[36.56px] leading-[26px]">500</p>
                </div>
              </div>
            </div>
            <div className="mt-[70px]">
              <div className="flex gap-[6.05px] items-center">
                <Image src="/Subtract.svg" width={82.05} height={82.05} />
                <p className="text-[115.63px] leading-[83px]">8,000</p>
              </div>
              <p className="text-[20px] leading-[26px] mt-[37.06px]">
                Total points earned
              </p>
            </div>
            <button
              onClick={() => setActiveAndSection("learn")}
              className="h-[59px] w-[143px] bg-black absolute right-[52px] bottom-[68.92px] text-white rounded-[6px] text-[16px] leading-[19.2px]"
            >
              Go Back{" "}
            </button>{" "}
          </div>
        </section>
      )}
      {activeSection === "abort" && (
        <section className="py-[71px] pl-[60px] pr-[63px]">
          <div className="w-full bg-white rounded-[8px] pt-[62.4px] pl-[72.37px] pb-[61.92px] relative">
            <p className="text-[20px] leading-[26px] font-light">Try Again</p>
            <h1 className="mt-[13.37px] text-[50.3px] leading-[67.4px] w-[769.81px] font-semibold">
              You have aborted Module 03 Assessment.{" "}
            </h1>
            <div className="mt-[91.23px]">
              <h1 className="text-[49.73px] leading-[36px]">-/-</h1>
              <p className="text-[14px] leading-[18.82px] mt-[16px]">
                Answers Correct
              </p>
            </div>
            <div className="flex mt-[32px] gap-[21.8px]">
              <div className="flex gap-[44.81px]">
                <div>
                  <div className="flex gap-[2.61px] items-center h-[49px]">
                    <Image src="/Subtract.svg" width={35.41} height={35.41} />
                    <p className="text-[49.9px] leading-[36px]">0</p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Points Earned</p>
                </div>
                <div>
                  <div className="flex gap-[3.62px] items-center h-[49px]">
                    <p className="text-[49.73px] leading-[36px]">--:--s</p>
                  </div>
                  <p className="text-[14px] leading-[18.2px]">Time Remaining</p>
                </div>
              </div>
            </div>
            <div className="mt-[70px]">
              <div className="flex gap-[6.05px] items-center">
                <Image src="/Subtract.svg" width={82.05} height={82.05} />
                <p className="text-[115.63px] leading-[83px]">0</p>
              </div>
              <p className="text-[20px] leading-[26px] mt-[37.06px]">
                Total points earned
              </p>
            </div>
            <div className="absolute bottom-[68.92px] flex gap-[21px] right-[52px]">
              <button
                onClick={() => setActiveAndSection("learn")}
                className="h-[59px] w-[230px] bg-white text-black border-[1px] border-black rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Rewatch Module 03{" "}
              </button>{" "}
              <button
                onClick={() => setActiveAndSection("module3")}
                className="h-[59px] w-[151px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Try Again{" "}
              </button>{" "}
            </div>
          </div>
        </section>
      )}
      {activeSection === "module3" && (
        <section className="pt-[88px] pb-[90px] pl-[60px] pr-[63px]">
          <div className="w-full bg-white flex flex-col justify-between items-center rounded-[8px] pt-[88.78px] pb-[85.78px] relative">
            <div>
              <h1 className="capitalize w-[519.65px] text-[48px] leading-[61.92px] tracking-[-1.92px] text-center">
                You are about to start Module 03 Assessment.
              </h1>
              <div className="flex mt-[57.37px] justify-center gap-[24.34px]">
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
            <div className="mt-[124.83px] flex gap-[16px]">
              <button
                onClick={() => setActiveAndSection("learn")}
                className="h-[43.07px] w-[140px] bg-white text-black border-[1px] border-black rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Go Back{" "}
              </button>{" "}
              <button
                onClick={() => setActiveAndSection("start")}
                className="h-[43.07px] w-[140px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
              >
                Start{" "}
              </button>{" "}
            </div>
          </div>
        </section>
      )}
      {activeSection === "start" && (
        <section className="pb-[77px] pl-[60px] pr-[63px]">
          <div className="mt-[43px] flex gap-[16px] justify-between">
            <button
              onClick={() => setActiveAndSection("abort")}
              className="h-[43.07px] w-[101px] bg-[transparent] text-[#DE3D0A] border-[1px] border-[#DE3D0A] rounded-[6px] text-[16px] leading-[19.2px]"
            >
              Go Back{" "}
            </button>{" "}
            <div className="flex gap-[12px] items-center">
              <p className="text-[16px] leading-[20.8px]">Time remaining:</p>{" "}
              <h1 className="text-[24px] leading-[31.2px]">01:56</h1>
            </div>{" "}
          </div>
          <div className="my-[23px] bg-white pl-[38.5px] relative pt-[13.92px] pb-[14.08px] pr-[31px] rounded-[6px] flex gap-[16px] items-center justify-between">
            <div>
              <p className="text-[16px] leading-[20.8px]">Timed Assessment</p>
              <h1 className="text-[32px] leading-[41.6px] font-semibold mt-[8px]">
                Module 03
              </h1>
            </div>
            <button
              onClick={() => setActiveAndSection("submit")}
              className="h-[59px] w-[228px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
            >
              Submit Assessment{" "}
            </button>{" "}
          </div>
          <div className="w-full bg-white rounded-[8px] pt-[44.53px] pl-[47.3px] pb-[57px] relative">
            <div>
              <p className="text-[16px] leading-[20.8px]">01</p>
              <h1 className="capitalize pr-[197.72px] text-[32px] leading-[42.88px] mt-[14.63px] font-normal">
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
              className="h-[47px] w-[115px] bg-[#989898] mt-[132.5px] text-white rounded-[6px] text-[16px] leading-[19.2px]"
            >
              Skip{" "}
            </button>{" "}
            <div className="absolute right-[66px] bottom-[57px]">
              <div className="flex gap-[11px]">
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[2px] border-black cursor-pointer">1</p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">2</p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">3</p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">4</p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">5</p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">6</p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">7</p>
                <p className="w-[30px] h-[31px] flex justify-center items-center border-[1px] border-black cursor-pointer">8</p>
              </div>
              <p className="text-[16px] text-right leading-[20.8px] mt-[14px]">
                1 / 8 questions attempted
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
