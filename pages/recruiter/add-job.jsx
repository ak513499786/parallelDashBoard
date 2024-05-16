import RecruiterNavbar from "@/components/recruiternavbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "@/styles/style.module.css";

export default function Jobs() {
  const [viewprofile, setviewprofile] = useState(false);
  const [bold, setbold] = useState(false);
  const [italic, setitalic] = useState(false);
  const [underline, setunderline] = useState(false);
  const [center, setcenter] = useState(false);
  const [right, setright] = useState(false);
  const [ol, setol] = useState(false);
  const [ul, setul] = useState(false);
  const [justify, setjustify] = useState(false);
  const [lettercase, setlettercase] = useState(false);
  const [deleteposition, setdeleteposition] = useState(false);
  const [selectslot, setselectslot] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [education, seteducation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [help, sethelp] = useState("add job");
  const [stack, setstack] = useState("");
  const [minvalue, setminvalue] = useState(0);
  const [maxvalue, setmaxvalue] = useState(0);

  const handleCenter = (setvalue, value) => {
    setcenter(true);
    setright(false);
    setjustify(false);
  };
  const handleJustify = (setvalue, value) => {
    setcenter(false);
    setright(false);
    setjustify(true);
  };
  const handleRight = (setvalue, value) => {
    setcenter(false);
    setright(true);
    setjustify(false);
  };
  const handleDecrease = (setvalue, value) => {
    setvalue(value - 1);
  };
  const handleIncrease = (setvalue, value) => {
    setvalue(value + 1);
  };
  useEffect(() => {
    if (minvalue > maxvalue) {
      setmaxvalue(minvalue);
    }
  }, [minvalue]);
  const handleOptionSelect = (option) => {
    setstack(option);
    setIsOpen(false);
  };
  const handleEducationSelect = (option) => {
    seteducation(option);
    setIsEducationOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleEducationMenu = () => {
    setIsEducationOpen(!isEducationOpen);
  };
  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };
  const characterCount = inputValue.length;
  const handleDelete = () => {
    setdeleteposition(true);
    sethelp("");
  };
  return (
    <>
      <main className="flex">
        {help === "add job" && (
          <>
            <div className="w-[710px] max-sm:pb-[30px] max-sm:pb-[30px] relative max-md:h-auto h-[100vh] max-md:w-full pt-[81px] max-md:px-[20px] pl-[61px] pr-[152px] bg-white">
              <h1 className="text-[20px] w-[233px] leading-[24px] font-semibold mb-[50px]">
                Add a job opening to get started{" "}
              </h1>
              <div className="flex gap-[31px] relative max-md:flex-col mb-[31px]">
                <div>
                  <p className="text-[14px] leading-[16.8px]">Job Title</p>{" "}
                  <input
                    type="text"
                    name=""
                    placeholder="Frontend developer"
                    id=""
                    className="w-[233px] h-[45px] border-[1px] max-md:w-full rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] text-[16px] placeholder:opacity-70"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px]">Tech Stack</p>{" "}
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "absolute max-md:top-[262px] max-md:right-[40px] rotate-180 h-[10.75px] w-[19.98px] right-[20px] cursor-pointer top-[47px]"
                        : "absolute max-md:top-[262px] max-md:right-[40px] h-[10.75px] w-[19.98px] right-[20px] cursor-pointer top-[47px]"
                    }
                    width={19.98}
                    height={10.75}
                    onClick={() => toggleMenu()}
                  />
                  <div
                    onClick={() => toggleMenu()}
                    className="w-[233px] flex items-center max-md:w-full h-[45px] border-[1px] rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] text-[16px] placeholder:opacity-70"
                  >
                    <p className=" max-sm:w-[95%]">
                      {stack || "Select the tech stack"}
                    </p>
                  </div>{" "}
                  {isOpen && (
                    <div className="bg-white absolute max-md:w-[calc(100%-40px)] border-[1px] border-black top-[73px] max-md:top-[289px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleOptionSelect("Random")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[231px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Random
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Text")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[231px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Text
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Lorem")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[231px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Lorem
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="text-[14px] leading-[18.2px] mb-[12px]">
                  Job type{" "}
                </p>
                <div className="gap-[20px] flex">
                  <label className="flex cursor-pointer items-center">
                    <input
                      type="radio"
                      name="educationStatus"
                      value="option1"
                    />
                    <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                      Internship
                    </p>
                  </label>
                  <label className="flex cursor-pointer items-center">
                    <input
                      type="radio"
                      name="educationStatus"
                      value="option2"
                    />
                    <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                      Full Time
                    </p>
                  </label>
                </div>
              </div>
              <div className="relative">
                <p className="text-[14px] leading-[16.8px] mt-[31px]">
                  Educational Qualification
                </p>{" "}
                <Image
                  src="/drop.svg"
                  className={
                    isEducationOpen
                      ? "absolute max-md:right-[20px] rotate-180 h-[10.75px] w-[19.98px] right-[178px] cursor-pointer top-[48px]"
                      : "absolute max-md:right-[20px] h-[10.75px] w-[19.98px] right-[178px] cursor-pointer top-[48px]"
                  }
                  width={19.98}
                  height={10.75}
                  onClick={() => toggleEducationMenu()}
                />
                <div
                  onClick={() => toggleEducationMenu()}
                  className="w-[331px] max-md:w-full flex items-center h-[45px] mb-[31px] border-[1px] rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] text-[14px] placeholder:opacity-70"
                >
                  <p className=" max-sm:w-[95%]">
                    {education || "Select the educational qualification"}
                  </p>
                </div>{" "}
                {isEducationOpen && (
                  <div className="bg-white absolute max-md:w-full border-[1px] border-black top-[73px] z-[22222] cursor-pointer">
                    <ul>
                      <li
                        onClick={() => handleEducationSelect("Random")}
                        className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[330px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                      >
                        Random
                      </li>
                      <li
                        onClick={() => handleEducationSelect("Text")}
                        className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[330px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                      >
                        Text
                      </li>
                      <li
                        onClick={() => handleEducationSelect("Lorem")}
                        className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[330px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                      >
                        Lorem
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <p className="text-[14px] leading-[16.8px] mb-[12px]">
                Experience Range
              </p>{" "}
              <div className="flex gap-[11px] items-center mb-[31px]">
                <div className="h-[45px] w-[108px] rounded-[6px] flex items-center justify-center border-[1px] border-[#0000004D]">
                  <Image
                    src="/minus.svg"
                    className="cursor-pointer"
                    onClick={() => handleDecrease(setminvalue, minvalue)}
                    width={25.96}
                    height={25.96}
                  />
                  <p className="text-[14px] w-[42px] leading-[16.8px] text-center opacity-70">
                    {minvalue}
                  </p>
                  <Image
                    src="/light-plus.svg"
                    className="cursor-pointer"
                    onClick={() => handleIncrease(setminvalue, minvalue)}
                    width={25.96}
                    height={25.96}
                  />
                </div>
                <p className="text-[14px] leading-[16.8px] opacity-70">to</p>
                <div className="h-[45px] w-[108px] rounded-[6px] flex items-center justify-center border-[1px] border-[#0000004D]">
                  <Image
                    src="/minus.svg"
                    className="cursor-pointer"
                    onClick={() => handleDecrease(setmaxvalue, maxvalue)}
                    width={25.96}
                    height={25.96}
                  />
                  <p className="text-[14px] w-[42px] leading-[16.8px] text-center opacity-70">
                    {maxvalue}
                  </p>
                  <Image
                    src="/light-plus.svg"
                    className="cursor-pointer"
                    onClick={() => handleIncrease(setmaxvalue, maxvalue)}
                    width={25.96}
                    height={25.96}
                  />
                </div>{" "}
              </div>
              <div className="mb-[36px]">
                <p className="text-[14px] leading-[16.8px]">No. of openings</p>{" "}
                <input
                  type="number"
                  name=""
                  placeholder="No. of openings"
                  id=""
                  className="w-[233px] h-[45px] border-[1px] rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] text-[16px] placeholder:opacity-70"
                />
              </div>
              <button
                onClick={() => sethelp("next job")}
                className="h-[37px] w-[61px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
              >
                Next
              </button>
            </div>
          </>
        )}
        {help === "more detail" && (
          <>
            <div className="w-[710px] max-sm:pb-[30px] relative h-[100vh] max-md:h-auto max-md:w-full pt-[81px] max-md:px-[20px] pl-[61px] pr-[152px] bg-white">
              <h1 className="text-[20px] w-[223px] leading-[24px] font-semibold mb-[50px]">
                Add more details about the job{" "}
              </h1>
              <div className="flex gap-[31px] max-md:flex-col mb-[31px]">
                <div>
                  <p className="text-[14px] leading-[16.8px]">
                    Internship Duration (in months){" "}
                  </p>{" "}
                  <input
                    type="text"
                    name=""
                    placeholder="Enter the number of months"
                    id=""
                    className="w-[223px] h-[45px] border-[1px] rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] text-[16px] placeholder:text-[14px] placeholder:opacity-70"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[12px]">
                    Internship Stipend Range (per month in INR)
                  </p>{" "}
                  <div className="flex gap-[11px] items-center">
                    <div className="h-[45px] w-[108px] rounded-[6px] flex items-center justify-center border-[1px] border-[#0000004D]">
                      <input
                        type="text"
                        className="text-[14px] w-[62px] leading-[16.8px] text-center opacity-70"
                      ></input>
                      <span className="text-[14px] opacity-70 leading-[16.8px]">
                        K
                      </span>
                    </div>
                    <p className="text-[14px] leading-[16.8px] opacity-70">
                      to
                    </p>
                    <div className="h-[45px] w-[108px] rounded-[6px] flex items-center justify-center border-[1px] border-[#0000004D]">
                      <input
                        type="text"
                        className="text-[14px] w-[62px] leading-[16.8px] text-center opacity-70"
                      ></input>
                      <span className="text-[14px] opacity-70 leading-[16.8px]">
                        K
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex max-md:flex-col gap-[31px]">
                <div>
                  <p className="text-[14px] leading-[16.8px]">Location</p>{" "}
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "absolute max-md:right-[20px] rotate-180 h-[10.75px] w-[19.98px] right-[323px] cursor-pointer top-[47px]"
                        : "absolute max-md:right-[20px] h-[10.75px] w-[19.98px] right-[323px] cursor-pointer top-[47px]"
                    }
                    width={19.98}
                    height={10.75}
                    onClick={() => toggleMenu()}
                  />
                  <div
                    onClick={() => toggleMenu()}
                    className="w-[233px] max-md:w-full flex items-center h-[45px] border-[1px] rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] opacity-70 text-[14px] placeholder:opacity-70"
                  >
                    <p className=" max-sm:w-[95%]">
                      {stack || "Select the job location"}
                    </p>
                  </div>{" "}
                  {isOpen && (
                    <div className="bg-white absolute max-md:w-full border-[1px] border-black top-[73px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleOptionSelect("Random")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[231px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Random
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Text")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[231px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Text
                        </li>
                        <li
                          onClick={() => handleOptionSelect("Lorem")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[231px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Lorem
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px]">Work Mode</p>{" "}
                  <Image
                    src="/drop.svg"
                    className={
                      isEducationOpen
                        ? "absolute max-md:right-[20px] max-md:top-[153px] rotate-180 h-[10.75px] w-[19.98px] right-[65px] cursor-pointer top-[48px]"
                        : "absolute max-md:right-[20px] max-md:top-[153px] h-[10.75px] w-[19.98px] right-[65px] cursor-pointer top-[48px]"
                    }
                    width={19.98}
                    height={10.75}
                    onClick={() => toggleEducationMenu()}
                  />
                  <div
                    onClick={() => toggleEducationMenu()}
                    className="w-[233px] max-md:w-full flex items-center opacity-70 h-[45px] border-[1px] rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] text-[14px] placeholder:opacity-70"
                  >
                    <p className=" max-sm:w-[95%]">
                      {education || "Select the work mode"}
                    </p>
                  </div>{" "}
                  {isEducationOpen && (
                    <div className="bg-white absolute max-md:w-[100%] max-md:top-[178px] border-[1px] border-black top-[73px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleEducationSelect("Random")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[233px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Random
                        </li>
                        <li
                          onClick={() => handleEducationSelect("Text")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[233px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Text
                        </li>
                        <li
                          onClick={() => handleEducationSelect("Lorem")}
                          className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[233px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                        >
                          Lorem
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-[36px] mt-[31px]">
                <p className="text-[14px] leading-[16.8px]">Job description</p>{" "}
                <textarea
                  name=""
                  placeholder="Add your job description here"
                  className={`w-[504px] outline-none max-md:w-full text-black placeholder:text-black placeholder:opacity-70 h-[121px] relative resize-none border-[1px] rounded-tr-[6px] rounded-tl-[6px] border-[#00000033] mt-[12px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px] ${
                    bold ? "font-bold" : ""
                  } ${italic ? "italic" : ""} ${underline ? "underline" : ""} ${
                    center ? "text-center" : ""
                  } ${right ? "text-right" : ""} ${
                    justify ? "text-justify" : ""
                  } ${lettercase ? "uppercase" : ""}`}
                  id=""
                  maxLength={500}
                  onChange={handleChangeText}
                ></textarea>
                <div className="w-[504px] max-md:w-full flex justify-between pl-[12.68px] pr-[11.16px] items-center h-[31.44px] border-[1px] relative bottom-[7px] border-t-0 border-[#00000033] rounded-br-[6px] rounded-bl-[6px]">
                  <div className="flex">
                    <Image
                      src="/bold.svg"
                      className="cursor-pointer mr-[9.74px]"
                      width={9.95}
                      height={9.74}
                      onClick={() => setbold(!bold)}
                    />
                    <Image
                      src="/italic.svg"
                      className="cursor-pointer mr-[9.73px]"
                      width={9.95}
                      height={9.74}
                      onClick={() => setitalic(!italic)}
                    />
                    <Image
                      src="/underline.svg"
                      className="cursor-pointer mr-[14.6px]"
                      width={9.95}
                      height={9.74}
                      onClick={() => setunderline(!underline)}
                    />
                    <Image
                      src="/center.svg"
                      className="cursor-pointer mr-[9.74px]"
                      width={11.95}
                      height={9.74}
                      onClick={handleCenter}
                    />
                    <Image
                      src="/right.svg"
                      className="cursor-pointer mr-[9.74px]"
                      width={11.95}
                      height={9.74}
                      onClick={handleRight}
                    />
                    <Image
                      src="/left.svg"
                      className="cursor-pointer mr-[14.6px]"
                      width={12.95}
                      height={9.74}
                      onClick={handleJustify}
                    />
                    <Image
                      src="/ul.svg"
                      className="cursor-pointer max-smallerphone:hidden mr-[9.74px]"
                      width={12.95}
                      height={9.74}
                      onClick={() => setul(!ul)}
                    />
                    <Image
                      src="/ol.svg"
                      className="cursor-pointer max-smallerphone:hidden mr-[15.99px]"
                      width={12.95}
                      height={11.74}
                      onClick={() => setol(!ol)}
                    />
                    <Image
                      src="/color.svg"
                      className="cursor-pointer mr-[9.74px]"
                      width={12.95}
                      height={11.74}
                    />
                    <Image
                      src="/text.svg"
                      className="cursor-pointer mr-[9.74px]"
                      width={11.95}
                      height={11.74}
                      onClick={() => setlettercase(!lettercase)}
                    />
                  </div>
                  <div className="text-black opacity-70 text-[12px] leading-[14.4px]">
                    {characterCount}/500
                  </div>
                </div>
              </div>
              <button
                onClick={() => sethelp("next job")}
                className="h-[37px] w-[62px] text-[14px] leading-[16.8px] max-smallphone:w-full text-black border-[1px] border-black rounded-[6px]"
              >
                Back
              </button>
              <Link href={"/recruiter/candidates"}>
                <button
                  onClick={() => sethelp("")}
                  className="h-[37px] w-[146px] max-smallphone:ml-0 max-smallphone:mt-[12px] ml-[12px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
                >
                  Post job opening
                </button>
              </Link>
            </div>
          </>
        )}
        {help === "next job" && (
          <>
            <div className="w-[710px] max-sm:pb-[30px] relative h-[100vh] max-md:h-auto max-md:w-full pt-[81px] max-md:px-[20px] pl-[61px] pr-[152px] bg-white">
              <h1 className="text-[20px] w-[232px] leading-[24px] font-semibold mb-[34px]">
                Tell us more about the interview{" "}
              </h1>
              <div className="flex gap-[31px] max-sm:flex-col mb-[31px]">
                <div>
                  <p className="text-[14px] leading-[16.8px]">
                    No. of interview rounds
                  </p>{" "}
                  <input
                    type="text"
                    name=""
                    placeholder="No. of interview rounds"
                    id=""
                    className="w-[233px] h-[45px] border-[1px] rounded-[6px] border-[#0000004D] mt-[12px] pl-[14.28px] pr-[16.25px] text-[16px] placeholder:opacity-70"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Interview type{" "}
                  </p>
                  <div className="gap-[20px] flex">
                    <label className="flex h-[45px] cursor-pointer items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option1"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Virtual
                      </p>
                    </label>
                    <label className="flex cursor-pointer h-[45px] items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option2"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        On-site
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <button
                onClick={() => sethelp("add job")}
                className="h-[37px] w-[62px] text-[14px] leading-[16.8px] max-smallphone:w-full text-black border-[1px] border-black rounded-[6px]"
              >
                Back
              </button>
              <button
                onClick={() => sethelp("more detail")}
                className="h-[37px] w-[61px] max-smallphone:ml-0 max-smallphone:mt-[12px] ml-[12px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
              >
                Next
              </button>
            </div>
          </>
        )}
        <Image
          src="/gradient.png"
            className="w-[calc(100%-710px)] object-cover max-md:hidden"
          width={500}
          height={9.74}
        />
      </main>
    </>
  );
}
