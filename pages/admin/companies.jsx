import { useState, useEffect } from "react";
import AdminNavbar from "@/components/adminbar";
import Image from "next/image";
export default function Companies() {
  const [active, setactive] = useState("");
  const [bold, setbold] = useState(false);
  const [italic, setitalic] = useState(false);
  const [underline, setunderline] = useState(false);
  const [center, setcenter] = useState(false);
  const [right, setright] = useState(false);
  const [ol, setol] = useState(false);
  const [ul, setul] = useState(false);
  const [justify, setjustify] = useState(false);
  const [lettercase, setlettercase] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [education, seteducation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
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
  return (
    <>
      <AdminNavbar />
      <div className="h-[59px] max-smallphone:gap-[16px] sticky top-[85px] z-[9999] shadow-lg gap-[32px] flex items-center pl-[60px] max-md:px-[40px] max-sm:px-[20px] bg-[white]">
        <h1
          onClick={() => setactive("")}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          Companies
        </h1>
        <h1
          onClick={() => setactive("edit company")}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          Edit Companies{" "}
        </h1>
        <h1
          onClick={() => setactive("add company")}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          Add Company{" "}
        </h1>
      </div>
      <main className="relative">
        {active === "" && (
          <div className="pb-[78px] px-[59.5px] max-sm:px-[20px] max-md:px-[40px]">
            <div className="mb-[13px] mt-[28px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center justify-between">
              <input
                type="search"
                name=""
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search applicants"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[83px] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
                width={24}
                height={24}
              />
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1266px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Company name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[40px]">
                  Company representative
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                  No. of openings | No. of candidates hired | Joining Year
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    06
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    07
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    08
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    09
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    10
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[23px] max-sm:left-[15px] absolute right-[60px] bottom-[31px]">
              <div className="w-[32px] h-[32px] flex max-smallerphone:pr-0 pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
              <div className="flex gap-[8px] max-smallerphone:gap-[6px]">
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] max-smallphone:text-base cursor-pointer bg-black leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-black text-white">
                  1
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  2
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  3
                </p>
                <p className="w-[25px] max-smallphone:w-[20px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                  ...
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  42
                </p>
              </div>
              <div className="w-[32px] rotate-180 h-[32px] max-smallphone:pr-0 flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
            </div>
          </div>
        )}
        {active === "view details" && (
          <div className="px-[59.5px] max-sm:px-[20px] max-md:px-[40px] pb-[35.94px]">
            <div className="mb-[21.5px] flex items-center mt-[40px]">
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
            </div>
            <div className="w-full max-sm:px-[20px] max-hamburger:px-[25px] max-md:pr-[20px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pb-[46px] pt-[38px] px-[37.5px] bg-white rounded-[10px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Company information{" "}
              </h1>
              <div className="flex gap-[39px] max-md:flex-wrap max-lg:gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[42px] mb-[23px]">
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Company name"
                    className="w-[233px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company URL
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Company URL"
                    className="w-[233px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Founded in
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Founding year"
                    className="w-[123px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    No. of employees
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="No. of employ.."
                    className="w-[123px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="flex gap-[39px] max-md:flex-wrap max-hamburger:gap-[25px] mt-[25px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:flex-wrap max-smallphone:gap-[20px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option1"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Service-based
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option2"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Product-based
                      </p>
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Ownership type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:gap-[10px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="ownershiptype"
                        value="option1"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Private{" "}
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="ownershiptype"
                        value="option2"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Public{" "}
                      </p>
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Business type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:gap-[10px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input type="radio" name="businesstype" value="option1" />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        B2C{" "}
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input type="radio" name="businesstype" value="option2" />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        B2C{" "}
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-[#00000080] mt-[38px]"></div>
              <h1 className="text-[20px] leading-[26px] font-semibold mt-[32px]">
                Company representative information{" "}
              </h1>
              <div className="flex gap-[39px] max-md:flex-col max-hamburger:gap-[20px] mt-[18px]">
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Email
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Phone number
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="flex gap-[39px] max-md:flex-col max-hamburger:gap-[20px] mt-[24px]">
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">Name</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Designation
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-[#00000080] my-[32px]"></div>
              <h1 className="text-[20px] leading-[26px] font-semibold mb-[18px]">
                Candidates Hired
              </h1>
              <div className=" w-full overflow-x-scroll">
                <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    Slno.
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                    Candidate name
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[40px]">
                    Enrolled Course
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    Username | College | passing Year
                  </p>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      01
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      02
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      03
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      04
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      05
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      06
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      07
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      08
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      09
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                      10
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Vitae facilisis in sit integer. A mauris ac.
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                      No-code, Low-code Development
                    </p>
                    <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                      mauris32 | JSSIT | 2024
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("view candidate details")}
                    className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Details{" "}
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-[20px] leading-[26px] font-semibold mt-[42.06px]">
              Current Openings
            </h1>
            <div className="flex mt-[22px] gap-[20px]">
              <section className="flex gap-[20px] flex-wrap w-full">
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("view applicants")}
                        className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        View Applicants
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("view applicants")}
                        className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        View Applicants
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("view applicants")}
                        className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        View Applicants
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("view applicants")}
                        className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        View Applicants
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("view applicants")}
                        className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        View Applicants
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("view applicants")}
                        className="h-[37px] w-[136px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        View Applicants
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
        {active === "view applicants" && (
          <div className="px-[59.5px] max-sm:px-[20px] max-md:px-[40px] pt-[40px] pb-[103px]">
            <div className="mb-[21.5px] w-[874px] max-hamburger:w-full flex items-center">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("view details")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-[635px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Candidate name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[40px]">
                  Enrolled Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                  Username | College | passing Year
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    06
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    07
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    08
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    09
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    10
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    mauris32 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[23px] max-sm:left-[15px] absolute right-[60px] bottom-[31px]">
              <div className="w-[32px] h-[32px] flex max-smallerphone:pr-0 pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
              <div className="flex gap-[8px] max-smallerphone:gap-[6px]">
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] max-smallphone:text-base cursor-pointer bg-black leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#000000] text-white">
                  1
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  2
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  3
                </p>
                <p className="w-[25px] max-smallphone:w-[20px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                  ...
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  42
                </p>
              </div>
              <div className="w-[32px] rotate-180 h-[32px] max-smallphone:pr-0 flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
            </div>
          </div>
        )}
        {active === "view candidate details" && (
          <div className="flex flex-col items-center max-hamburger:px-[60px] max-md:px-[40px] max-sm:px-[20px] pt-[40px] pb-[34.5px]">
            <div className="w-[874px] mb-[22.5px] max-hamburger:w-full flex items-center">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("view details")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="w-[874px] max-hamburger:w-full max-sm:px-[20px] max-hamburger:w-full py-[24px] pl-[25px] max-hamburger:px-[25px] bg-white rounded-[5px]">
              <div className="flex gap-[18px] max-sm:flex-col max-sm:gap-[17px] mb-[17px]">
                <div className="w-[210px] max-smallerphone:w-full h-[252px] max-md:px-[12px] max-md:justify-center max-md:items-center max-md:py-[17px] max-md:h-auto pl-[34px] flex flex-col justify-center rounded-[14px] border-[1px] border-[#D8D8D8]">
                  <div className="w-[101.81px] ml-[19.59px] max-md:ml-[0px] h-[101.81px] rounded-[100%]"></div>
                </div>
                <div className="w-[588px] max-sm:w-full max-md:py-[17px] max-md:h-auto max-hamburger:px-[18px] max-hamburger:w-[calc(100%-210px)] h-[252px] relative pl-[28px] pt-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                  <h1 className="text-[16px] leading-[20.8px] font-bold mb-[31.92px]">
                    Profile
                  </h1>
                  <div className="max-hamburger:w-[100%]">
                    <p className="text-[14px] leading-[16.8px] mb-[8px]">
                      Name
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={"Candidate name"}
                      disabled
                      className="w-[250px] text-[14px] leading-[16.8px] max-md:w-[100%] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[16px] mt-[22px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[8px]">
                        Email
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={"candidate@gmail.com"}
                        disabled
                        className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] pl-[15.71px] max-hamburger:pl-[6.51px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[8px]">
                        Phone number
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={"+91 97307 3287"}
                        disabled
                        className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] max-hamburger:pl-[6.51px] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="w-[816px] max-hamburger:w-full mb-[17px] max-sm:w-full max-md:py-[17px] max-md:h-auto max-hamburger:px-[18px] h-[252px] relative pl-[28px] pt-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[31.92px]">
                  Current company
                </h1>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[16.8px] mb-[8px]">
                    Company Name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={"Company Name"}
                    disabled
                    className="w-[250px] text-[14px] leading-[16.8px] max-md:w-[100%] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[16px] mt-[22px]">
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[8px]">
                      Role
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={"Role"}
                      disabled
                      className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] pl-[15.71px] max-hamburger:pl-[6.51px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[8px]">
                      Hired on
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={"DD/MM/YY"}
                      disabled
                      className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] max-hamburger:pl-[6.51px] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[18px] mb-[17px]">
                <div className="w-[816px] max-hamburger:w-[100%] max-md:py-[17px] max-md:h-auto max-hamburger:px-[18px] h-[134px] pl-[28px] flex flex-col justify-center rounded-[14px] border-[1px] border-[#D8D8D8]">
                  <div className="flex items-end max-sm:items-start max-sm:flex-col gap-[17px]">
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                        Current location
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div className="max-sm:w-full gap-[12px] max-">
                      <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                        Graduation year{" "}
                      </p>
                      <div className="border-[0.5px] max-hamburger:w-full cursor-pointer border-[#00000080] w-[135px] h-[40px] rounded-[4px]">
                        <div className="flex justify-between h-[40px] items-center pl-[6.27px] pr-[9px]">
                          {" "}
                          <div className="max-sm:text-sm"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[816px] max-md:py-[17px] max-md:h-auto max-hamburger:h-auto max-hamburger:px-[18px] max-hamburger:w-full h-[167px] relative pl-[28px] pt-[17.08px] max-hamburger:py-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                  Documents
                </h1>
                <div className="max-hamburger:w-[100%] max-hamburger:gap-[20px] max-hamburger:flex-col flex gap-[39px]">
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Resume
                    </p>
                    <div className="flex gap-[10px]">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                      />
                      <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                        <Image
                          src="/download.svg"
                          className="cursor-pointer"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      CV{" "}
                    </p>
                    <div className="flex gap-[10px]">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                      />
                      <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                        <Image
                          src="/download.svg"
                          className="cursor-pointer"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="w-[816px] max-md:py-[17px] max-md:h-auto max-hamburger:h-auto max-hamburger:px-[18px] max-hamburger:w-full h-[108px] relative pl-[28px] pt-[17.08px] max-hamburger:py-[17.08px] rounded-[14px] border-[1px] mt-[17px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                  Job Preference
                </h1>
                <p className="text-[16px] leading-[19.2px]">
                  Job 1, Job 2, Job 3
                </p>
              </div>{" "}
              <div className="w-[816px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full my-[17px] relative max-hamburger:px-[18px] pl-[28px] pt-[17.08px] pb-[16.86px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[28.07px]">
                  Work Experience
                </h1>
                <h1 className="text-[16px] leading-[20.8px] mb-[10px]">
                  R&D Intern
                </h1>
                <p className="text-[12px] leading-[14.4px] opacity-80">
                  NOKIA | Internship
                </p>
                <p className="text-[12px] leading-[14.4px] opacity-80 mt-[4px]">
                  On-site | Bangalore, Karnataka
                </p>
                <p className="text-[12px] leading-[14.4px] opacity-80 mt-[4px]">
                  June 2024 - September 2024 | 6 months
                </p>
              </div>{" "}
              <div className="w-[816px] max-hamburger:px-[18px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full h-[167px] relative pl-[28px] pt-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                  Socials
                </h1>
                <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[18px]">
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      LinkedIn
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      GitHub (optional){" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Website (optional){" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        )}
        {active === "edit company" && (
          <div className="px-[60px] max-sm:px-[20px] max-md:px-[40px] pb-[78px] pt-[28px]">
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center justify-between">
              <input
                type="search"
                name=""
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search applicants"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[83px] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
                width={24}
                height={24}
              />
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1266px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Company name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[40px]">
                  Company representative
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                  No. of openings | No. of candidates hired | Joining Year
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    06
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    07
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    08
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    09
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1266px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px]">
                    10
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    Diam vitae aliquam ultrices{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[380px]">
                    5 | 2 | 2024{" "}
                  </p>
                </div>
                <button
                  onClick={() => setactive("Edit Details")}
                  className="w-[104px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Details{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[23px] max-sm:left-[15px] absolute right-[60px] bottom-[31px]">
              <div className="w-[32px] h-[32px] flex max-smallerphone:pr-0 pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
              <div className="flex gap-[8px] max-smallerphone:gap-[6px]">
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] max-smallphone:text-base cursor-pointer bg-black leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-black text-white">
                  1
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  2
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  3
                </p>
                <p className="w-[25px] max-smallphone:w-[20px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                  ...
                </p>
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                  42
                </p>
              </div>
              <div className="w-[32px] rotate-180 h-[32px] max-smallphone:pr-0 flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
            </div>
          </div>
        )}
        {active === "Edit Details" && (
          <div className="px-[60px] max-md:px-[40px] max-sm:px-[20px] pt-[40.5px] pb-[24.5px]">
            <div className="mb-[21.5px] flex items-center pt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("edit company")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="w-full max-sm:px-[20px] max-hamburger:px-[25px] max-md:pr-[20px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pb-[46px] pt-[38px] px-[37.5px] bg-white rounded-[10px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Company information{" "}
              </h1>
              <div className="flex gap-[39px] max-md:flex-wrap max-lg:gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[42px] mb-[23px]">
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Company name"
                    className="w-[233px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company URL
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Company URL"
                    className="w-[233px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Founded in
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Founding year"
                    className="w-[123px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    No. of employees
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="No. of employ.."
                    className="w-[123px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="flex gap-[39px] max-md:flex-wrap max-hamburger:gap-[25px] mt-[25px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:flex-wrap max-smallphone:gap-[20px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option1"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Service-based
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option2"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Product-based
                      </p>
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Ownership type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:gap-[10px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="ownershiptype"
                        value="option1"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Private{" "}
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="ownershiptype"
                        value="option2"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Public{" "}
                      </p>
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Business type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:gap-[10px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input type="radio" name="businesstype" value="option1" />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        B2C{" "}
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input type="radio" name="businesstype" value="option2" />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        B2C{" "}
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-[#00000080] mt-[38px]"></div>
              <h1 className="text-[20px] leading-[26px] font-semibold mt-[32px]">
                Company representative information{" "}
              </h1>
              <div className="flex gap-[39px] max-md:flex-col max-hamburger:gap-[20px] mt-[18px]">
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Email
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Phone number
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="flex gap-[39px] max-md:flex-col max-hamburger:gap-[20px] mt-[24px]">
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">Name</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Designation
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-[20px] leading-[26px] font-semibold mt-[42.06px]">
              Current Openings
            </h1>
            <div className="flex mt-[22px] gap-[20px]">
              <section className="flex gap-[20px] flex-wrap w-full">
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("edit job")}
                        className="h-[37px] w-[117px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        Edit opening{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("edit job")}
                        className="h-[37px] w-[117px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        Edit opening{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("edit job")}
                        className="h-[37px] w-[117px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        Edit opening{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("edit job")}
                        className="h-[37px] w-[117px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        Edit opening{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("edit job")}
                        className="h-[37px] w-[117px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        Edit opening{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full max-smalllaptop:h-auto h-[279px] relative bg-[white] rounded-[5px] pt-[26.5px] pl-[18.5px] max-smalllaptop:pb-[20px]">
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
                      <h1 className="text-[16px] leading-[19.2px]">
                        Internship
                      </h1>
                    </div>
                    <div>
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
                  <div className="flex max-smallphone:flex-col justify-end mt-[26.93px] pr-[19.5px]">
                    <div className="flex gap-[12px] max-smallphone:w-full max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                      <button
                        onClick={() => setactive("edit job")}
                        className="h-[37px] w-[117px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                      >
                        Edit opening{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setactive("add job")}
                  className="w-[427px] flex flex-col items-center justify-center max-biggerscreen:w-[32%] max-md:pb-[18.07px] max-smalllaptop:w-[48.3%] max-md:w-full h-[139px] relative bg-[white] rounded-[5px]"
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
            <button
              onClick={() => setactive("edit companies")}
              className="h-[37px] w-[110px] mt-[32px] flex justify-center max-smallphone:w-full items-center gap-[4px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
            >
              Save details
            </button>
          </div>
        )}
        {active === "edit job" && (
          <>
            <div className="w-[710px] max-sm:pb-[30px] max-md:pb-[30px] relative max-md:h-auto h-[757px] max-md:w-full pt-[81px] max-md:px-[20px] pl-[61px] pr-[152px] bg-white">
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
                        ? "absolute max-md:top-[152px] max-md:right-[20px] rotate-180 h-[10.75px] w-[19.98px] right-[20px] cursor-pointer top-[47px]"
                        : "absolute max-md:top-[152px] max-md:right-[20px] h-[10.75px] w-[19.98px] right-[20px] cursor-pointer top-[47px]"
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
                onClick={() => setactive("next job")}
                className="h-[37px] w-[61px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
              >
                Next
              </button>
            </div>
          </>
        )}
        {active === "add job" && (
          <>
            <div className="w-[710px] max-sm:pb-[30px] max-md:pb-[30px] relative max-md:h-auto h-[757px] max-md:w-full pt-[81px] max-md:px-[20px] pl-[61px] pr-[152px] bg-white">
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
                        ? "absolute max-md:top-[152px] max-md:right-[20px] rotate-180 h-[10.75px] w-[19.98px] right-[20px] cursor-pointer top-[47px]"
                        : "absolute max-md:top-[152px] max-md:right-[20px] h-[10.75px] w-[19.98px] right-[20px] cursor-pointer top-[47px]"
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
                onClick={() => setactive("next job")}
                className="h-[37px] w-[61px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
              >
                Next
              </button>
            </div>
          </>
        )}
        {active === "more detail" && (
          <>
            <div className="w-[710px] max-sm:pb-[30px] relative h-[757px] max-md:h-auto max-md:w-full pt-[81px] max-md:pb-[30px] max-md:px-[20px] pl-[61px] pr-[152px] bg-white">
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
                        ? "absolute max-md:right-[20px] rotate-180 h-[10.75px] w-[19.98px] right-[283px] cursor-pointer top-[47px]"
                        : "absolute max-md:right-[20px] h-[10.75px] w-[19.98px] right-[283px] cursor-pointer top-[47px]"
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
                        ? "absolute max-md:right-[20px] max-md:top-[153px] rotate-180 h-[10.75px] w-[19.98px] right-[15px] cursor-pointer top-[48px]"
                        : "absolute max-md:right-[20px] max-md:top-[153px] h-[10.75px] w-[19.98px] right-[15px] cursor-pointer top-[48px]"
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
                onClick={() => setactive("next job")}
                className="h-[37px] w-[62px] text-[14px] leading-[16.8px] max-smallphone:w-full text-black border-[1px] border-black rounded-[6px]"
              >
                Back
              </button>
              <button
                onClick={() => setactive("")}
                className="h-[37px] w-[146px] max-smallphone:ml-0 max-smallphone:mt-[12px] ml-[12px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
              >
                Post job opening
              </button>
            </div>
          </>
        )}
        {active === "next job" && (
          <>
            <div className="w-[710px] max-md:pb-[30px] relative h-[757px] max-md:h-auto max-md:w-full pt-[81px] max-md:px-[20px] pl-[61px] pr-[152px] bg-white">
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
                onClick={() => setactive("add job")}
                className="h-[37px] w-[62px] text-[14px] leading-[16.8px] max-smallphone:w-full text-black border-[1px] border-black rounded-[6px]"
              >
                Back
              </button>
              <button
                onClick={() => setactive("more detail")}
                className="h-[37px] w-[61px] max-smallphone:ml-0 max-smallphone:mt-[12px] ml-[12px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
              >
                Next
              </button>
            </div>
          </>
        )}
        {active === "add company" && (
          <div className="px-[59.5px] max-sm:px-[20px] max-md:px-[40px] pb-[35.94px] pt-[46.88px]">
            <h1 className="text-[20px] mb-[22px] leading-[26px] font-semibold">
              Add Company{" "}
            </h1>
            <div className="w-full max-sm:px-[20px] max-hamburger:px-[25px] max-md:pr-[20px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pb-[46px] pt-[38px] px-[37.5px] bg-white rounded-[10px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Company information{" "}
              </h1>
              <div className="flex gap-[39px] max-md:flex-wrap max-lg:gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[42px] mb-[23px]">
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Company name"
                    className="w-[233px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company URL
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Company URL"
                    className="w-[233px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Founded in
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Founding year"
                    className="w-[123px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    No. of employees
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="No. of employ.."
                    className="w-[123px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="flex gap-[39px] max-md:flex-wrap max-hamburger:gap-[25px] mt-[25px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Company type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:flex-wrap max-smallphone:gap-[20px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option1"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Service-based
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="educationStatus"
                        value="option2"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Product-based
                      </p>
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Ownership type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:gap-[10px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="ownershiptype"
                        value="option1"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Private{" "}
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="ownershiptype"
                        value="option2"
                      />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        Public{" "}
                      </p>
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Business type{" "}
                  </p>
                  <div className="gap-[20px] max-smallphone:gap-[10px] mt-[12px] flex">
                    <label className="flex cursor-pointer items-center">
                      <input type="radio" name="businesstype" value="option1" />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        B2C{" "}
                      </p>
                    </label>
                    <label className="flex cursor-pointer items-center">
                      <input type="radio" name="businesstype" value="option2" />
                      <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                        B2C{" "}
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-[#00000080] mt-[38px]"></div>
              <h1 className="text-[20px] leading-[26px] font-semibold mt-[32px]">
                Company representative information{" "}
              </h1>
              <div className="flex gap-[39px] max-md:flex-col max-hamburger:gap-[20px] mt-[18px]">
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Email
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Phone number
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="flex gap-[39px] max-md:flex-col max-hamburger:gap-[20px] mt-[24px]">
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">Name</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Designation
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[309px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setactive("add new job")}
              className="h-[37px] w-[61px] mt-[15.12px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[6px]"
            >
              Next
            </button>
          </div>
        )}
        {active === "add new job" && (
          <div className="px-[59.5px] max-sm:px-[20px] max-md:px-[40px] pt-[46.88px]">
            <h1 className="text-[20px] mb-[22px] leading-[26px] font-semibold">
              Add Company{" "}
            </h1>
            <div className="pt-[37.12px] max-sm:px-[20px] pl-[31.48px] pb-[56.88px] w-full bg-white rounded-[8px]">
              <h1 className="text-[20px] capitalize mb-[16px] leading-[26px] font-semibold">
                Add a job opening?{" "}
              </h1>
              <p className="text-[16px] leading-[19.2px] mb-[32px]">
                You can add a job opening later as well.
              </p>
              <button
                onClick={() => setactive("add job")}
                className="h-[37px] capitalize w-[145px] text-[14px] leading-[16.8px] max-smallphone:w-full bg-black text-white rounded-[4px]"
              >
                Add job opening
              </button>
              <button
                onClick={() => setactive("add new job")}
                className="h-[37px] capitalize w-[134px] max-smallphone:ml-0 max-smallphone:mt-[12px] text-[14px] leading-[16.8px] max-smallphone:w-full border-[1px] border-black text-black rounded-[4px] ml-[7px]"
              >
                I’ll do this later
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
