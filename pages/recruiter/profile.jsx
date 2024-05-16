import RecruiterNavbar from "@/components/recruiternavbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [College, setCollege] = useState("");
  const [Location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);
  const [isPassingOpen, setIsPassingOpen] = useState(false);
  const [selectedPassingYear, setSelectedPassingYear] = useState("");
  const passingyears = Array.from(
    { length: 50 },
    (_, index) => currentYear - index
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const togglePassingMenu = () => {
    setIsPassingOpen(!isPassingOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };
  const handlePassingYearSelect = (passingyear) => {
    setSelectedPassingYear(passingyear);
    setIsPassingOpen(false);
  };
  return (
    <>
      <RecruiterNavbar />
      <main className="pl-[59.5px] pr-[60.5px] max-xl:px-[60px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[30px] pt-[47.36px] pb-[46px]">
        <div className="flex justify-between items-center mb-[21px]">
          <h1 className="capitalize text-[20px] leading-[26px] font-bold">
            My Account{" "}
          </h1>
          <button className="w-[99px] h-[43px] max-smallphone:hidden ma:w-full mt-[25px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
            Log out{" "}
          </button>
        </div>
        <div className="w-full max-sm:px-[20px] max-hamburger:px-[25px] max-md:pr-[20px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pb-[46px] pt-[38px] pl-[37.5px] bg-white rounded-[10px]">
          <h1 className="text-[20px] leading-[26px] font-semibold">
            Edit company details{" "}
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
                  <input type="radio" name="educationStatus" value="option1" />
                  <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                    Service-based
                  </p>
                </label>
                <label className="flex cursor-pointer items-center">
                  <input type="radio" name="educationStatus" value="option2" />
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
                  <input type="radio" name="ownershiptype" value="option1" />
                  <p className="ml-[4px] mt-[1.5px] text-[14px] leading-[16.8px]">
                    Private{" "}
                  </p>
                </label>
                <label className="flex cursor-pointer items-center">
                  <input type="radio" name="ownershiptype" value="option2" />
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
          <div className="flex gap-[39px] max-md:flex-col max-hamburger:gap-[20px] mt-[62px]">
            <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
              <p className="text-[14px] leading-[18.2px] mb-[12px]">
                Company representative name
              </p>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setName(e.target.value)}
                placeholder="Company representative name"
                className="w-[242px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
              />
            </div>
            <div className="max-hamburger:w-[100%] max-md:w-[70%] max-sm:w-full">
              <p className="text-[14px] leading-[18.2px] mb-[12px]">
                Company representative designation
              </p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Company representative design.."
                className="w-[242px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
        </div>
        <section className="mt-[16px] max-sm:px-[20px] max-md:pr-[20px] max-hamburger:h-auto max-hamburger:px-[25px] max-hamburger:pb-[40px] max-hamburger:pr-[40px] max-xl:w-full bg-white rounded-[5px] w-full h-[228px] pt-[29.77px] pl-[38px]">
          <h1 className="capitalize text-[20px] leading-[26px] font-semibold mb-[42px]">
            Your Account managers{" "}
          </h1>
          <div className="flex gap-[59px] max-hamburger:justify-center max-md:flex-col">
            <div className="flex max-hamburger:items-center max-hamburger:flex-col gap-[15px]">
              <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
              <div>
                <h1 className="text-[20px] leading-[24px] max-hamburger:text-center">Account manager</h1>
                <div className="flex max-hamburger:justify-center gap-[4px] max-smallphone:mt-[4px] mt-[8px] text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image
                    src="/call.svg"
                    width={17.5}
                    height={17.5}
                  />
                  <span>+91 79375 73658</span>
                </div>
                <div className="flex gap-[4px] max-hamburger:justify-center max-smallphone:mt-[4px] mt-[8px] text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image
                    src="/mail.svg"
                    width={17.5}
                    height={17.5}
                  />
                  <span>accountmanager@parallel.com</span>
                </div>
              </div>
            </div>
            <div className="flex max-hamburger:flex-col max-hamburger:items-center gap-[15px]">
              <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
              <div>
                <h1 className="text-[20px] leading-[24px] max-hamburger:text-center">Account manager</h1>
                <div className="flex gap-[4px] max-hamburger:justify-center max-smallphone:mt-[4px] mt-[8px] text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image
                    src="/call.svg"
                    width={17.5}
                    height={17.5}
                  />
                  <span>+91 79375 73658</span>
                </div>
                <div className="flex gap-[4px] mt-[8px] max-smallphone:mt-[4px] max-hamburger:justify-center text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image
                    src="/mail.svg"
                    width={17.5}
                    height={17.5}
                  />
                  <span>accountmanager@parallel.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button className="w-full h-[43px] max-smallphone:block hidden mt-[25px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
            Log out{" "}
          </button>
      </main>
    </>
  );
}
