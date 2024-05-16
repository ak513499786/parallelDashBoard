import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Onboarding() {
  const [course_selected, setcourse_selected] = useState("");
  const [check, setcheck] = useState("");
  const [activeSection, setActiveSection] = useState("frame0");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setname] = useState("");
  const [college, setcollege] = useState("");
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [joining_year, setjoining_year] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);
  const [isPassingOpen, setIsPassingOpen] = useState(false);
  const [passing_year, setpassing_year] = useState("");
  const passingyears = Array.from(
    { length: 50 },
    (_, index) => currentYear - index
  );

  const toggleJoinMenu = () => {
    setIsJoinOpen(!isJoinOpen);
  };
  const togglePassingMenu = () => {
    setIsPassingOpen(!isPassingOpen);
  };

  const handleYearSelect = (year) => {
    setjoining_year(year);
    setIsJoinOpen(false);
  };
  const handlePassingYearSelect = (passingyear) => {
    setpassing_year(passingyear);
    setcourse_(passingyear);
    setIsPassingOpen(false);
  };
  useEffect(() => {
    if (activeSection === "frame3") {
      if (countdown > 0) {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(interval);
      } else {
        router.push("/dashboard");
      }
    }
  }, [activeSection, countdown, router]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const setActiveAndSection = (section) => {
    setActiveSection(section);
  };
  const handleOptionSelect = (option) => {
    setcourse_selected(option);
    setIsOpen(false);
  };
  return (
    <main>
      {activeSection === "frame0" && (
        <div className="w-[598px] max-md:w-full max-md:px-[40px] max-sm:px-[20px] relative bg-[white] h-[100vh] flex flex-col justify-between pl-[60px] pb-[48.07px] pt-[98px] pr-[113px]">
          <div className="flex flex-col gap-[50.89px]">
            <strong className="text-[24.71px] leading-[29.65px]">
              Tell Us More About Yourself
            </strong>
            <div className="flex flex-col mt-[0.11px] gap-[16px]">
              <input
                id="numberedInput"
                type="text"
                placeholder="Enter Name"
                className="pl-[25.71px] border-[1px] h-[62px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              />
              <input
                id="numberedInput"
                type="text"
                placeholder="Enter Email"
                className="pl-[25.71px] border-[1px] h-[62px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              />
            </div>
            <div className="gap-[20px] flex flex-col">
              <strong className="text-[20px] leading-[24px]">You are </strong>
              <div>
                <label className="flex w-[216px] cursor-pointer items-center">
                  <input
                    type="radio"
                    onClick={() => setcheck("Enrolled in college")}
                    name="educationStatus"
                    value="option1"
                  />
                  <p className="ml-[8px]"> Enrolled in college</p>
                </label>
                {check === "Enrolled in college" && (
                  <input
                    id="numberedInput"
                    type="text"
                    placeholder="Enter college name"
                    className="pl-[25.71px] border-[1px] w-[425px] mt-[13px] h-[62px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                  />
                )}
              </div>
              <div>
                <label className="flex w-[216px] cursor-pointer items-center">
                  <input
                    type="radio"
                    onClick={() => setcheck("A passed out student")}
                    name="educationStatus"
                    value="option2"
                  />
                  <p className="ml-[8px]">A passed out student</p>
                </label>
                {check === "A passed out student" && (
                  <div className="flex mt-[13px] items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                    <div className="flex max-smallerphone:flex-col max-hamburger:w-full gap-[12px] max-">
                      <div
                        onClick={toggleJoinMenu}
                        className="border-[1px] w-[205px] h-[62px] max-hamburger:w-full cursor-pointer border-black w-[205px] h-[62px] rounded-[6px]"
                      >
                        <div className="flex justify-between max-sm:px-[10px] h-[62px] items-center pr-[10px] pl-[16.27px]">
                          {" "}
                          <div className="max-sm:text-sm">
                            {" "}
                            {joining_year || "Joining Year"}
                          </div>
                          <Image
                            src="/drop.svg"
                            className={
                              isJoinOpen
                                ? "h-[6.93px] rotate-180 w-[12.88px] cursor-pointer"
                                : "h-[6.93px] w-[12.88px] cursor-pointer"
                            }
                            width={12.88}
                            height={6.93}
                            onClick={() => toggleJoinMenu()}
                          />
                        </div>

                        {isJoinOpen && (
                          <div className="h-[190px] mt-[13px] bg-white relative z-20 overflow-y-scroll mt-[10px]">
                            <ul>
                              {years.map((year) => (
                                <li
                                  className="text-[14px] max-hamburger:w-full cursor-pointer leading-[18.2px] bg-[white] py-[10px] pr-[10px] pl-[16.27px]"
                                  key={year}
                                  onClick={() => handleYearSelect(year)}
                                >
                                  {year}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div
                        onClick={togglePassingMenu}
                        className="border-[1px] w-[205px] h-[62px] max-hamburger:w-full border-black w-[205px] h-[62px] rounded-[6px]"
                      >
                        <div className="flex justify-between max-hamburger:w-full max-sm:px-[10px] cursor-pointer h-[62px] items-center pr-[10px] pl-[16.27px]">
                          {" "}
                          <div className="max-sm:text-sm">
                            {" "}
                            {passing_year || "Passing Year"}
                            {course_ || "Passing Year"}
                          </div>
                          <Image
                            src="/drop.svg"
                            className={
                              isPassingOpen
                                ? "h-[6.93px] rotate-180 w-[12.88px] cursor-pointer"
                                : "h-[6.93px] w-[12.88px] cursor-pointer"
                            }
                            width={12.88}
                            height={6.93}
                            onClick={() => togglePassingMenu()}
                          />
                        </div>

                        {isPassingOpen && (
                          <div className="h-[190px] bg-[white] z-[20] relative overflow-y-scroll mt-[10px]">
                            <ul>
                              {years.map((passingyear) => (
                                <li
                                  className="text-[14px] cursor-pointer leading-[18.2px] bg-[white] py-[10px] pr-[10px] pl-[16.27px]"
                                  key={passingyear}
                                  onClick={() =>
                                    handlePassingYearSelect(passingyear)
                                  }
                                >
                                  {passingyear}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => setActiveAndSection("frame1")}
              className="w-[425px] max-sm:w-full absolute max-sm:relative max-sm:bottom-0 bottom-[75px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
      {activeSection === "frame1" && (
        <div className="w-[598px] max-md:px-[40px] max-sm:px-[20px] max-md:w-full relative bg-[white] h-[100vh] flex flex-col pl-[60px] pb-[48.07px] pt-[98px] pr-[113px]">
          <div className="flex flex-col gap-[51px]">
            <strong className="text-[24.71px] h-[60px] leading-[29.65px]">
              Select The Course You Are Interested In{" "}
            </strong>
            <Image
              src="/drop.svg"
              className={
                isOpen
                  ? "absolute rotate-180 max-sm:right-[40px] max-md:right-[60px] right-[138px] cursor-pointer top-[235.25px]"
                  : "absolute right-[138px] max-sm:right-[40px] max-md:right-[60px] cursor-pointer top-[235.25px]"
              }
              width={19.98}
              height={10.75}
              onClick={() => toggleMenu()}
            />
            <div
              onClick={() => toggleMenu()}
              className="pl-[25.71px] h-[62px] bg-white cursor-pointer w-full border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
            >
              {" "}
              {course_selected || "Select course"}
            </div>{" "}
            {isOpen && (
              <div className="bg-white max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-black top-[267px] z-[22222] cursor-pointer">
                <ul>
                  <li
                    onClick={() =>
                      handleOptionSelect("No-code, Low-code Development")
                    }
                    className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    No-code, Low-code Development
                  </li>
                  <li
                    onClick={() =>
                      handleOptionSelect("Artificial Intelligence (AI/ML)")
                    }
                    className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Artificial Intelligence (AI/ML)
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Data Analytics")}
                    className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Data Analytics
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Full Stack Development")}
                    className="pl-[25.71px] w-[423.2px] max-md:w-full cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Full Stack Development
                  </li>
                </ul>
              </div>
            )}
            <button
              onClick={() => setActiveAndSection("frame2")}
              className="w-[425px] max-sm:w-full pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
      {activeSection === "frame2" && (
        <div className="w-[598px] max-md:px-[40px] max-sm:px-[20px] max-md:w-full relative bg-[white] h-[100vh] flex flex-col pl-[60px] pb-[48.07px] pt-[98px] pr-[113px]">
          <div className="flex flex-col">
            <strong className="text-[24.71px] h-[60px] leading-[29.65px]">
              Complete the KYC{" "}
            </strong>
            <div className="max-hamburger:w-[100%] mt-[35px]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">
                Enter your PAN card number
              </p>
              <input
                type="text"
                name=""
                id=""
                className="w-[257px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
            <div className="w-[673px] max-md:w-full mt-[27.83px]">
              <p className="text-[14px] leading-[15.4px] mb-[10px]">
                Upload your PAN card image{" "}
              </p>
              <div className="flex max-sm:flex-col max-sm:items-start gap-[12.5px] items-center">
                <input type="file" id="fileupload" className="hidden" />
                <label
                  htmlFor="fileupload"
                  className="cursor-pointer max-sm:text-[11px] max-sm:pr-[20px] max-sm:w-full italic text-[14px] leading-[16.8px] pr-[102.73px] py-[11.5px] pl-[16.27px] rounded-[4px] h-[40px] border-[0.5px] text-[#000000B3] border-[#00000080]"
                >
                  Click to upload the image of PAN card{" "}
                </label>
                <p className="opacity-70 text-[14px] leading-[16.8px] capitalize">
                  max file size: 2 MB
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveAndSection("frame3")}
              className="w-[425px] max-sm:w-full mt-[51px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Finish KYC{" "}
            </button>
          </div>
        </div>
      )}
      {activeSection === "frame3" && (
        <div className="absolute gap-[20.52px] w-full h-[100vh] flex-col top-0 left-0 bg-[#f1f1f1] flex justify-center items-center">
          <Image src="/Frame 18.svg" width={85.48} height={85.48} />{" "}
          <h1 className="w-[258.55px] text-[45.8px] font-bold text-center leading-[54.96px]">
            All Done!{" "}
          </h1>
          <p className="w-[258.55px] text-center terxt-black text-[16px] leading-[19.2px]">
            You can start learning in {countdown}s.{" "}
            <Link
              href={"/dashboard"}
              className="border-b-[1px] border-black inline-block"
            >
              Click here
            </Link>{" "}
            if you aren’t redirected{" "}
          </p>
        </div>
      )}
    </main>
  );
}
