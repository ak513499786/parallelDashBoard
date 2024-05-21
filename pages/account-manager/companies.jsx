import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "@/styles/style.module.css";
import ManagerNavbar from "@/components/managerNavbar";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [viewprofile, setviewprofile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("Select role type");

  return (
    <>
      <ManagerNavbar />
      <main className="px-[59.5px] pt-[41.36px] max-md:px-[40px] pb-[50px] max-sm:px-[20px]">
        {active === "" && (
          <h1 className="text-[20px] mb-[32px] leading-[26px] pl-[0.5px] font-semibold">
            Companies
          </h1>
        )}
        {active === "company" && (
          <div className="mb-[42.5px] flex items-center mt-[3.64px]">
            <Image
              src="/drop.svg"
              className="cursor-pointer rotate-90"
              width={17}
              height={9.08}
            />
            <p
              onClick={() => setactive("")}
              className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
            >
              Go back
            </p>
            <p
              onClick={() => setactive("")}
              className="cursor-pointer text-[16px] max-sm:hidden leading-[19.2px] max-sm:ml-[11.21px] ml-[36px] h-[17px]"
            >
              Companies{" "}
            </p>
            <Image
              src="/drop.svg"
              className="cursor-pointer mx-[11.21px] max-sm:hidden max-sm:mx-[7.21px] rotate-[-90deg]"
              width={17}
              onClick={() => setactive("company")}
              height={9.08}
            />
            <p
              onClick={() => setactive("company")}
              className="text-[16px] leading-[19.2px] max-sm:hidden border-b-[1.8px] border-black h-[17px] font-semibold"
            >
              Company Name
            </p>
          </div>
        )}
        {active === "applicants" && (
          <div className="mb-[42.5px] flex items-center mt-[3.64px]">
            <Image
              src="/drop.svg"
              className="cursor-pointer rotate-90"
              width={17}
              height={9.08}
            />
            <p
              onClick={() => setactive("company")}
              className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
            >
              Go back
            </p>
            <p
              onClick={() => setactive("")}
              className="cursor-pointer text-[16px] leading-[19.2px] max-sm:hidden max-sm:ml-[11.21px] ml-[36px] h-[17px]"
            >
              Companies{" "}
            </p>
            <Image
              src="/drop.svg"
              className="cursor-pointer mx-[11.21px] max-sm:mx-[7.21px] max-sm:hidden rotate-[-90deg]"
              width={17}
              onClick={() => setactive("company")}
              height={9.08}
            />
            <p
              onClick={() => setactive("company")}
              className="text-[16px] cursor-pointer max-sm:hidden leading-[19.2px]"
            >
              Company Name
            </p>
            <Image
              src="/drop.svg"
              className="cursor-pointer mx-[11.21px] max-sm:mx-[7.21px] max-sm:hidden rotate-[-90deg]"
              width={17}
              onClick={() => setactive("applicants")}
              height={9.08}
            />
            <p
              onClick={() => setactive("applicants")}
              className="text-[16px] cursor-pointer max-sm:hidden leading-[19.2px] border-b-[1.8px] border-black h-[17px] font-semibold"
            >
              Applicants(Job Name)
            </p>
          </div>
        )}
        {active === "recommend" && (
          <div className="mb-[45.75px] flex items-center mt-[7.89px]">
            <Image
              src="/drop.svg"
              className="cursor-pointer rotate-90"
              width={17}
              height={9.08}
            />
            <p
              onClick={() => setactive("applicants")}
              className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
            >
              Go back
            </p>
            <p
              onClick={() => setactive("")}
              className="cursor-pointer text-[16px] max-sm:ml-[11.21px] max-hamburger:hidden leading-[19.2px] ml-[36px] h-[17px]"
            >
              Companies{" "}
            </p>
            <Image
              src="/drop.svg"
              className="cursor-pointer mx-[11.21px] max-hamburger:mx-[11.21px] max-hamburger:hidden rotate-[-90deg]"
              width={17}
              onClick={() => setactive("company")}
              height={9.08}
            />
            <p
              onClick={() => setactive("company")}
              className="text-[16px] cursor-pointer max-hamburger:ml-[16px] max-md:hidden leading-[19.2px]"
            >
              Company Name
            </p>
            <Image
              src="/drop.svg"
              className="cursor-pointer mx-[11.21px] max-hamburger:mx-[7.21px] max-md:hidden rotate-[-90deg]"
              width={17}
              onClick={() => setactive("applicants")}
              height={9.08}
            />
            <p
              onClick={() => setactive("applicants")}
              className="text-[16px] cursor-pointer max-sm:hidden max-md:ml-[16px] leading-[19.2px]"
            >
              Applicants(Job Name)
            </p>
            <Image
              src="/drop.svg"
              className="cursor-pointer mx-[11.21px] max-hamburger:mx-[7.21px] max-sm:hidden rotate-[-90deg]"
              width={17}
              onClick={() => setactive("recommend")}
              height={9.08}
            />
            <p
              onClick={() => setactive("recommend")}
              className="text-[16px] cursor-pointer max-sm:hidden leading-[19.2px] border-b-[1.8px] border-black h-[17px] font-semibold"
            >
              Recommend Applicants
            </p>
          </div>
        )}
        {active === "" && (
          <div className="flex gap-[20px]">
            <section
              className={
                active === "company"
                  ? "flex gap-[20px] h-[calc(100vh-267px)] max-biggerscreen:h-auto max-biggerscreen:overflow-normal overflow-scroll flex-wrap max-biggerscreen:w-full w-[427px]"
                  : "flex gap-[20px] flex-wrap w-full"
              }
            >
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pr-[20px] relative bg-[white] rounded-[5px] py-[32px] pl-[18px]">
                <div className="flex gap-[15px] mb-[18px] items-center">
                  <div>
                    <h1 className="text-[20px] leading-[24px]">
                      Company name{" "}
                    </h1>
                    <p className="mt-[8px] text-[14px] leading-[16.8px]">
                      Company representative name
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[33px] gap-y-[18px] max-hamburger:gap-[20px] w-[250px] flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Number of openings{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">8</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex max-smallphone:w-full max-hamburger:static max-hamburger:mt-[30px] gap-[12px] top-[162px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setactive("company")}
                  >
                    View profile{" "}
                  </button>{" "}
                </div>{" "}
              </div>
            </section>
          </div>
        )}
        {active === "company" && (
          <div className="flex flex-col">
            <div className="w-full relative max-sm:pb-[20px] pb-[53.31px] max-smalllaptop:h-auto pl-[22px] h-[272px] pt-[29px] pr-[24px] bg-white rounded-[7px]">
              <div className="flex gap-[15px] mb-[24px] items-center">
                <div>
                  <h1 className="text-[28px] leading-[33.6px]">
                    Company name{" "}
                  </h1>
                </div>
              </div>
              <div className="flex gap-[16px] pb-[24.85px] border-b-[1px] border-[#00000033] max-hamburger:gap-[20px] flex-wrap">
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Company representative name{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">
                    Company representative name
                  </h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Ph. no{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">90874 63728</h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Email{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">
                    company@company.com{" "}
                  </h1>
                </div>
              </div>
              <div className="flex gap-[16px] mt-[24.85px] max-hamburger:gap-[20px] flex-wrap">
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Company URL{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">
                    www.company.com{" "}
                  </h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Founded in{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">90874 63728</h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    No. of employees{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">
                    company@company.com{" "}
                  </h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Company type{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">
                    www.company.com{" "}
                  </h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Ownership type{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">90874 63728</h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                    Business type{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">
                    company@company.com{" "}
                  </h1>
                </div>
              </div>
              <div className="flex gap-[12px] max-sm:static max-sm:mt-[30px] top-[22px] absolute right-[24px] max-smallphone:flex-col max-smallphone:w-full max-sm:gap-[8px]">
                <button
                  className="h-[37px] w-[209px] max-sm:w-[230px] max-smallphone:w-full bg-black border-[1px] border-[#000000] text-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
                  onClick={() => setactive("company")}
                >
                  Download Company Profile{" "}
                </button>{" "}
              </div>
            </div>
            <h1 className="text-[20px] mb-[16.45px] mt-[38.8px] leading-[26px] pl-[0.5px] font-semibold">
              Companies{" "}
            </h1>
            <section
              className={
                active === ""
                  ? "flex gap-[20px] h-[calc(100vh-267px)] max-biggerscreen:h-auto overflow-scroll max-biggerscreen:overflow-normal max-biggerscreen:w-auto flex-wrap w-[427px]"
                  : "flex gap-[20px] flex-wrap w-full"
              }
            >
              <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pb-[18.06px] h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px]">
                <h1 className="text-[20px] leading-[24px]">
                  Frontend Developer
                </h1>
                <div className="flex mt-[8px] max-sm:mt-[12px] max-smallerphone:flex-col max-smallerphone:gap-[8px] gap-[31px] mb-[26.94px]">
                  <p className="text-[12px] leading-[14.4px]">
                    Posted on 12 / 02 / 2024
                  </p>
                  <p className="text-[12px] leading-[14.4px]">
                    No. of openings: 02
                  </p>
                </div>
                <div className="flex w-[288px] max-smallphone:w-[calc(100%-15px)] gap-x-[33px] gap-y-[16px] flex-wrap max-smallphone:gap-[10px]]">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Job type{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Internship</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">0 - 1 yrs</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Stipend Range{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">₹ 5 - 15 k</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Location{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Remote</h1>
                  </div>
                </div>
                <div className="flex mt-[26.93px] pr-[19.5px] items-end justify-end">
                  <button
                    onClick={() => setactive("applicants")}
                    className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    View Applicants
                  </button>
                </div>
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pb-[18.06px] h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px]">
                <h1 className="text-[20px] leading-[24px]">
                  Frontend Developer
                </h1>
                <div className="flex mt-[8px] max-sm:mt-[12px] max-smallerphone:flex-col max-smallerphone:gap-[8px] gap-[31px] mb-[26.94px]">
                  <p className="text-[12px] leading-[14.4px]">
                    Posted on 12 / 02 / 2024
                  </p>
                  <p className="text-[12px] leading-[14.4px]">
                    No. of openings: 02
                  </p>
                </div>
                <div className="flex w-[288px] max-smallphone:w-[calc(100%-15px)] gap-x-[33px] gap-y-[16px] flex-wrap max-smallphone:gap-[10px]]">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Job type{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Internship</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">0 - 1 yrs</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Stipend Range{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">₹ 5 - 15 k</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Location{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Remote</h1>
                  </div>
                </div>
                <div className="flex mt-[26.93px] pr-[19.5px] items-end justify-end">
                  <button
                    onClick={() => setactive("applicants")}
                    className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    View Applicants
                  </button>
                </div>
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto pb-[18.06px] h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px]">
                <h1 className="text-[20px] leading-[24px]">
                  Frontend Developer
                </h1>
                <div className="flex mt-[8px] max-sm:mt-[12px] max-smallerphone:flex-col max-smallerphone:gap-[8px] gap-[31px] mb-[26.94px]">
                  <p className="text-[12px] leading-[14.4px]">
                    Posted on 12 / 02 / 2024
                  </p>
                  <p className="text-[12px] leading-[14.4px]">
                    No. of openings: 02
                  </p>
                </div>
                <div className="flex w-[288px] max-smallphone:w-[calc(100%-15px)] gap-x-[33px] gap-y-[16px] flex-wrap max-smallphone:gap-[10px]]">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Job type{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Internship</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">0 - 1 yrs</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Stipend Range{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">₹ 5 - 15 k</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Location{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Remote</h1>
                  </div>
                </div>
                <div className="flex mt-[26.93px] pr-[19.5px] items-end justify-end">
                  <button
                    onClick={() => setactive("applicants")}
                    className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    View Applicants
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
        {active === "applicants" && (
          <div className="flex flex-col">
            <div className="w-full relative mb-[13px] pl-[22px] pb-[32px] pt-[29px] pr-[45px] bg-white rounded-[7px]">
              <div className="flex max-smalllaptop:flex-col max-smalllaptop:items-start justify-between gap-[15px] mb-[27px] items-center">
                <h1 className="text-[28px] leading-[33.6px]">Company name </h1>
                <div className="flex gap-[16px] max-md:flex-wrap">
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Company representative name{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      Company representative name
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Ph. no{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      90874 63728
                    </h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                      Email{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      company@company.com{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <h1 className="text-[20px] leading-[24px]">Frontend Developer</h1>
              <div className="flex mt-[8px] max-sm:mt-[12px] max-sm:flex-col max-sm:gap-[8px] gap-[31px] mb-[27px]">
                <p className="text-[12px] leading-[14.4px]">
                  Posted on 12 / 02 / 2024
                </p>
                <p className="text-[12px] leading-[14.4px]">
                  No. of openings: 02
                </p>
              </div>
              <div className="flex max-smallphone:w-[calc(100%-15px)] gap-x-[33px] gap-y-[16px] flex-wrap max-smallphone:gap-[10px]]">
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px]">
                    Job type{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">Internship</h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px]">
                    Experience{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">0 - 1 yrs</h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px]">
                    Stipend Range{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">₹ 5 - 15 k</h1>
                </div>
                <div>
                  <p className="mb-[8px] text-[12px] leading-[14.4px]">
                    Location{" "}
                  </p>
                  <h1 className="text-[16px] leading-[19.2px]">Remote</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <section
                className={
                  viewprofile
                    ? "flex gap-[20px] h-[calc(100vh-267px)] max-biggerscreen:h-auto overflow-scroll max-biggerscreen:overflow-normal max-biggerscreen:w-auto flex-wrap w-[427px]"
                    : "flex gap-[20px] flex-wrap w-full"
                }
              >
                <div
                  onClick={() => setactive("recommend")}
                  className="w-[427px] cursor-pointer max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full h-[267px] relative bg-[white] flex flex-col justify-center items-center rounded-[5px]"
                >
                  <p className="text-[16px] leading-[19.2px] mb-[36.56px]">
                    Recommend Candidates
                  </p>
                  <div className="w-[53.6px] h-[53.6px] bg-[#F1F1F1] rounded-[100%] flex justify-center items-center">
                    <Image
                      src="/plus.svg"
                      className="cursor-pointer"
                      width={33.91}
                      height={33.91}
                    />
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#1C1C1C] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F6F6F6]">
                      Recommended
                    </p>
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#1C1C1C] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F6F6F6]">
                      Recommended
                    </p>
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#1C1C1C] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F6F6F6]">
                      Recommended
                    </p>
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#1C1C1C] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F6F6F6]">
                      Recommended
                    </p>
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#1C1C1C] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F6F6F6]">
                      Recommended
                    </p>
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#A99A16] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#FAFCE6]">
                      50% match
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
              </section>
              <div
                className={
                  viewprofile
                    ? "top-0 max-biggerscreen:block hidden left-0 w-full h-[100%] z-[49] fixed top-0 left-0 bg-black opacity-30"
                    : "hidden"
                }
              ></div>
              <div className={viewprofile ? style.candidates : "hidden"}>
                <Image
                  src="/close.svg"
                  className="cursor-pointer absolute right-[43.41px] max-sm:right-[20px]"
                  width={36.41}
                  height={36.41}
                  onClick={() => setviewprofile(false)}
                />
                <div className="flex max-sm:flex-col border-b-[1px] border-[#00000033] pb-[27px] mb-[22px] gap-[15px] mb-[19px] items-center">
                  <div className="w-[123.59px] h-[123.59px] bg-[#D9D9D9] rounded-[100%]"></div>
                  <div>
                    <h1 className="text-[28px] leading-[33.6px] max-sm:text-center">
                      Candidate name
                    </h1>
                    <p className="mt-[21px] max-sm:w-full max-sm:text-center max-hamburger:w-[210px] max-hamburger:mt-[14px] text-[14px] leading-[16.8px]">
                      Bangalore, Karnataka | Fresher | Graduated in 2024
                    </p>
                    <div className="flex max-sm:justify-center mt-[21px] gap-[8px]">
                      <Image
                        src="/github.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <Image
                        src="/linkedin.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex absolute max-sm:static right-[43.41px] max-md:top-[97px] top-[77.3px] gap-[7px]">
                  <p className="px-[9px] py-[5px] text-[#1C1C1C] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F6F6F6]">
                    Recommended
                  </p>
                  <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                    80% match
                  </p>
                </div>
                <div className="flex mt-[12px] mb-[10px] pb-[20px] border-b-[1px] border-[#00000033] absolute max-sm:static right-[43.41px] top-[116px] max-md:top-[132px] gap-[14px]">
                  <button className="border-[1px] border-black bg-white rounded-[6px] w-[54px] h-[36px] flex justify-center items-center">
                    <Image
                      src="/share.svg"
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button className="h-[37px] w-[152px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    Download Resume{" "}
                  </button>
                </div>
                <div className="flex gap-[15px] max-hamburger:flex-col">
                  <div className="w-[calc(100%-335px)] max-hamburger:w-full">
                    <div className="border-[1px] border-[#00000033] h-[459px] rounded-[8px] pl-[16.97px] pt-[15.73px]">
                      <h1 className="text-[16px] leading-[19.2px]">
                        Core skills
                      </h1>
                    </div>
                    <div className="border-[1px] border-[#00000033] h-[166px] rounded-[8px] pl-[16.97px] pt-[15.73px] mt-[14px]">
                      <h1 className="text-[16px] leading-[19.2px]">
                        Contact Details{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="w-[320px] max-hamburger:w-full">
                    <div className="border-[1px] border-[#00000033] h-[313px] rounded-[8px] pl-[16.97px] pt-[15.73px]">
                      <h1 className="text-[16px] leading-[19.2px]">Profile </h1>
                    </div>
                    <div className="border-[1px] border-[#00000033] h-[313px] rounded-[8px] mt-[14px] pl-[16.97px] pt-[15.73px]">
                      <h1 className="text-[16px] leading-[19.2px]">
                        Work Experience{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {active === "recommend" && (
          <div className="flex flex-col">
            <div className="w-full relative mb-[30px] pl-[22px] pb-[30.5px] pt-[28.5px] pr-[29px] bg-white rounded-[7px]">
              <div className="flex max-smalllaptop:flex-col max-smalllaptop:items-start justify-between gap-[15px] items-center">
                <h1 className="text-[28px] leading-[33.6px]">Company name </h1>
                <div className="flex max-md:flex-col gap-[27px]">
                  <div className="">
                    <h1 className="text-[20px] leading-[24px]">
                      Frontend Developer
                    </h1>
                    <div className="flex mt-[8px] max-md:flex-row max-smallphone:flex-col max-sm:mt-[12px] max-hamburger:flex-col max-hamburger:gap-[8px] gap-[31px]">
                      <p className="text-[12px] leading-[14.4px]">
                        Posted on 12 / 02 / 2024
                      </p>
                      <p className="text-[12px] leading-[14.4px]">
                        No. of openings: 02
                      </p>
                    </div>
                  </div>
                  <div className="flex max-smallphone:w-[calc(100%-15px)] gap-[16px] flex-wrap max-smallphone:gap-[10px]]">
                    <div className="mr-[17px]">
                      <p className="mb-[8px] text-[12px] leading-[14.4px]">
                        Job type{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div className="mr-[17px]">
                      <p className="mb-[8px] text-[12px] leading-[14.4px]">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        0 - 1 yrs
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px]">
                        Stipend Range{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 5 - 15 k
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px]">
                        Location{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Remote</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between max-sm:flex-col max-sm:items-start max-sm:gap-[12px] items-center mb-[18px]">
              <h1 className="text-[20px] max-md:w-[300px] max-sm:w-full capitalize leading-[26px] pl-[0.5px] font-semibold mb-[1px]">
                Select the candidates to be recommended{" "}
              </h1>
              <button className="h-[37px] w-[192px] max-smallphone:w-full flex justify-center items-center gap-[4px] max-smallphone:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                Recommend Candidates{" "}
              </button>
            </div>
            <div className="mb-[18px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center justify-between">
              <div className="flex gap-[24px] justify-between max-md:gap-[8px] max-sm:flex-col max-hamburger:justify-between max-hamburger:w-full items-center">
                <Image
                  src="/drop.svg"
                  className={
                    isOpen
                      ? "absolute max-sm:left-auto max-lg:left-[179px] rotate-180 h-[10.75px] w-[19.98px] max-sm:right-[40px] left-[259px] cursor-pointer top-[35.08px]"
                      : "absolute max-sm:left-auto max-lg:left-[179px] h-[10.75px] w-[19.98px] left-[259px] cursor-pointer max-sm:right-[35px] max-smallerphone:right-[25px] top-[35.08px]"
                  }
                  width={19.98}
                  height={10.75}
                />
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="pl-[15.71px] max-sm:w-full w-[278px] max-lg:w-[198px] h-[48px] bg-white cursor-pointer border-[1px] border-black rounded-[6px] flex items-center max-smallerphone:text-base text-[14px] leading-[16.8px]"
                >
                  <p className=" max-sm:w-[95%]">{item}</p>
                </div>{" "}
                {isOpen && (
                  <div className="bg-white absolute max-md:w-[90%] border-[1px] border-black top-[63px] z-[22222] cursor-pointer">
                    <ul>
                      <li
                        onClick={() => setItem("Frontend Developer")}
                        className="pl-[15.71px] max-sm:px-[15px] max-sm:w-full w-[274.5px] max-lg:w-[179px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[16px] leading-[19.2px]"
                      >
                        Frontend Developer
                      </li>
                      <li
                        onClick={() => setItem("Data Analyst")}
                        className="pl-[15.71px] max-sm:px-[15px] max-sm:w-full w-[274.5px] max-lg:w-[179px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[16px] leading-[19.2px]"
                      >
                        Data Analyst
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <input
                type="search"
                name=""
                className="w-[323px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search applicants"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[83px] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[72px] absolute right-[36.92px]"
                width={24}
                height={24}
              />
            </div>
            <div className="flex gap-[20px]">
              <section
                className={
                  viewprofile
                    ? "flex gap-[20px] h-[calc(100vh-267px)] max-biggerscreen:h-auto overflow-scroll max-biggerscreen:overflow-normal max-biggerscreen:w-auto flex-wrap w-[427px]"
                    : "flex gap-[20px] flex-wrap w-full"
                }
              >
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                  <div className="flex gap-[7px] pr-[19.5px] justify-between mb-[19px]">
                    <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                      80% match
                    </p>
                    <div className="flex items-center">
                      <input type="checkbox" id="select" />
                      <label className="ml-[8px] text-[12px] leading-[14.4px] mt-[3px]">
                        Select
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-[15px] mb-[19px] items-center">
                    <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
                    <div>
                      <h1 className="text-[20px] leading-[24px]">
                        Candidate name
                      </h1>
                      <p className="mt-[8px] text-[14px] leading-[16.8px]">
                        MERN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[33px] max-hamburger:gap-[20px] max-smallerphone:w-[250px] max-smallphone:flex-wrap">
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Available to hire{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        Immediate
                      </h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Experience{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                    </div>
                    <div>
                      <p className="mb-[8px] text-[12px] leading-[14.4px] opacity-80">
                        Expected salary{" "}
                      </p>
                      <h1 className="text-[16px] leading-[19.2px]">
                        ₹ 6 - 8 LPA
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                    <button
                      className="h-[37px] w-[107px] max-sm:w-[100px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                      onClick={() => setviewprofile(true)}
                    >
                      View profile{" "}
                    </button>{" "}
                  </div>
                </div>
              </section>
              <div
                className={
                  viewprofile
                    ? "top-0 max-biggerscreen:block hidden left-0 w-full h-[100%] z-[49] fixed top-0 left-0 bg-black opacity-30"
                    : "hidden"
                }
              ></div>
              <div className={viewprofile ? style.candidates : "hidden"}>
                <Image
                  src="/close.svg"
                  className="cursor-pointer absolute right-[43.41px] max-sm:right-[20px]"
                  width={36.41}
                  height={36.41}
                  onClick={() => setviewprofile(false)}
                />
                <div className="flex max-sm:flex-col border-b-[1px] border-[#00000033] pb-[27px] mb-[22px] gap-[15px] mb-[19px] items-center">
                  <div className="w-[123.59px] h-[123.59px] bg-[#D9D9D9] rounded-[100%]"></div>
                  <div>
                    <h1 className="text-[28px] leading-[33.6px] max-sm:text-center">
                      Candidate name
                    </h1>
                    <p className="mt-[21px] max-sm:w-full max-sm:text-center max-hamburger:w-[210px] max-hamburger:mt-[14px] text-[14px] leading-[16.8px]">
                      Bangalore, Karnataka | Fresher | Graduated in 2024
                    </p>
                    <div className="flex max-sm:justify-center mt-[21px] gap-[8px]">
                      <Image
                        src="/github.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <Image
                        src="/linkedin.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex absolute max-sm:static right-[43.41px] max-md:top-[97px] top-[77.3px] gap-[7px]">
                  <p className="px-[9px] py-[5px] text-[#1C1C1C] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F6F6F6]">
                    Recommended
                  </p>
                  <p className="px-[9px] py-[5px] text-[#18BE50] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#F1FFF2]">
                    80% match
                  </p>
                </div>
                <div className="flex mt-[12px] mb-[10px] pb-[20px] border-b-[1px] border-[#00000033] absolute max-sm:static right-[43.41px] top-[116px] max-md:top-[132px] gap-[14px]">
                  <button className="border-[1px] border-black bg-white rounded-[6px] w-[54px] h-[36px] flex justify-center items-center">
                    <Image
                      src="/share.svg"
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button className="h-[37px] w-[152px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    Download Resume{" "}
                  </button>
                </div>
                <div className="flex gap-[15px] max-hamburger:flex-col">
                  <div className="w-[calc(100%-335px)] max-hamburger:w-full">
                    <div className="border-[1px] border-[#00000033] h-[459px] rounded-[8px] pl-[16.97px] pt-[15.73px]">
                      <h1 className="text-[16px] leading-[19.2px]">
                        Core skills
                      </h1>
                    </div>
                    <div className="border-[1px] border-[#00000033] h-[166px] rounded-[8px] pl-[16.97px] pt-[15.73px] mt-[14px]">
                      <h1 className="text-[16px] leading-[19.2px]">
                        Contact Details{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="w-[320px] max-hamburger:w-full">
                    <div className="border-[1px] border-[#00000033] h-[313px] rounded-[8px] pl-[16.97px] pt-[15.73px]">
                      <h1 className="text-[16px] leading-[19.2px]">Profile </h1>
                    </div>
                    <div className="border-[1px] border-[#00000033] h-[313px] rounded-[8px] mt-[14px] pl-[16.97px] pt-[15.73px]">
                      <h1 className="text-[16px] leading-[19.2px]">
                        Work Experience{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
