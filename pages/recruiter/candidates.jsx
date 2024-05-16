import RecruiterNavbar from "@/components/recruiternavbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "@/styles/style.module.css";

export default function Jobs() {
  const [shortlisted, setshortlisted] = useState(false);
  const [viewshortlistedprofile, setviewshortlistedprofile] = useState(false);
  const [viewprofile, setviewprofile] = useState(false);
  const [selectDate, setselectDate] = useState(true);
  const [selectslot, setselectslot] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [course_selected, setcourse_selected] = useState("");
  const [help, sethelp] = useState("");
  
  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };
  const handleReasonSelect = (option) => {
    setcourse_selected(option);
    setIsOpen(false);
  };
  const characterCount = inputValue.length;

  const toggleMenu = (set, open) => {
    set(!open);
  };
  const handleOptionSelect = (option) => {
    sethelp(option);
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);
    setIsOpen8(false);
    setIsOpen9(false);
  };
  const handleshortlisted = () => {
    setshortlisted(!shortlisted);
  };
  return (
    <>
      <RecruiterNavbar />
      <main className="px-[59.5px] pt-[41.36px] max-md:px-[40px] pb-[50px] max-sm:px-[20px]">
        <h1 className="text-[20px] leading-[26px] pl-[0.5px] font-semibold mb-[1px]">
          Candidates{" "}
        </h1>
        <div className="my-[23px] bg-white pl-[16px] mx-[0.5px] max-smallphone:flex-col max-smallphone:items-start max-smallphone:p-[20px] relative py-[20px] max-md:px-[20px] max-sm:px-[15px] pr-[23px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center justify-between">
          <div className="flex gap-[16px] max-smallphone:flex-wrap max-smallphone:w-full">
            <button
              onClick={handleshortlisted}
              className={
                shortlisted
                  ? "h-[37px] max-smallphone:text-sm capitalize max-smallphone:w-full w-[180px] max-sm:w-[170px] bg-[white] text-black border-[1px] border-black rounded-[6px] text-[14px] leading-[16.8px]"
                  : "h-[37px] max-smallphone:text-sm capitalize max-smallphone:w-full w-[180px] max-sm:w-[170px] bg-[black] text-white border-[1px] border-black rounded-[6px] text-[14px] leading-[16.8px]"
              }
            >
              Recommendations (12)
            </button>{" "}
            <button
              onClick={handleshortlisted}
              className={
                shortlisted
                  ? "h-[37px] max-smallphone:text-sm capitalize max-smallphone:w-full w-[130px] bg-[black] text-white border-[1px] border-black rounded-[6px] text-[14px] leading-[16.8px]"
                  : "h-[37px] max-smallphone:text-sm capitalize max-smallphone:w-full w-[130px] bg-[white] text-black border-[1px] border-black rounded-[6px] text-[14px] leading-[16.8px]"
              }
            >
              Shortlisted (10){" "}
            </button>{" "}
          </div>
          <div className="flex gap-[4px] max-sm:hidden items-center">
            <Image
              src="/filter.svg"
              className="cursor-pointer"
              width={23.35}
              height={23.35}
            />
            <p className="text-[14px] leading-[16.8px]">Filter by</p>
          </div>
        </div>
        {shortlisted ? (
          <div className="flex gap-[20px]">
            <section
              className={
                viewshortlistedprofile
                  ? "flex gap-[20px] h-[calc(100vh-267px)] max-biggerscreen:h-auto max-biggerscreen:overflow-normal overflow-scroll flex-wrap max-biggerscreen:w-full w-[427px]"
                  : "flex gap-[20px] flex-wrap w-full"
              }
            >
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen, isOpen)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen1, isOpen1)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen1 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen2, isOpen2)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen2 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen3, isOpen3)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen3 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen4, isOpen4)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen4 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen5, isOpen5)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen5 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen6, isOpen6)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen6 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen7, isOpen7)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen7 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen8, isOpen8)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen8 && (
                    <div className="bg-white max-smallerphone:top-[353px] rounded-[4px] max-md:w-[140px] max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallphone:top-[291px] max-smallphone:left-0 max-sm:w-[175px] max-sm:left-[135px] max-md:left-[80px] max-sm:w-full max-sm:left-0 absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Expected salary{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">
                      ₹ 6 - 8 LPA
                    </h1>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[30px] absolute max-smallphone:static right-[19.5px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[37px] w-[107px] max-sm:w-[230px] max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]"
                    onClick={() => setviewshortlistedprofile(true)}
                  >
                    View profile{" "}
                  </button>{" "}
                  <div
                    onClick={() => toggleMenu(setIsOpen9, isOpen9)}
                    className="h-[37px] w-[103.08px] max-sm:w-full bg-black cursor-pointer justify-center flex items-center text-white gap-[4px] rounded-[6px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    <p>Options</p>
                    <Image
                      src="/drop.svg"
                      className="h-[6.93px] invert w-[12.88px] cursor-pointer"
                      width={16.08}
                      height={16.08}
                    />
                  </div>{" "}
                  {isOpen9 && (
                    <div className="bg-white rounded-[4px] max-md:w-[140px] max-md:left-[80px] max-sm:w-[175px] max-sm:left-[135px] absolute border-[1px] left-[40px] border-black top-[37px] z-[22222] cursor-pointer max-smallphone:w-[calc(100%-50px)] max-smallphone:left-[18px] max-smallerphone:top-[353px] max-smallphone:top-[291px]">
                      <ul>
                        <li
                          onClick={() =>
                            handleOptionSelect("Schedule interview")
                          }
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Schedule interview{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Give assignment")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Give assignment{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Send message")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Send message{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Download resume")}
                          className="pl-[12.07px] w-[180px] border-b-[1px] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Download resume{" "}
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Reject candidate")}
                          className="pl-[12.07px] w-[180px] text-[#D41717] max-md:w-full cursor-pointer pt-[12.5px] pb-[14.5px] text-[12px] leading-[14.4px]"
                        >
                          Reject candidate{" "}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
            <div
              className={
                viewshortlistedprofile
                  ? "top-0 left-0 w-full hidden max-biggerscreen:block h-[100%] z-[49] fixed top-0 left-0 bg-black opacity-30"
                  : "hidden"
              }
            ></div>
           <div className={viewshortlistedprofile ? style.candidates : "hidden"}>
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
        ) : (
          <div className="flex gap-[20px]">
            <section
              className={
                viewprofile
                  ? "flex gap-[20px] h-[calc(100vh-267px)] max-biggerscreen:h-auto overflow-scroll max-biggerscreen:overflow-normal max-biggerscreen:w-auto flex-wrap w-[427px]"
                  : "flex gap-[20px] flex-wrap w-full"
              }
            >
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
                </div>
              </div>
              <div className="w-[427px] max-biggerscreen:w-[32%] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto max-smalllaptop:pb-[80px] max-smallphone:pb-[30px] h-[267px] relative bg-[white] rounded-[5px] pt-[22px] pl-[18.5px]">
                <div className="flex gap-[7px] mb-[19px]">
                  <p className="px-[9px] py-[5px] text-[#B15F13] font-semibold rounded-[27px] text-[12px] leading-[14.4px] bg-[#FFF1F1]">
                    20% match
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
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Available to hire{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Immediate</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
                      Experience{" "}
                    </p>
                    <h1 className="text-[16px] leading-[19.2px]">Fresher</h1>
                  </div>
                  <div>
                    <p className="mb-[8px] text-[12px] leading-[14.4px]">
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
                  <button className="h-[37px] w-[105px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    <span className="text-[20px]">+</span>
                    Shortlist{" "}
                  </button>
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
        )}
        {help === "Schedule interview" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-md:w-[calc(100%-80px)] max-sm:px-[20px] max-xl:h-[90vh] max-xl:top-[5vh] max-xl:overflow-scroll max-sm:w-[calc(100%-40px)] max-sm:left-[20px] max-md:left-[40px] py-[25.79px] pl-[36.5px] pr-[40.08px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <h1 className="text-[20px] leading-[24px] mt-[10.21px] font-semibold mb-[27.21px]">
                Schedule Interview
              </h1>
              <p className="text-[14px] leading-[16.8px]">Select date</p>
              <input
                type="date"
                onClick={() => setselectDate(false)}
                name=""
                id=""
                className="w-[237px] h-[58px] border-[1px] rounded-[6px] border-black mt-[12px] pl-[14.28px] pr-[16.25px] text-[20px]"
              />
              {selectDate && (
                <p className="text-[16px] max-sm:left-[35px] absolute top-[134px] pr-[50px] bg-white left-[50.78px]">
                  Select date
                </p>
              )}
              <p className="text-[14px] leading-[16.8px] mt-[24px] mb-[12px]">
                Select slot
              </p>
              <div className="flex flex-wrap mb-[24px] gap-[12px]">
                <div
                  onClick={() => setselectslot("time1")}
                  className={
                    selectslot === "time1"
                      ? "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer bg-black text-white"
                      : "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer"
                  }
                >
                  <p className="text-[14px] leading-[16.8px]">09 : 30 AM</p>
                </div>
                <div
                  onClick={() => setselectslot("time2")}
                  className={
                    selectslot === "time2"
                      ? "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer bg-black text-white"
                      : "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer"
                  }
                >
                  {" "}
                  <p className="text-[14px] leading-[16.8px]">11 : 30 AM</p>
                </div>
                <div
                  onClick={() => setselectslot("time3")}
                  className={
                    selectslot === "time3"
                      ? "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer bg-black text-white"
                      : "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer"
                  }
                >
                  {" "}
                  <p className="text-[14px] leading-[16.8px]">3 : 00 PM</p>
                </div>
                <div
                  onClick={() => setselectslot("time4")}
                  className={
                    selectslot === "time4"
                      ? "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer bg-black text-white"
                      : "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer"
                  }
                >
                  {" "}
                  <p className="text-[14px] leading-[16.8px]">5 : 00 PM</p>
                </div>
                <div
                  onClick={() => setselectslot("time5")}
                  className={
                    selectslot === "time5"
                      ? "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer bg-black text-white"
                      : "w-[110px] flex justify-center items-center h-[53px] rounded-[6px] border-[1px] border-black cursor-pointer"
                  }
                >
                  {" "}
                  <p className="text-[14px] leading-[16.8px]">7 : 00 PM</p>
                </div>
              </div>
              <div className="flex justify-between max-sm:flex-wrap gap-[12px]">
                <p className="text-[14px] leading-[16.8px]">Add attendants</p>
                <p className="text-[12px] leading-[14.4px]">
                  An email with the meeting link will be sent
                </p>
              </div>
              <input
                type="text"
                name=""
                id=""
                className="w-full mb-[24px] h-[58px] border-[1px] rounded-[6px] border-black mt-[12px] pl-[14.28px] pr-[16.25px] placeholder:text-[14px]"
                placeholder="Enter email"
              />
              <p className="text-[14px] leading-[16.8px]">Add meeting link</p>
              <input
                type="text"
                name=""
                id=""
                className="w-full mb-[24px] h-[58px] border-[1px] rounded-[6px] border-black mt-[12px] pl-[14.28px] pr-[16.25px] placeholder:text-[14px]"
                placeholder="Enter Meet / Zoom / Teams link"
              />
              <button
                onClick={() => sethelp("send invitation")}
                className="h-[62px] w-[calc(100%-4px)] max-smallphone:w-full bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
              >
                Send Invitation{" "}
              </button>
            </div>
          </>
        )}
        {help === "Give assignment" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-md:w-[calc(100%-80px)] max-sm:px-[20px] max-xl:h-[90vh] max-xl:top-[5vh] max-xl:overflow-scroll max-sm:w-[calc(100%-40px)] max-sm:left-[20px] max-md:left-[40px] py-[25.79px] pl-[36.5px] pr-[40.08px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <h1 className="text-[20px] leading-[24px] mt-[10.21px] font-semibold mb-[27.21px]">
                Give assignment{" "}
              </h1>
              <p className="text-[14px] leading-[16.8px]">
                Enter Assignment details
              </p>
              <textarea
                name=""
                placeholder="Enter description"
                className="w-full text-black placeholder:text-black h-[100px] relative resize-none mb-[24px] border-[1px] rounded-[6px] border-black mt-[12px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] leading-[16.8px] top-[180.3px] right-[65.2px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] mb-[12px] leading-[16.8px]">
                Enter Assignment details
              </p>
              <input type="file" id="fileupload" className="hidden" />
              <label
                htmlFor="fileupload"
                className="cursor-pointer max-sm:text-[11px] mb-[24px] h-[58px] flex w-full max-sm:pr-[20px] max-sm:w-full text-[14px] leading-[16.8px] py-[20.5px] pl-[14.28px] rounded-[6px] border-[1px] text-[#000000] border-[#000000]"
              >
                Click to upload your resume
              </label>
              <p className="text-[14px] leading-[16.8px]">
                Select submission date
              </p>
              <input
                type="date"
                onClick={() => setselectDate(false)}
                name=""
                id=""
                className="w-[237px] h-[58px] mb-[24px] border-[1px] rounded-[6px] border-black mt-[12px] pl-[14.28px] pr-[16.25px] text-[20px]"
              />
              {selectDate && (
                <p className="text-[16px] max-sm:left-[35px] absolute top-[403.42px] pr-[50px] bg-white left-[50.78px]">
                  Select date
                </p>
              )}
              <button
                onClick={() => sethelp("send assignment")}
                className="h-[62px] w-[calc(100%-4px)] max-smallphone:w-full bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
              >
                Send Assignment{" "}
              </button>
            </div>
          </>
        )}
        {help === "Send message" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-md:w-[calc(100%-80px)] max-sm:px-[20px] max-xl:h-[90vh] max-xl:top-[5vh] max-xl:overflow-scroll max-sm:w-[calc(100%-40px)] max-sm:left-[20px] max-md:left-[40px] py-[25.79px] pl-[36.5px] pr-[40.08px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <h1 className="text-[20px] leading-[24px] mt-[10.21px] font-semibold mb-[27.21px]">
                Send message{" "}
              </h1>
              <p className="text-[14px] leading-[16.8px]">Enter Message </p>
              <textarea
                name=""
                placeholder="Enter Message"
                className="w-full text-black placeholder:text-black h-[155px] relative resize-none mb-[24px] border-[1px] rounded-[6px] border-black mt-[12px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={250}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] leading-[16.8px] top-[235.3px] right-[65.2px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/250
              </div>
              <button
                onClick={() => sethelp("send message")}
                className="h-[62px] w-[calc(100%-4px)] max-smallphone:w-full bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
              >
                Send Message{" "}
              </button>
            </div>
          </>
        )}
        {help === "Reject candidate" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-md:w-[calc(100%-80px)] max-sm:px-[20px] max-xl:h-[90vh] max-xl:top-[5vh] max-xl:overflow-scroll max-sm:w-[calc(100%-40px)] max-sm:left-[20px] max-md:left-[40px] py-[25.79px] pl-[36.5px] pr-[40.08px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <h1 className="text-[20px] leading-[24px] mt-[10.21px] font-semibold mb-[27.21px]">
                Reject candidate{" "}
              </h1>
              <p className="text-[14px] leading-[16.8px]">
                Select the reason of rejection
              </p>
              <Image
                src="/drop.svg"
                className="absolute max-sm:right-[30px] max-md:right-[60px] right-[62px] cursor-pointer top-[143.21px]"
                width={17}
                height={17}
              />
              <div
                onClick={() => toggleMenu(setIsOpen10, isOpen10)}
                className="pl-[14.28px] h-[62px] mt-[12px] bg-white cursor-pointer w-full border-[1px] border-black rounded-[6px] pt-[22.5px] pb-[22.5px] text-[14px] leading-[16.8px]"
              >
                {" "}
                {course_selected || "Select the reason of rejection"}
              </div>{" "}
              {isOpen10 && (
                <div className="bg-white max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] absolute border-[1px] border-black top-[177px] z-[22222] cursor-pointer">
                  <ul>
                    <li
                      onClick={() =>
                        handleReasonSelect("No-code, Low-code Development")
                      }
                      className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                    >
                      No-code, Low-code Development
                    </li>
                    <li
                      onClick={() =>
                        handleReasonSelect("Artificial Intelligence (AI/ML)")
                      }
                      className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                    >
                      Artificial Intelligence (AI/ML)
                    </li>
                    <li
                      onClick={() => handleReasonSelect("Data Analytics")}
                      className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                    >
                      Data Analytics
                    </li>
                    <li
                      onClick={() =>
                        handleReasonSelect("Full Stack Development")
                      }
                      className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                    >
                      Full Stack Development
                    </li>
                  </ul>
                </div>
              )}
              <p className="text-[14px] leading-[16.8px] mt-[24px]">
                Enter Message{" "}
              </p>
              <textarea
                name=""
                placeholder="Enter Message"
                className="w-full text-black placeholder:text-black h-[86px] relative resize-none border-[1px] rounded-[6px] border-black mt-[12px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={250}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black opacity-70 absolute max-sm:right-[35px] leading-[16.8px] top-[286.3px] right-[65.2px] text-[12px] leading-[14.4px]">
                {characterCount}/250
              </div>
              <div className="mt-[41px] max-smallphone:flex-col flex gap-[24px]">
                <button
                  onClick={() => sethelp("")}
                  className="h-[56px] w-[203px] max-smallphone:w-full bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
                >
                  Reject candidate{" "}
                </button>
                <button
                  onClick={() => sethelp("")}
                  className="h-[56px] w-[126px] max-smallphone:w-full bg-white text-black border-[1px] border-black rounded-[6px] text-[17.95px] leading-[21.54px]"
                >
                  Go back{" "}
                </button>
              </div>
            </div>
          </>
        )}
        {help === "send invitation" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-smallphone:h-[270px] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] h-[365px] py-[25.79px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer absolute max-sm:right-[10px] max-sm:top-[10px] right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("invitation error")}
              />
              <div className="flex flex-col justify-center items-center h-full gap-[30px]">
                <Image src="/Frame 18.svg" width={85.48} height={85.48} />{" "}
                <h1 className="text-[26.5px] max-smallerphone:w-[200px] font-bold text-center leading-[31.5px]">
                  Interview scheduled{" "}
                </h1>
              </div>
            </div>
          </>
        )}
        {help === "invitation error" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] h-[439px] py-[25.79px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:top-[10px] max-sm:right-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <div className="flex flex-col justify-center items-center h-full">
                <div className="bg-[#FCCE98] rounded-[50%] w-[85.48px] mb-[30px] h-[85.48px] flex items-center justify-center">
                  <p className="text-[44.26px] text-[#D41717]">!</p>
                </div>
                <h1 className="text-[26.5px] max-sm:w-[220px] w-[265.43px] font-bold text-center leading-[31.5px]">
                  Interview scheduling unsuccessful{" "}
                </h1>
                <p className="text-[14px] leading-[16.8px] mt-[17.08px] mb-[41.49px]">
                  Err Code : 25R093
                </p>
                <div className="flex gap-[12px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[39px] max-sm:w-[110px] w-[131px] max-smallphone:w-full max-hamburger:w-[170px] bg-white border-[1px] border-[#000000] text-[#000000] rounded-[4px] text-[16px] leading-[19.2px]"
                    onClick={() => sethelp("Schedule interview")}
                  >
                    Back to form
                  </button>{" "}
                  <Link href={"/recruiter/support"}>
                    <button className="h-[39px] max-sm:w-[160px] w-[181.5px] flex justify-center items-center gap-[8px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                      <Image
                        src="/call.svg"
                        className="max-hamburger:w-[27px] invert"
                        width={17.5}
                        height={17.5}
                      />{" "}
                      Contact Support{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        {help === "send assignment" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-smallphone:h-[270px] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] h-[365px] py-[25.79px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("assignment error")}
              />
              <div className="flex flex-col justify-center items-center h-full gap-[30px]">
                <Image src="/Frame 18.svg" width={85.48} height={85.48} />{" "}
                <h1 className="text-[26.5px] font-bold text-center leading-[31.5px]">
                  Assignment sent!{" "}
                </h1>
              </div>
            </div>
          </>
        )}
        {help === "assignment error" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] h-[439px] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] py-[25.79px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <div className="flex flex-col justify-center items-center h-full">
                <div className="bg-[#FCCE98] rounded-[50%] w-[85.48px] mb-[30px] h-[85.48px] flex items-center justify-center">
                  <p className="text-[44.26px] text-[#D41717]">!</p>
                </div>
                <h1 className="text-[26.5px] w-[265.43px] font-bold text-center leading-[31.5px]">
                  Couldn’t send assignment{" "}
                </h1>
                <p className="text-[14px] leading-[16.8px] mt-[17.08px] mb-[41.49px]">
                  Err Code : 25R093
                </p>
                <div className="flex gap-[12px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[39px] w-[131px] max-smallphone:w-full max-hamburger:w-[170px] bg-white border-[1px] border-[#000000] text-[#000000] rounded-[4px] text-[16px] leading-[19.2px]"
                    onClick={() => sethelp("Give assignment")}
                  >
                    Back to form
                  </button>{" "}
                  <Link href={"/recruiter/support"}>
                    <button className="h-[39px] w-[181.5px] flex justify-center items-center gap-[8px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                      <Image
                        src="/call.svg"
                        className="max-hamburger:w-[27px] invert"
                        width={17.5}
                        height={17.5}
                      />{" "}
                      Contact Support{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        {help === "send message" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-smallphone:h-[270px] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] h-[365px] py-[25.79px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("message error")}
              />
              <div className="flex flex-col justify-center items-center h-full gap-[30px]">
                <Image src="/Frame 18.svg" width={85.48} height={85.48} />{" "}
                <h1 className="text-[26.5px] font-bold text-center leading-[31.5px]">
                  Message sent!{" "}
                </h1>
              </div>
            </div>
          </>
        )}
        {help === "message error" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[530px] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] h-[439px] py-[25.79px] fixed top-[30px] left-[calc(50%-265px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer max-sm:right-[10px] max-sm:top-[10px] absolute right-[40.08px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <div className="flex flex-col justify-center items-center h-full">
                <div className="bg-[#FCCE98] rounded-[50%] w-[85.48px] mb-[30px] h-[85.48px] flex items-center justify-center">
                  <p className="text-[44.26px] text-[#D41717]">!</p>
                </div>
                <h1 className="text-[26.5px] w-[265.43px] font-bold text-center leading-[31.5px]">
                  Your message was not sent{" "}
                </h1>
                <p className="text-[14px] leading-[16.8px] mt-[17.08px] mb-[41.49px]">
                  Err Code : 25R093
                </p>
                <div className="flex gap-[12px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button
                    className="h-[39px] w-[131px] max-smallphone:w-full max-hamburger:w-[170px] bg-white border-[1px] border-[#000000] text-[#000000] rounded-[4px] text-[16px] leading-[19.2px]"
                    onClick={() => sethelp("Send message")}
                  >
                    Back to form
                  </button>{" "}
                  <Link href={"/recruiter/support"}>
                    <button className="h-[39px] w-[181.5px] flex justify-center items-center gap-[8px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                      <Image
                        src="/call.svg"
                        className="max-hamburger:w-[27px] invert"
                        width={17.5}
                        height={17.5}
                      />{" "}
                      Contact Support{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
