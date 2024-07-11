import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const [state, setstate] = useState("1/4");
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
                onClick={() => setstate('1/4')}
                className="mt-[0.61px]"
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
                Enter the branch of your degree
              </p>
              <input
                id="numberedInput"
                type="email"
                placeholder="Enter the branch of your degree"
                className="pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[273px] p-[8px] absolute leading-[15.6px]">
                Enter your college name
              </p>
              <input
                id="numberedInput"
                type="number"
                placeholder="Enter your college name"
                className="pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />

              <button onClick={() => setstate('3/4')} className="w-[421px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "passwordupdated" && (
        <div className="w-[595px] max-md:px-[40px] max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[52.16px] pt-[130px] pr-[113px]">
          <div
            className={
              emailentered
                ? "flex w-[502.43px] flex-col gap-[32px]"
                : "flex w-[502.43px] flex-col gap-[50px]"
            }
          >
            <div className="absolute w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] leading-[30px]">
              Password updated.
            </strong>
            <div className="flex flex-col relative gap-[32px]">
              <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                Enter your email
              </p>
              <input
                id="numberedInput"
                type="number"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your email"
                className="pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              {passwordentered ? (
                <p className="text-[#D21313] text-[13px] left-[18px] bg-white top-[80px] p-[8px] absolute leading-[15.6px]">
                  Password invalid
                </p>
              ) : (
                <p className="text-black text-[13px] left-[18px] bg-white top-[80px] p-[8px] absolute leading-[15.6px]">
                  Enter your password
                </p>
              )}
              <input
                id="numberedInput"
                type={visible ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
                className={
                  passwordentered
                    ? "pl-[25.71px] w-[421px] text-[#D21313] border-[1px] border-[#D21313] rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                    : "pl-[25.71px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                }
              />
              {visible ? (
                <Image
                  src="eye-open.svg"
                  className="absolute cursor-pointer top-[118.13px] left-[378px]"
                  onClick={() => setvisible(!visible)}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="eye.svg"
                  className="absolute cursor-pointer top-[118.13px] left-[378px]"
                  onClick={() => setvisible(!visible)}
                  width={24}
                  height={24}
                />
              )}

              <div className="flex w-full flex-col gap-[16px]">
                <div className="flex w-[421px] justify-between">
                  <div className="flex items-center gap-[8px]">
                    <input
                      type="checkbox"
                      className="w-[18px] h-[18px]"
                      name="signin"
                      id="signin"
                    />
                    <label
                      htmlFor="signin"
                      className="text-[13px] cursor-pointer leading-[15.6px] font-semibold"
                    >
                      Keep me signed in
                    </label>
                  </div>
                  <p className="underline text-[13px] leading-[15.6px] font-semibold">
                    <Link href={"/forgot-password"}>Forgot password</Link>
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-[421px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
                >
                  Log In
                </button>
                <p className="mt-[8px] text-[13px] leading-[15.6px] w-full">
                  Are you a new user?
                  <Link href="/signup" className="ml-[8px] underline">
                    <strong>Register</strong>
                  </Link>
                </p>
              </div>
              <div className="text-[13px] w-[421px] mt-[52.99px] leading-[19.5px] text-[#00000099]">
                By clicking on Log In you are agreeing to Parallel’s
                <span className="ml-[4px] cursor-pointer text-black underline">
                  Terms Of Service
                </span>
                , and
                <span className="ml-[4px] cursor-pointer text-black underline">
                  Privacy Policy.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="h-[100vh] w-full relative overflow-hidden">
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
