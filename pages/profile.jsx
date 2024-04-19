import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
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
      <Navbar />
      <main className="pl-[60px] pt-[51.08px] pb-[67px]">
        <h1 className="capitalize text-[20px] leading-[26px] font-semibold mb-[35.92px]">
          your account
        </h1>
        <div className="w-[1097px] h-[292px] pt-[38.5px] pl-[28.5px] bg-white rounded-[5px]">
          <h1 className="text-[20px] leading-[26px] font-medium">
            User Information
          </h1>
          <div className="flex gap-[33px] mt-[28.5px] mb-[23px]">
            <div>
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Name</p>
              <input
                type="text"
                name=""
                id=""
                className="w-[309px] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
            <div>
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Username</p>
              <input
                type="text"
                name=""
                id=""
                className="w-[309px] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
          <div className="flex items-end gap-[33px]">
            <div>
              <p className="text-[14px] leading-[15px] mb-[10px]">College</p>
              <input
                type="text"
                name=""
                id=""
                className="w-[309px] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
            <div className="flex gap-[12px]">
              <div
                onClick={toggleMenu}
                className="border-[1px] border-black w-[205px] h-[41px] rounded-[6px]"
              >
                <div className="flex justify-between h-[41px] items-center pr-[10px] pl-[16.27px]">
                  {" "}
                  <div> {selectedYear || "Joining Year"}</div>
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "h-[6.93px] rotate-180 w-[12.88px] cursor-pointer"
                        : "h-[6.93px] w-[12.88px] cursor-pointer"
                    }
                    width={12.88}
                    height={6.93}
                    onClick={() => toggleMenu()}
                  />
                </div>

                {isOpen && (
                  <div className="h-[190px] overflow-y-scroll mt-[10px]">
                    <ul>
                      {years.map((year) => (
                        <li
                          className="text-[14px] leading-[18.2px] bg-[white] py-[10px] pr-[10px] pl-[16.27px]"
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
                className="border-[1px] border-black w-[205px] h-[41px] rounded-[6px]"
              >
                <div className="flex justify-between h-[41px] items-center pr-[10px] pl-[16.27px]">
                  {" "}
                  <div> {selectedPassingYear || "Passing Year"}</div>
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
                  <div className="h-[190px] overflow-y-scroll mt-[10px]">
                    <ul>
                      {years.map((passingyear) => (
                        <li
                          className="text-[14px] leading-[18.2px] bg-[white] py-[10px] pr-[10px] pl-[16.27px]"
                          key={passingyear}
                          onClick={() => handlePassingYearSelect(passingyear)}
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
        </div>
        <section className="mt-[25px] bg-white rounded-[5px] w-[1097px] h-[335px] pt-[38.5px] pl-[23.5px]">
          <h1 className="capitalize text-[20px] leading-[26px] font-semibold mb-[28.5px]">
            Job preferences{" "}
          </h1>
          <div className="w-[673px]">
            <p className="text-[14px] leading-[15.4px] mb-[10px]">Resume </p>
            <div className="flex gap-[12.5px] items-center">
              <input type="file" id="fileupload" className="hidden" />
              <label
                htmlFor="fileupload"
                className="cursor-pointer italic text-[14px] leading-[16.8px] pr-[102.73px] py-[11.5px] pl-[16.27px] rounded-[4px] h-[40px] border-[0.5px] text-[#000000B3] border-[#00000080]"
              >
                Click to upload your resume
              </label>
              <p className="opacity-70 text-[14px] leading-[16.8px] capitalize">max file size: 2 MB</p>
            </div>
          </div>
          <div className="w-[673px] mt-[28.5px]">
            <p className="text-[14px] leading-[15.4px] mb-[10px]">
              Location preference
            </p>
            <div className="flex flex-wrap gap-[11px]">
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Remote" id="Remote" />
                <label
                  htmlFor="Remote"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Remote
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Bangalore" id="Bangalore" />
                <label
                  htmlFor="Bangalore"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Bangalore
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Hyderbad" id="Hyderbad" />
                <label
                  htmlFor="Hyderbad"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Hyderbad
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Chennai" id="Chennai" />
                <label
                  htmlFor="Chennai"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Chennai
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Delhi" id="Delhi" />
                <label
                  htmlFor="Delhi"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Delhi
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Mumbai" id="Mumbai" />
                <label
                  htmlFor="Mumbai"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Mumbai
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Gurgaon" id="Gurgaon" />
                <label
                  htmlFor="Gurgaon"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Gurgaon
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Ahmedabad" id="Ahmedabad" />
                <label
                  htmlFor="Ahmedabad"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Ahmedabad
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Noida" id="Noida" />
                <label
                  htmlFor="Noida"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Noida
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Pune" id="Pune" />
                <label
                  htmlFor="Pune"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Pune
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Nashik" id="Nashik" />
                <label
                  htmlFor="Nashik"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Nashik
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Chhattisgarh" id="Chhattisgarh" />
                <label
                  htmlFor="Chhattisgarh"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Chhattisgarh
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[1097px] mt-[25px] pt-[25.4px] border-[2px] border-[#672B094D] rounded-[6px] pb-[36px] pl-[22.32px] h-[131px] bg-[#FFEAC9]">
          <p className="text-[20px] leading-[26px] pl-[2.78px] mb-[27px] font-bold capitalize text-[#672B09]">
            Support{" "}
          </p>
          <p className="text-[16px] leading-[20.8px] text-[#672B09]">
            Facing Issues? Get Help At{" "}
            <a
              href="mailto:help@parallel.com"
              className="font-bold border-b-[1px] border-[#672B09]"
            >
              help@parallel.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
