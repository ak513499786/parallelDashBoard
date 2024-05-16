import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../../styles/style.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

export default function Signup() {
  const [activeSection, setActiveSection] = useState("signup");
  const [phonenumber, setPhonenumber] = useState("");
  const [otp, setotp] = useState("");
  const [otpcheck, setotpcheck] = useState(true);
  const [email, setemail] = useState("");
  const [help, sethelp] = useState("");
  const [emailchecker, setemailchecker] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [termActive, setTermActive] = useState(false);
  const [contact, setContact] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [whatsappcount, setWhatsappcount] = useState(60);
  const [signUp, setSignUp] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (signUp === false) {
      if (countdown > 0) {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(interval);
      }
    }
  }, [signUp, countdown]);
  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };

  const characterCount = inputValue.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const BackToSignUp = () => {
    setActiveAndSection("signup");
    setSignUp(true);
    setotpcheck(true);
  };
  const Verify = () => {
    if (otp === "") {
      setotpcheck(false);
    } else {
      setotpcheck(true);
      router.push('/recruiter/login')
    }
  };
  const emailcheck = () => {
    if (email === "") {
      setemailchecker(false);
    } else {
      setActiveAndSection("done");
      setemailchecker(true);
      setContact(false);
    }
  };
  const handleOptionSelect = (option) => {
    sethelp(option);
    setIsOpen(false);
  };
  const handleChange = (e) => {
    setPhonenumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignUp(false);
  };
  const setActiveAndSection = (section) => {
    setActiveSection(section);
  };
  const handleKeyDown = (e) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "e" ||
      e.key === "."
    ) {
      e.preventDefault();
    }
  };
  return (
    <main>
      <div className="w-[598px] max-md:px-[40px] max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[60px] pb-[48.07px] pt-[77.36px] pr-[113px]">
        {signUp == true && (
          <div className="flex flex-col gap-[45px]">
            <strong className="text-[24.71px] leading-[29.65px]">
              Create Account{" "}
            </strong>
            <div className="flex flex-col gap-[16px]">
              <input
                id="numberedInput"
                type="text"
                placeholder="Name"
                className="pl-[25.71px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              />
              <input
                id="numberedInput"
                type="text"
                placeholder="Company Email"
                className="pl-[25.71px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              />
              <input
                id="numberedInput"
                type="number"
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                placeholder="Phone Number"
                className="pl-[25.71px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              />
              <input
                id="numberedInput"
                type="number"
                placeholder="Company"
                className="pl-[25.71px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              />
              <button
                onClick={handleSubmit}
                className="w-full my-[12px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
              >
                Request OTP
              </button>
              <p className="text-[16px] leading-[19.2px] w-full text-center">
                Already have an account?
                <Link
                  href="/recruiter/login"
                  className="ml-[8px] border-b-[2px] border-black"
                >
                  <strong>Log In</strong>
                </Link>
              </p>
            </div>
          </div>
        )}
        {signUp == false && (
          <div className="flex flex-col gap-[50px]">
            <strong className="text-[24.71px] capitalize leading-[29.65px]">
              An OTP has been sent to your mail{" "}
            </strong>
            <div className="flex flex-col relative gap-[24px]">
              <strong
                onClick={BackToSignUp}
                className="ml-[8px] w-[63px] h-[20px] cursor-pointer border-b-[2px] border-black"
              >
                Go back
              </strong>
              <strong
                onClick={BackToSignUp}
                className="absolute right-0 h-[20px] cursor-pointer border-b-[2px] border-black"
              >
                Use a different number{" "}
              </strong>
              <div
                className={
                  otpcheck
                    ? "hidden text-[#D41717] bg-white left-[20px] max-sm:left-[10px] px-[5px] text-[11.91px] leading-[14.29px] top-[50px]"
                    : "absolute text-[#D41717] bg-white left-[20px] max-sm:left-[5px] max-sm:text-[9px] px-[5px] text-[11.91px] leading-[14.29px] top-[50px]"
                }
              >
                OTP incorrect. Please enter again or request a new one
              </div>
              <input
                onKeyDown={handleKeyDown}
                type="number"
                placeholder="Enter OTP"
                onChange={(e) => setotp(e.target.value)}
                className={
                  otpcheck
                    ? "pl-[25.71px] mt-[13.5px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                    : "pl-[25.71px] mt-[13.5px] border-[1px] border-[#D41717] rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                }
              />
              <button
                onClick={Verify}
                className="w-full mt-[8px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
              >
                Verify OTP
              </button>
              <p className="text-[16px] leading-[19.2px] w-full text-center">
                Request OTP after {countdown}s{" "}
                <strong className="ml-[8px] cursor-pointer border-b-[2px] border-black">
                  Request OTP{" "}
                </strong>
              </p>
            </div>
          </div>
        )}
        <div>
          {otpcheck === false && (
            <div className="mb-[36.93px]">
              <p className="text-[16px] leading-[19.2px] w-full">
                Have trouble signing up?{" "}
              </p>
              <button
                onClick={() => setContact(true)}
                className="w-full pt-[19.93px] my-[16px] pb-[20.07px] border-[1px] border-black bg-white text-black rounded-[6px] text-[17.95px] leading-[21.54px]"
              >
                Contact us{" "}
              </button>
            </div>
          )}

          <div className="text-[14px] leading-[16.8px] w-full text-center">
            By signing up you are agreeing to our{" "}
            <strong
              onClick={() => setTermActive(true)}
              className="ml-[8px] cursor-pointer border-b-[2px] border-black"
            >
              Terms Of Service
            </strong>
          </div>
        </div>
      </div>
      {termActive && (
        <div className="absolute w-full h-[100vh] max-md:px-[40px] max-sm:px-[20px] top-0 left-0 flex justify-center items-center">
          <div className="bg-black opacity-60 w-full h-[100vh] absolute top-0 left-0 z-[20]"></div>
          <div className="w-[530px] max-md:px-[40px] max-sm:px-[20px] max-md:pb-[10px] max-md:pt-[20px] max-md:w-full max-md:h-auto h-[571px] bg-white rounded-[9px] pl-[36.89px] z-[22] pt-[48.17px] pb-[19px]">
            <strong className="text-[24.71px] leading-[29.65px]">
              Terms Of Service
            </strong>
            <p className={style.scroll}>
              Pulvinar integer commodo nisl adipiscing facilisi tincidunt enim
              tempus dui. Feugiat at cursus aliquam sit nunc. Odio aliquet diam
              gravida sem. Curabitur dignissim orci ornare habitasse massa amet.
              Tellus ac elit enim pharetra etiam ut faucibus amet. Diam mauris
              leo sit dictum consectetur aliquet aliquet porttitor augue. Quis
              enim velit dolor justo odio non. Non etiam quis rhoncus nunc. Et
              quis donec est erat viverra elit penatibus. Risus a sit nam
              tristique sit pellentesque velit molestie cursus. Nullam molestie
              in faucibus tristique diam morbi interdum. Malesuada aliquet
              consectetur ullamcorper habitant tempus in leo mi risus. Ligula ut
              felis vehicula risus habitant tincidunt euismod. Ut sed leo
              maecenas sit ipsum. Id blandit condimentum adipiscing id mauris
              laoreet non faucibus faucibus. Non etiam quis rhoncus nunc. Et
              quis donec est erat viverra elit penatibus. Risus a sit nam
              tristique sit pellentesque velit molestie cursus. Nullam molestie
              in faucibus tristique diam morbi interdum. Malesuada aliquet
              consectetur ullamcorper habitant tempus in leo mi risus. Ligula ut
              felis vehicula risus habitant tincidunt euismod. Ut sed leo
              maecenas sit ipsum. Id blandit condimentum adipiscing id mauris
              laoreet non faucibus faucibus.
            </p>
            <button
              onClick={() => setTermActive(false)}
              className="w-[425px] max-md:w-full max-md:ml-0 ml-[15.61px] mt-[13.32px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Close{" "}
            </button>{" "}
          </div>
        </div>
      )}
      {contact && (
        <div className="absolute  max-md:px-[40px] max-sm:px-[20px] max-smallerphone:px-[15px] w-full h-[100vh] top-0 left-0 flex justify-center items-center">
          <div className="bg-black opacity-60 w-full h-[100vh] absolute top-0 left-0 z-[20]"></div>
          <div className="w-[530px] max-smallerphone:px-[15px] max-md:w-full max-md:px-[40px] max-sm:px-[20px] relative h-[571px] bg-white rounded-[9px] pl-[36.89px] pr-[50px] z-[22] pt-[44.45px] pb-[35px]">
            <strong className="text-[24.71px] leading-[29.65px]">
              Fill the form{" "}
            </strong>
            <Image
              src="/Vector (2).svg"
              className="absolute max-md:right-[40px] max-sm:right-[20px] right-[50.33px] cursor-pointer top-[37.29px]"
              width={23.35}
              onClick={() => setContact(false)}
              height={23.35}
            />{" "}
            <p className="mt-[22.55px] max-smallerphone:text-[11px] text-[14px] leading-[16.8px] mb-[25.83px]">
              Our Associates will reach out to you shortly
            </p>
            <div
              className={
                emailchecker
                  ? "hidden text-[#D41717] bg-white left-[20px] px-[5px] text-[11.91px] leading-[14.29px] top-[50px]"
                  : "absolute text-[#D41717] bg-white left-[48.71px] max-sm:left-[30px] px-[5px] text-[11.91px] leading-[14.29px] top-[133px]"
              }
            >
              Enter a valid Phone number/Email{" "}
            </div>
            <input
              id="text"
              type="text"
              placeholder="Phone number/Email"
              onChange={(e) => setemail(e.target.value)}
              className={
                emailchecker
                  ? "pl-[25.71px] max-sm:px-[15px] w-full h-[62px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] max-smallerphone:text-base max-smallerphone:placeholder:text-base leading-[21.54px]"
                  : "pl-[25.71px] max-sm:px-[15px] w-full h-[62px] border-[1px] border-[#D41717] rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] max-smallerphone:text-base max-smallerphone:placeholder:text-base leading-[21.54px]"
              }
            />{" "}
            <Image
              src="/drop.svg"
              className={
                isOpen
                  ? "absolute rotate-180 h-[10.75px] w-[19.98px] max-sm:right-[40px] right-[79px] cursor-pointer top-[248.08px]"
                  : "absolute h-[10.75px] w-[19.98px] right-[79px] cursor-pointer max-sm:right-[35px] max-smallerphone:right-[25px] top-[248.08px]"
              }
              width={19.98}
              height={10.75}
              onClick={() => toggleMenu()}
            />
            <div
              onClick={() => toggleMenu()}
              className="pl-[25.71px] max-sm:px-[15px] h-[62px] bg-white cursor-pointer w-full mt-[20px] border-[1px] border-black rounded-[6px] pt-[19.93px] max-smallerphone:text-base pb-[20.07px] text-[17.95px] leading-[21.54px]"
            >
              <p className=" max-sm:w-[95%]">
                {help || "What do you need help with"}
              </p>
            </div>{" "}
            {isOpen && (
              <div className="bg-white absolute max-md:w-[90%] border-[1px] border-black top-[280px] z-[22222] cursor-pointer">
                <ul>
                  <li
                    onClick={() => handleOptionSelect("Random")}
                    className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[441.5px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Random
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Text")}
                    className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[441.5px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Text
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Lorem")}
                    className="pl-[25.71px] max-sm:px-[15px] max-md:w-full w-[441.5px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Lorem
                  </li>
                </ul>
              </div>
            )}
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              placeholder="Explain your query in brief"
              maxLength={200}
              onChange={handleChangeText}
              className="px-[25.71px] max-smallerphone:text-base max-smallerphone:placeholder:text-base w-full max-sm:px-[15px] h-[132px] resize-none placeholder-black mt-[20px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
            ></textarea>
            <div className="text-black absolute max-sm:right-[35px] leading-[16.8px] top-[400px] right-[67.4px] text-sm mt-2">
              {characterCount}/200
            </div>
            <button
              onClick={emailcheck}
              className="w-full shadow-lg shadow-white max-md:ml-0 ml-[3px] mt-[38.17px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Submit{" "}
            </button>{" "}
          </div>
        </div>
      )}
      {activeSection === "done" && (
        <div className="absolute max-md:px-[40px] max-sm:px-[20px] gap-[31.4px] w-full h-[100vh] flex-col top-0 left-0 bg-[#f1f1f1] flex justify-center items-center">
          <Image src="/Frame 18.svg" width={85.48} height={85.48} />{" "}
          <h1 className="w-[649.02px] text-[45.8px] max-sm:text-[32px] max-sm:leading-[40px] max-md:w-full font-bold text-center leading-[54.96px]">
            Your request has been submitted successfully!
          </h1>
          <p className="text-[17.95px] leading-[21.54px]">
            Our associates will reach out to you briefly
          </p>
          <button
            onClick={BackToSignUp}
            className="w-[425px] max-sm:w-full pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
          >
            Go Back to sign up page{" "}
          </button>{" "}
          <p className="absolute bottom-[33.03px]">TICKET ID: 22A-R3D-5FF</p>
        </div>
      )}
    </main>
  );
}
