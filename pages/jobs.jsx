import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Jobs() {
  const [applied, setapplied] = useState(false);
  const handleapplied = () => {
    setapplied(!applied);
  };
  return (
    <>
      <Navbar />
      <section className="px-[80px] pb-[65px] pt-[51.08px]">
        <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
          Job Opportunities
        </h1>{" "}
        {applied ? (
          <>
            <div className="flex mb-[18px] gap-[16px]">
              <button
                onClick={handleapplied}
                className="h-[43px] capitalize w-[149px] bg-[black] text-white border-[0px] border-black rounded-[28px] text-[16px] leading-[19.2px]"
              >
                new openings{" "}
              </button>{" "}
              <button
                onClick={handleapplied}
                className="h-[43px] w-[168px] bg-[transparent] text-black rounded-[28px] border-[1px] border-black text-[16px] leading-[19.2px]"
              >
                Applied positions{" "}
              </button>{" "}
            </div>
            <div className="w-full relative h-[1007px] bg-white rounded-[5px] pt-[29px] pl-[22px] pb-[38px] pb-[108px]">
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[93px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Apply Now{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex gap-[16px] absolute right-[38px] bottom-[37px]">
                <div className="w-[32px] h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
                <div className="flex gap-[8px]">
                  <p className="w-[32px] text-[17.23px] cursor-pointer bg-[#000] text-white leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#000]">
                    1
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    2
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    3
                  </p>
                  <p className="w-[25px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                    .....
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    42
                  </p>
                </div>
                <div className="w-[32px] rotate-180 h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex mb-[18px] gap-[16px]">
              <button
                onClick={handleapplied}
                className="h-[43px] capitalize w-[149px] bg-[transparent] text-blacks border-[1px] border-black rounded-[28px] text-[16px] leading-[19.2px]"
              >
                new openings{" "}
              </button>{" "}
              <button
                onClick={handleapplied}
                className="h-[43px] w-[168px] bg-[black] text-white rounded-[28px] border-[0] border-black text-[16px] leading-[19.2px]"
              >
                Applied positions{" "}
              </button>{" "}
            </div>{" "}
            <div className="w-full relative h-[1007px] bg-white rounded-[5px] pt-[29px] pl-[22px] pb-[38px] pb-[108px]">
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex justify-between py-[16px] pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] leading-[26px]">
                    Position name.......................................
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px]">
                  <p className="text-[16px] leading-[20.8px]">
                    Company name.............
                  </p>
                  <p className="text-[16px] leading-[20.8px] pr-[5px]">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px]">Location.....</p>
                  <button className="h-[43px] ml-[117px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
              </div>
              <div className="flex gap-[16px] absolute right-[38px] bottom-[37px]">
                <div className="w-[32px] h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
                <div className="flex gap-[8px]">
                  <p className="w-[32px] text-[17.23px] cursor-pointer bg-[#000] text-white leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#000]">
                    1
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    2
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    3
                  </p>
                  <p className="w-[25px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                    .....
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    42
                  </p>
                </div>
                <div className="w-[32px] rotate-180 h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </section>
    </>
  );
}
