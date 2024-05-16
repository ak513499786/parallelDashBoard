import RecruiterNavbar from "@/components/recruiternavbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [Accordian, setAccordian] = useState(false);
  const [Accordian1, setAccordian1] = useState(false);
  const [Accordian2, setAccordian2] = useState(false);
  const [Accordian3, setAccordian3] = useState(false);
  const [Accordian4, setAccordian4] = useState(false);
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
      <main className="pl-[59.96px] pr-[59.96px] max-xl:px-[60px] max-md:px-[40px] max-sm:px-[20px] pt-[41px] pb-[38px]">
        <div className="flex justify-between items-center mb-[24px]">
          <h1 className="capitalize text-[20px] leading-[26px] font-bold">
            Support{" "}
          </h1>
        </div>
        <div className="flex gap-[20px] max-sm:flex-wrap mb-[24px]">
          <section className="max-sm:px-[20px] flex justify-center items-center max-xl:w-full bg-white rounded-[5px] w-[50%] h-[267px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[71.14px] flex justify-center items-center h-[71.14px] bg-[#D9D9D9] rounded-[100%]">
                <Image
                  src="/call.svg"
                  className=""
                  width={32.35}
                  height={32.35}
                />
              </div>
              <p className="text-[16px] leading-[19.2px] mt-[23px] text-center opacity-80">
                Call us
              </p>
              <p className="text-[20px] leading-[24px] mt-[8px] text-center">
                +91 79375 73658
              </p>
            </div>
          </section>
          <section className="max-sm:px-[20px] flex justify-center items-center max-xl:w-full bg-white rounded-[5px] w-[50%] h-[267px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[71.14px] flex justify-center items-center h-[71.14px] bg-[#D9D9D9] rounded-[100%]">
                <Image
                  src="/mail.svg"
                  className=""
                  width={32.35}
                  height={32.35}
                />
              </div>
              <p className="text-[16px] leading-[19.2px] mt-[23px] text-center opacity-80">
                Send us a mail
              </p>
              <p className="text-[20px] leading-[24px] mt-[8px] text-center">
                support@parallel.com
              </p>
            </div>
          </section>
        </div>
        <section className="mt-[16px] max-sm:px-[20px] max-md:px-[20px] max-hamburger:h-auto max-hamburger:pb-[40px] max-hamburger:pr-[40px] max-xl:w-full bg-white rounded-[5px] w-full h-[228px] pt-[29.77px] pl-[38px]">
          <h1 className="capitalize text-[20px] leading-[26px] font-semibold mb-[42px]">
            Your Account managers{" "}
          </h1>
          <div className="flex gap-[59px] max-hamburger:justify-center max-md:flex-col">
            <div className="flex max-hamburger:items-center max-hamburger:flex-col gap-[15px]">
              <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
              <div>
                <h1 className="text-[20px] leading-[24px] max-hamburger:text-center">
                  Account manager
                </h1>
                <div className="flex max-hamburger:justify-center gap-[4px] max-smallphone:mt-[4px] mt-[8px] text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image src="/call.svg" width={17.5} height={17.5} />
                  <span>+91 79375 73658</span>
                </div>
                <div className="flex gap-[4px] max-hamburger:justify-center max-smallphone:mt-[4px] mt-[8px] text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image src="/mail.svg" width={17.5} height={17.5} />
                  <span>accountmanager@parallel.com</span>
                </div>
              </div>
            </div>
            <div className="flex max-hamburger:flex-col max-hamburger:items-center gap-[15px]">
              <div className="w-[53.39px] h-[53.39px] bg-[#D9D9D9] rounded-[100%]"></div>
              <div>
                <h1 className="text-[20px] leading-[24px] max-hamburger:text-center">
                  Account manager
                </h1>
                <div className="flex gap-[4px] max-hamburger:justify-center max-smallphone:mt-[4px] mt-[8px] text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image src="/call.svg" width={17.5} height={17.5} />
                  <span>+91 79375 73658</span>
                </div>
                <div className="flex gap-[4px] mt-[8px] max-smallphone:mt-[4px] max-hamburger:justify-center text-[16px] max-smallphone:text-[12px] max-smallphone:leading-[14.4px] leading-[19.2px]">
                  <Image src="/mail.svg" width={17.5} height={17.5} />
                  <span>accountmanager@parallel.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-[24px] max-md:px-[20px] max-xl:px-[40px] bg-white w-full rounded-[5px] flex justify-center py-[61px]">
          <div className="w-[1042px] max-xl:w-full">
            <h1 className="text-center text-[32px] leading-[38.4px] pb-[78px] border-b-[1px] border-[#00000099]">
              Frequently Asked Questions
            </h1>
            <div
              onClick={() => setAccordian(!Accordian)}
              className={
                Accordian
                  ? "h-auto flex flex-col pt-[30px] justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
                  : "h-[121.82px] flex flex-col justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
              }
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[28px] max-sm:text-[24px] max-smallphone:text-[20px] max-smallphone:leading-[24px] max-smallphone:w-[190px] max-sm:leading-[28px] max-md:w-[330px] max-sm:w-[250px] cursor-pointer leading-[30.52px] tracking-[-0.56px]">
                  Amet enim dignissim cras sit nunc tortor.
                </h1>
                <div className="border-[1px] cursor-pointer border-black flex items-center justify-center rounded-[100%] w-[61.82px] h-[61.82px] max-sm:w-[30px] max-sm:h-[30px]">
                  <Image
                    src="/arrow.svg"
                    className={Accordian ? " rotate-180 max-sm:w-[20px] max-sm:h-[20px]" : "max-sm:w-[20px] max-sm:h-[20px]"}
                    width={30.52}
                    height={30.52}
                  />
                </div>
              </div>
              <p
                className={
                  Accordian
                    ? "py-[30px] w-[776.14px] max-sm:text-base max-lg:w-full text-[20px] leading-[30px]"
                    : "py-[30px] w-[776.14px] max-lg:w-full hidden text-[20px] leading-[30px]"
                }
              >
                Praesent pharetra lectus congue posuere. Sapien porta eget at
                tempor nunc. Posuere eget a volutpat rhoncus imperdiet commodo.
                Augue risus magna magna placerat sagittis nec. Pellentesque
                felis consectetur sed id. Donec ac eleifend varius arcu
                tincidunt. Euismod ac mattis donec enim velit facilisis
                malesuada nibh.
              </p>
            </div>
            <div
              onClick={() => setAccordian1(!Accordian1)}
              className={
                Accordian1
                  ? "h-auto flex flex-col pt-[30px] justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
                  : "h-[121.82px] flex flex-col justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
              }
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[28px] max-sm:text-[24px] max-smallphone:text-[20px] max-smallphone:leading-[24px] max-smallphone:w-[190px] max-sm:leading-[28px] max-md:w-[330px] max-sm:w-[250px] cursor-pointer leading-[30.52px] tracking-[-0.56px]">
                  Amet enim dignissim cras sit nunc tortor.
                </h1>
                <div className="border-[1px] cursor-pointer border-black flex items-center justify-center rounded-[100%] w-[61.82px] h-[61.82px] max-sm:w-[30px] max-sm:h-[30px]">
                  <Image
                    src="/arrow.svg"
                    className={Accordian1 ? " rotate-180 max-sm:w-[20px] max-sm:h-[20px]" : "max-sm:w-[20px] max-sm:h-[20px]"}
                    width={30.52}
                    height={30.52}
                  />
                </div>
              </div>
              <p
                className={
                  Accordian1
                    ? "py-[30px] w-[776.14px] max-sm:text-base max-lg:w-full text-[20px] leading-[30px]"
                    : "py-[30px] w-[776.14px] max-lg:w-full hidden text-[20px] leading-[30px]"
                }
              >
                Praesent pharetra lectus congue posuere. Sapien porta eget at
                tempor nunc. Posuere eget a volutpat rhoncus imperdiet commodo.
                Augue risus magna magna placerat sagittis nec. Pellentesque
                felis consectetur sed id. Donec ac eleifend varius arcu
                tincidunt. Euismod ac mattis donec enim velit facilisis
                malesuada nibh.
              </p>
            </div>
            <div
              onClick={() => setAccordian2(!Accordian2)}
              className={
                Accordian2
                  ? "h-auto flex flex-col pt-[30px] justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
                  : "h-[121.82px] flex flex-col justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
              }
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[28px] max-sm:text-[24px] max-smallphone:text-[20px] max-smallphone:leading-[24px] max-smallphone:w-[190px] max-sm:leading-[28px] max-md:w-[330px] max-sm:w-[250px] cursor-pointer leading-[30.52px] tracking-[-0.56px]">
                  Amet enim dignissim cras sit nunc tortor.
                </h1>
                <div className="border-[1px] cursor-pointer border-black flex items-center justify-center rounded-[100%] w-[61.82px] h-[61.82px] max-sm:w-[30px] max-sm:h-[30px]">
                  <Image
                    src="/arrow.svg"
                    className={Accordian2 ? " rotate-180 max-sm:w-[20px] max-sm:h-[20px]" : "max-sm:w-[20px] max-sm:h-[20px]"}
                    width={30.52}
                    height={30.52}
                  />
                </div>
              </div>
              <p
                className={
                  Accordian2
                    ? "py-[30px] w-[776.14px] max-lg:w-full text-[20px] leading-[30px] max-sm:text-base"
                    : "py-[30px] w-[776.14px] max-lg:w-full hidden text-[20px] leading-[30px]"
                }
              >
                Praesent pharetra lectus congue posuere. Sapien porta eget at
                tempor nunc. Posuere eget a volutpat rhoncus imperdiet commodo.
                Augue risus magna magna placerat sagittis nec. Pellentesque
                felis consectetur sed id. Donec ac eleifend varius arcu
                tincidunt. Euismod ac mattis donec enim velit facilisis
                malesuada nibh.
              </p>
            </div>
            <div
              onClick={() => setAccordian3(!Accordian3)}
              className={
                Accordian3
                  ? "h-auto flex flex-col pt-[30px] justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
                  : "h-[121.82px] flex flex-col justify-center max-sm:px-[10px] border-b-[1px] border-[#00000099] px-[30px] cursor-pointer"
              }
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[28px] max-sm:text-[24px] max-smallphone:text-[20px] max-smallphone:leading-[24px] max-smallphone:w-[190px] max-sm:leading-[28px] max-md:w-[330px] max-sm:w-[250px] cursor-pointer leading-[30.52px] tracking-[-0.56px]">
                  Amet enim dignissim cras sit nunc tortor.
                </h1>
                <div className="border-[1px] cursor-pointer border-black flex items-center justify-center rounded-[100%] w-[61.82px] h-[61.82px] max-sm:w-[30px] max-sm:h-[30px]">
                  <Image
                    src="/arrow.svg"
                    className={Accordian3 ? " rotate-180 max-sm:w-[20px] max-sm:h-[20px]" : "max-sm:w-[20px] max-sm:h-[20px]"}
                    width={30.52}
                    height={30.52}
                  />
                </div>
              </div>
              <p
                className={
                  Accordian3
                    ? "py-[30px] w-[776.14px] max-lg:w-full text-[20px] leading-[30px] max-sm:text-base"
                    : "py-[30px] w-[776.14px] max-lg:w-full hidden text-[20px] leading-[30px]"
                }
              >
                Praesent pharetra lectus congue posuere. Sapien porta eget at
                tempor nunc. Posuere eget a volutpat rhoncus imperdiet commodo.
                Augue risus magna magna placerat sagittis nec. Pellentesque
                felis consectetur sed id. Donec ac eleifend varius arcu
                tincidunt. Euismod ac mattis donec enim velit facilisis
                malesuada nibh.
              </p>
            </div>
            <div
              onClick={() => setAccordian4(!Accordian4)}
              className={
                Accordian4
                  ? "h-auto flex flex-col pt-[30px] justify-center border-b-[1px] border-[#00000099] px-[30px] max-sm:px-[10px] cursor-pointer"
                  : "h-[121.82px] flex flex-col justify-center border-b-[1px] border-[#00000099] px-[30px] max-sm:px-[10px] cursor-pointer"
              }
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[28px] max-sm:text-[24px] max-smallphone:text-[20px] max-smallphone:leading-[24px] max-smallphone:w-[190px] max-sm:leading-[28px] max-md:w-[330px] max-sm:w-[250px] cursor-pointer leading-[30.52px] tracking-[-0.56px]">
                  Amet enim dignissim cras sit nunc tortor.
                </h1>
                <div className="border-[1px] cursor-pointer border-black flex items-center justify-center rounded-[100%] w-[61.82px] h-[61.82px] max-sm:w-[30px] max-sm:h-[30px]">
                  <Image
                    src="/arrow.svg"
                    className={Accordian4 ? " rotate-180 max-sm:w-[20px] max-sm:h-[20px]" : "max-sm:w-[20px] max-sm:h-[20px]"}
                    width={30.52}
                    height={30.52}
                  />
                </div>
              </div>
              <p
                className={
                  Accordian4
                    ? "py-[30px] w-[776.14px] max-lg:w-full text-[20px] leading-[30px] max-sm:text-base"
                    : "py-[30px] w-[776.14px] max-lg:w-full hidden text-[20px] leading-[30px]"
                }
              >
                Praesent pharetra lectus congue posuere. Sapien porta eget at
                tempor nunc. Posuere eget a volutpat rhoncus imperdiet commodo.
                Augue risus magna magna placerat sagittis nec. Pellentesque
                felis consectetur sed id. Donec ac eleifend varius arcu
                tincidunt. Euismod ac mattis donec enim velit facilisis
                malesuada nibh.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-[24px] max-sm:flex-col max-sm:gap-[50px] flex justify-between items-center max-sm:px-[20px] max-md:px-[20px] max-hamburger:h-auto max-hamburger:pb-[40px] max-hamburger:pr-[40px] max-xl:w-full bg-white rounded-[5px] w-full h-[145px] pl-[61.5px] max-lg:h-auto pr-[83px] py-[47px]">
          <h1 className="capitalize max-sm:text-center max-xl:w-[251px] max-smalllaptop:w-[120px] max-lg:w-[251px] text-[24px] leading-[28.8px]">
            Still have unanswered questions?{" "}
          </h1>
          <div className="flex max-xl:gap-[51px] max-lg:gap-[20px] max-lg:flex-col gap-[102px]">
            <div className="flex gap-[23px] max-smallphone:flex-col items-center">
              <div className="w-[51px] flex justify-center items-center h-[51px] bg-[#D9D9D9] rounded-[100%]">
                <Image
                  src="/call.svg"
                  className=""
                  width={23.19}
                  height={23.19}
                />
              </div>
              <div>
                <p className="text-[16px] max-smallphone:text-center leading-[19.2px] opacity-80">
                  Call us
                </p>
                <p className="text-[20px] max-smallphone:text-center leading-[24px] mt-[8px]">
                  +91 79375 73658
                </p>
              </div>
            </div>
            <div className="flex max-smallphone:flex-col gap-[23px] items-center">
              <div className="w-[51px] flex justify-center items-center h-[51px] bg-[#D9D9D9] rounded-[100%]">
                <Image
                  src="/mail.svg"
                  className=""
                  width={23.19}
                  height={23.19}
                />
              </div>
              <div>
                <p className="text-[16px] max-smallphone:text-center leading-[19.2px] opacity-80">
                  Send us a mail
                </p>
                <p className="text-[20px] max-smallphone:text-center leading-[24px] mt-[8px]">
                  support@parallel.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
