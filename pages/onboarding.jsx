import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const [state, setstate] = useState("1/4");
  const [pan, setpan] = useState("");
  const [pass, setpass] = useState("");


  
  return (
    <main className="flex">
      {state === "1/4" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] flex-col gap-[32px]">
            <div className="flex items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                className="mt-[0.61px]"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">1/4</p>
            </div>
            <div className="absolute w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex flex-col relative gap-[32px]">
              <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                Enter your name
              </p>
              <input
                id="numberedInput"
                type="text"
                placeholder="Enter your name"
                className="pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[81px] p-[8px] absolute leading-[15.6px]">
                Enter your phone number
              </p>
              <div className="pl-[25.71px] flex w-[421px] border-[1px] border-black rounded-[6px]">
                <p className="text-base pt-[21px]">+ 91 |</p>
                <input
                  id="numberedInput"
                  type="number"
                  placeholder="Enter your phone number"
                  className="pt-[21.5px] pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[177px] p-[8px] absolute leading-[15.6px]">
                Enter your email
              </p>
              <input
                id="numberedInput"
                type="email"
                placeholder="Enter your email"
                className="pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[273px] p-[8px] absolute leading-[15.6px]">
                Enter your DOB(DD/MM/YY)
              </p>
              <input
                id="numberedInput"
                type="number"
                placeholder="DD/MM/YY"
                className="pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />

              <button
                onClick={() => setstate("2/4")}
                className="w-[421px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "2/4" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] flex-col gap-[32px]">
            <div className="flex items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                onClick={() => setstate("1/4")}
                className="mb-[0.61px]"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">2/4</p>
            </div>
            <div className="absolute w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex flex-col relative">
              <p className="text-black text-[13px] bg-white mb-[13px] p-[8px] leading-[15.6px]">
                Current occupation
              </p>
              <div className="flex gap-[20px] w-[434px]">
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="occupation" id="occupation" />
                  <label
                    htmlFor="occupation"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Employed
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="occupation" id="occupation" />
                  <label
                    htmlFor="occupation"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Student
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="occupation" id="occupation" />
                  <label
                    htmlFor="occupation"
                    className="text-[14px] w-[203px] h-[20px] leading-[16.8px]"
                  >
                    Passed out student looking for employment
                  </label>
                </div>
              </div>
              <p className="text-black text-[13px] mb-[13px] mt-[19px] left-[18px] bg-white p-[8px] leading-[15.6px]">
                Highest qualification
              </p>
              <div className="flex gap-[20px] w-[434px]">
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="qualification" id="qualification" />
                  <label
                    htmlFor="qualification"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Bachelor's Degree
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="qualification" id="qualification" />
                  <label
                    htmlFor="qualification"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Master's Degree
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="qualification" id="qualification" />
                  <label
                    htmlFor="qualification"
                    className="text-[14px] leading-[16.8px]"
                  >
                    PhD
                  </label>
                </div>
              </div>
              <div className="w-[434px] mt-[38px] border-[1px] border-[#00000033]"></div>

              <p className="text-black text-[13px] left-[18px] bg-white top-[210px] p-[8px] absolute leading-[15.6px]">
                Enter the branch of your degree
              </p>
              <input
                id="numberedInput"
                type="email"
                placeholder="Enter the branch of your degree"
                className="pl-[25.71px] w-[421px] mt-[38px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[312px] p-[8px] absolute leading-[15.6px]">
                Enter your college name
              </p>
              <input
                id="numberedInput"
                type="number"
                placeholder="Enter your college name"
                className="pl-[25.71px] mt-[38px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />

              <button
                onClick={() => setstate("3/4")}
                className="w-[421px] mt-[32px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "3/4" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] flex-col gap-[32px]">
            <div className="flex items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                onClick={() => setstate("2/4")}
                className="mb-[0.61px]"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">3/4</p>
            </div>

            
            <div className="absolute w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex flex-col gap-[32px] relative">
              <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                Enter your PAN number
              </p>
              <input
                id="numberedInput"
                type="text"
                placeholder="Enter your PAN number"
                className="pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[81px] p-[8px] absolute leading-[15.6px]">
                Upload PAN card photo
              </p>
              <div className="flex w-[421px]">
                <input
                  id="pan"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setpan(file.name);
                    }
                  }}
                  className="pt-[21.5px] hidden pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
                <label
                  htmlFor="pan"
                  className="cursor-pointer flex justify-between w-[420px]"
                >
                  <div className="pt-[21.5px] whitespace-nowrap w-[100px] overflow-scroll flex pl-[25.71px] w-[337px]  border-[1px] border-black rounded-[6px] justify-between items-center text-[#00000099] pr-[11.68px] w-[350px] pb-[16.5px] text-base">
                    <i>{pan === "" ? "Click to upload photo" : pan}</i>
                    <span className=" text-[13px] leading-[15.6px]">
                      {pan === "" ? (
                        "Max file size: 3 MB"
                      ) : (
                        <Image src="green-tick.svg" width={16} height={12} />
                      )}
                    </span>
                  </div>
                  {pan === "" ? (
                    <Image src="upload-pan.svg" width={62} height={67} />
                  ) : (
                    <Image
                      src="undo.svg"
                      onClick={() => setpan("")}
                      width={62}
                      height={67}
                    />
                  )}
                </label>
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[177px] p-[8px] absolute leading-[15.6px]">
                Upload passport sized photo
              </p>
              <div className="flex w-[421px]">
                <input
                  id="passport"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setpass(file.name);
                    }
                  }}
                  className="pt-[21.5px] hidden pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
                <label
                  htmlFor="passport"
                  className="cursor-pointer flex justify-between w-[420px]"
                >
                  <div className="pt-[21.5px] whitespace-nowrap w-[100px] overflow-scroll flex pl-[25.71px] w-[337px]  border-[1px] border-black rounded-[6px] justify-between items-center text-[#00000099] pr-[11.68px] w-[350px] pb-[16.5px] text-base">
                    <i>{pass === "" ? "Click to upload photo" : pass}</i>
                    <span className=" text-[13px] leading-[15.6px]">
                      {pass === "" ? (
                        "Max file size: 3 MB"
                      ) : (
                        <Image src="green-tick.svg" width={16} height={12} />
                      )}
                    </span>
                  </div>
                  {pass === "" ? (
                    <Image src="upload-pan.svg" width={62} height={67} />
                  ) : (
                    <Image
                      src="undo.svg"
                      onClick={() => setpass("")}
                      width={62}
                      height={67}
                    />
                  )}
                </label>
              </div>
              <button
                onClick={() => setstate("4/4")}
                className="w-[421px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "4/4" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[167px]">
          <div className="flex w-[502.43px] flex-col gap-[32px]">
            <div className="flex items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                onClick={() => setstate("3/4")}
                className="mb-[0.61px]"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">4/4</p>
            </div>
            <div className="absolute w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              Select the course you want to enroll in
            </strong>
            <div className="flex w-[494px] flex-col relative">
              <p className="text-black text-[13px] bg-white mb-[13px] p-[8px] leading-[15.6px]">
                Select Course
              </p>
              <div className="flex gap-[20px] w-[494px]">
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="course" id="course" />
                  <label
                    htmlFor="course"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Full Stack Development
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="course" id="course" />
                  <label
                    htmlFor="course"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Backend Mastery
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input type="radio" name="course" id="course" />
                  <label
                    htmlFor="course"
                    className="text-[14px] h-[20px] leading-[16.8px]"
                  >
                    Frontend Mastery{" "}
                  </label>
                </div>
              </div>
              <Link href={"/class"}>
                <button className="w-[421px] mt-[32px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base">
                  Proceed to payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="h-[100vh] w-[calc(100%-710px)] relative overflow-hidden">
        <Image
          src="/bg-eclips.svg"
          className="w-full object-cover mixblend h-auto"
          width={1024}
          height={700}
        />
      </div>
    </main>
  );
}
