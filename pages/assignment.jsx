import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/style.module.css";
import { useState } from "react";
export default function Learn() {
  return (
    <>
      <Navbar />
      <main className="pt-[63.51px] px-[60px] pb-[85px]">
        <div className="w-full pt-[25.52px] pl-[29.45px] pb-[52.49px] rounded-[6px] bg-white">
          <p className="p-[8px] bg-[#0C6926] rounded-[24px] inline text-[14px] text-white leading-[18.2px]">
            New Assignment
          </p>
          <h1 className="font-semibold mt-[28.72px] text-[20px] leading-[26px]">
            Faucibus nec adipiscing lacus faucibus rhoncus elit consequat.
            Suscipit lacus.
          </h1>
          <p className="mt-[20.14px] w-[587px]">
            Mi mi morbi molestie integer lacinia arcu leo purus. Fringilla
            volutpat tellus vitae est. Sapien eget amet elit placerat. Porttitor
            urna egestas nisi viverra quam magnis lectus scelerisque integer.
            Est viverra augue pulvinar quisque. Arcu luctus nec duis
            suspendisse. Sagittis est donec at ut tortor vulputate in. Ut
            pharetra dis augue duis vitae viverra id. Aliquam aliquet turpis
            vulputate.
          </p>
          <button className="py-[10px] px-[24px] border-[1px] border-black rounded-[6px] text-base font-semibold mt-[28.72px] mb-[33.75px]">
            View Resources
          </button>
          <div className="pt-[33.74px] flex gap-[25.55px] border-t-[1px] border-[#00000033]">
            <div>
              <p className="text-[#2C2E32] mb-[10px] text-[14px]">
                Paste link to submit assignment
              </p>
              <input
                type="text"
                className="border-[0.5px] rounded-[4px] py-[18.5px] px-[16.27px] w-[309px] italic text-[14px] border-[#00000080]"
                placeholder="Click to paste link"
                name=""
                id=""
              />
            </div>
            <button className="bg-[#30E29D] mt-[37.46px] py-[10px] px-[24px] rounded-[6px] text-base font-semibold h-[43.07px]">
              Submit Assignment
            </button>
          </div>
        </div>
        <div className="mt-[54.99px]">
          <h1 className="font-semibold text-[20px] leading-[26px] mb-[19px]">
            Previous assignments
          </h1>
          <div className="pt-[14px] h-[77px] pb-[15px] pl-[21px] pr-[31px] rounded-[8px] flex justify-between items-center bg-white">
            <input
              type="date"
              name="calender"
              className="hidden"
              id="calender"
            />
            <label
              htmlFor="calender"
              className="h-[48px] flex items-center justify-between border-[#0000004D] border-[1px] py-[12px] px-[14.28px] w-[244px] rounded-[6px]"
            >
              <p className="text-[14px]">Select date</p>
              <Image src="/calender.svg" width={24} height={24} />
            </label>
            <div className="flex items-center gap-[4px]">
              <input type="checkbox" name="unsubmitted" id="unsubmitted" />
              <label htmlFor="unsubmitted" className="text-[14px]">
                Show only unsubmitted assignments
              </label>
            </div>
          </div>
        </div>
        <div className="h-[609px] pb-[20px] overflow-scroll w-full bg-white mt-[18.5px] rounded-[8px]">
          <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
            <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
              Date
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 w-[97px] mr-[50px]">
              Topic
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 w-[271px] mr-[7.26px]">
              Assignment
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 mr-[37px]">
              Date assigned
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 mr-[242px]">
              Date submitted
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 border-l-[1px] border-[#00000033] pt-[14.5px] pb-[13.5px] pl-[26.53px]">
              Grade assignment
            </p>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
            <div className="flex items-center">
              <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-xl:w-[30px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px]">
                Vitae facilisis
              </p>
              <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px]">
                Erat mattis curabitur pretium sit
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[52px]">
                02/20/2024
              </p>
              <p className="text-[14px] leading-[16.8px] mr-[55px]">
                02/20/2024
                <button className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px]">
                  View Assignment
                </button>
              </p>
              <p className="text-[14px] leading-[16.8px] text-[14px] underline flex items-center gap-[22.09px] font-bold opacity-70 border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                <div className="flex gap-[4.76px]">
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/yellow.svg" width={24.17} height={24.17} />
                  <Image src="/blank.svg" width={24.17} height={24.17} />
                </div>
                View Remarks
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[32px] mt-[61px]">
          <div className="flex gap-[16px] absolute right-[0px]">
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
        </div>
      </main>
    </>
  );
}
