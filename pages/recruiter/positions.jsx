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
  const [selectslot, setselectslot] = useState('');
  const [inputValue, setInputValue] = useState("");
  const [education, seteducation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [help, sethelp] = useState("");
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
      <RecruiterNavbar />
      <main className="pl-[59.92px] pr-[60px] pt-[41.36px] max-md:px-[40px] pb-[50px] max-sm:px-[20px]">
        <h1 className="text-[20px] leading-[26px] pl-[0.5px] font-semibold mb-[1px]">
          Positions{" "}
        </h1>
        <div className="mt-[24px] max-sm:flex-col mb-[20px] bg-white pl-[18px] max-smallphone:flex-col max-smallphone:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[23px] rounded-[6px] flex gap-[8px] items-center justify-between">
          <button
            onClick={() => sethelp("add job")}
            className="h-[37px] w-[165px] max-sm:w-full flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
          >
            <Image
              src="/plus.svg"
              className="cursor-pointer invert"
              width={16}
              height={16}
            />{" "}
            Add job opening{" "}
          </button>
          <div className="flex max-sm:w-full">
            <input
              type="search"
              name=""
              className="w-[323px] mr-[50.08px] max-sm:w-full max-md:w-[193px] max-sm:pr-0 max-sm:mr-0 max-sm:mt-[12px] max-hamburger:w-[253px] max-hamburger:mr-[10px] h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
              placeholder="Search applicants"
              id=""
            />
            <Image
              src="/search.svg"
              className="cursor-pointer absolute right-[284px] max-sm:top-[85px] max-sm:right-[30px] max-md:right-[40px] max-hamburger:right-[214px] top-[27px]"
              width={24}
              height={24}
            />{" "}
            <div className="flex gap-[4px] items-center max-md:hidden max-hamburger:mr-[10px] mr-[39.92px]">
              <Image
                src="/sort.svg"
                className="cursor-pointer"
                width={24}
                height={24}
              />
              <p className="text-[14px] leading-[16.8px]">Sort By</p>
            </div>
            <div className="flex gap-[4px] items-center max-md:hidden">
              <Image
                src="/filter.svg"
                className="cursor-pointer"
                width={24}
                height={24}
              />
              <p className="text-[14px] leading-[16.8px]">Filter By</p>
            </div>
          </div>
        </div>
        {deleteposition === false && (
          <div className="flex gap-[20px]">
            <section className="flex gap-[20px] flex-wrap w-full">
              <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px]">
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
                <div className="flex max-smallphone:flex-col justify-between mt-[26.93px] pr-[19.5px]">

                <Image
                  src="/delete.svg"
                  className="cursor-pointer max-smallphone:mb-[20px]"
                  onClick={() => sethelp("delete")}
                  width={24}
                  height={24}
                />
                <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                  <button className="h-[37px] w-[117px] max-smallphone:w-full max-smallphone:w-full bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[14px] leading-[16.8px]">
                    Edit Opening{" "}
                  </button>{" "}
                  <button className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                    View Applicants
                  </button>
                </div>
                </div>
              </div>
              <div
                onClick={() => sethelp("add job")}
                className="w-[203px] cursor-pointer h-[279px] relative bg-[white] flex flex-col justify-center items-center rounded-[5px]"
              >
                <p className="text-[16px] leading-[19.2px] mb-[36.56px]">
                  Add job opening
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
            </section>
          </div>
        )}
        {deleteposition && (
          <section className="flex justify-center pt-[62px] pb-[94.63px] w-full">
            <div className="w-[467.34px] flex flex-col max-sm:h-auto items-center h-[439.37px] relative rounded-[18px] border-[1px] border-[#00000033] py-[26px] max-sm:px-[15px] px-[35px]">
              <Image
                src="/noopening.svg"
                width={162.28}
                height={171.37}
                onClick={() => sethelp("")}
              />
              <h1 className="mt-[29px] text-[32px] max-sm:text-[24px] max-sm:leading-[28px] capitalize text-black text-center leading-[41.6px] trackig-[-0.64px]">
                You have not posted any job openings
              </h1>
              <p className="mt-[12px] mb-[29px] text-[16px] text-center leading-[19.2px] text-black opacity-70">
                All the jobs you have posted will appear here
              </p>
              <button
                onClick={() => sethelp("add job")}
                className="h-[43px] w-[187px] flex justify-center items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
              >
                <Image
                  src="/plus.svg"
                  className="cursor-pointer invert"
                  width={16}
                  height={16}
                />{" "}
                Add job opening{" "}
              </button>
            </div>
          </section>
        )}
        {help === "delete" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[427px] pt-[45.36px] pb-[38.39px] max-sm:pt-[50px] px-[103.94px] max-sm:px-[20px] max-sm:w-[calc(100%-40px)] max-sm:left-[20px] fixed top-[230px] left-[calc(50%-215px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer absolute right-[15.59px] top-[14.61px]"
                width={36.41}
                height={36.41}
                onClick={() => sethelp("")}
              />
              <h1 className="text-[20px] mb-[16px] leading-[28px] text-center">
                You are about to delete “Frontend Developer” job opening
              </h1>
              <p className="text-[14px] text-center opacity-70 mb-[29px] leading-[16.8px]">
                This action cannot be undone
              </p>
              <div className="flex justify-center gap-[12px]">
                <button
                  onClick={() => sethelp("")}
                  className="w-[85px] h-[37px] text-[14px] leading-[16.8px] border-[1px] border-black rounded-[4px]"
                >
                  Go Back
                </button>
                <button
                  onClick={handleDelete}
                  className="w-[73px] h-[37px] text-[14px] leading-[16.8px] border-[1px] border-[#D41717] bg-[#D41717] text-white rounded-[4px]"
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        )}
        {help === "add job" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[644px] max-xl:h-[90vh] max-xl:top-[5vh] max-xl:overflow-scroll max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)] max-md:left-[40px] max-sm:left-[20px] pt-[52px] pb-[37px] max-md:px-[20px] pl-[54px] pr-[93px] fixed top-[30px] left-[calc(50%-322px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer absolute right-[22.59px] top-[23px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
              <h1 className="text-[20px] leading-[24px] font-semibold mb-[34px]">
                Add a job opening{" "}
              </h1>
              <div className="flex gap-[31px] max-md:flex-col mb-[31px]">
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
                        ? "absolute max-md:top-[262px] max-md:right-[40px] rotate-180 h-[10.75px] w-[19.98px] right-[106px] cursor-pointer top-[157px]"
                        : "absolute max-md:top-[262px] max-md:right-[40px] h-[10.75px] w-[19.98px] right-[106px] cursor-pointer top-[157px]"
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
                    <div className="bg-white absolute max-md:w-[calc(100%-40px)] border-[1px] border-black top-[183px] max-md:top-[289px] z-[22222] cursor-pointer">
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
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[644px] max-xl:h-[90vh] max-xl:top-[5vh] max-xl:overflow-scroll pt-[52px] pb-[72px] pl-[54px] pr-[46px] fixed top-[30px] left-[calc(50%-322px)] max-md:left-[40px] max-sm:left-[20px] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)] max-md:px-[20px] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer absolute right-[22.59px] top-[23px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
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
                  className=
                  {`w-[504px] outline-none max-md:w-full text-black placeholder:text-black placeholder:opacity-70 h-[121px] relative resize-none border-[1px] rounded-tr-[6px] rounded-tl-[6px] border-[#00000033] mt-[12px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px] ${bold ? 'font-bold' : ''} ${italic ? 'italic' : ''} ${underline ? 'underline' : ''} ${center ? 'text-center' : ''} ${right ? 'text-right' : ''} ${justify ? 'text-justify' : ''} ${lettercase ? 'uppercase' : ''}`}
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
              <button
                onClick={() => sethelp("")}
                className="h-[37px] w-[146px] max-smallphone:ml-0 max-smallphone:mt-[12px] ml-[12px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
              >
                Post job opening
              </button>
            </div>
          </>
        )}
        {help === "next job" && (
          <>
            <div className="w-full fixed h-full bg-black opacity-50 top-0 left-0 z-50"></div>
            <div className="w-[644px] max-md:left-[40px] max-smallphone:pt-[60px] max-sm:left-[20px] max-md:px-[20px] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)] h-[687px] max-xl:h-[90vh] max-xl:top-[5vh] max-xl:overflow-scroll pt-[52px] pb-[37px] pl-[54px] pr-[93px] fixed top-[30px] left-[calc(50%-322px)] rounded-[9px] z-[51] bg-white">
              <Image
                src="/close.svg"
                className="cursor-pointer absolute right-[22.59px] top-[23px]"
                width={44.42}
                height={44.42}
                onClick={() => sethelp("")}
              />
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
      </main>
    </>
  );
}
