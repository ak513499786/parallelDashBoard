import Link from "next/link";
import { useState } from "react";
import style from "../styles/style.module.css";
// import { sendOTP } from './api/sendOTP';
import Image from "next/image";
import { useRouter } from "next/router";

export default function Login() {
  const [otpcheck, setotpcheck] = useState(true);
  const [email, setemail] = useState("");
  const [help, sethelp] = useState("");
  const [emailchecker, setemailchecker] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [termActive, setTermActive] = useState(false);
  const [contact, setContact] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [validatepassword, setvalidatepassword] = useState(true);
  const [password, setpassword] = useState("");
  const [validateemail, setvalidateemail] = useState(true);
  const [loginemail, setloginemail] = useState("");
  const router = useRouter();

  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };
  const characterCount = inputValue.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const emailcheck = () => {
    if (email === "") {
      setemailchecker(false);
    } else {
      setemailchecker(true);
      setContact(false);
    }
  };
  const handleOptionSelect = (option) => {
    sethelp(option);
    setIsOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || loginemail === "") {
      setvalidatepassword(false);
      setvalidateemail(false);
      setotpcheck(false);
    } else {
      setvalidateemail(true);
      setvalidatepassword(true);
      setotpcheck(true);
      router.push("/onboarding");
    }
  };
  return (
    <main>
      <div className="w-[598px] relative bg-[white] h-[100vh] flex flex-col justify-between pl-[60px] pb-[48.07px] pt-[114px] pr-[113px]">
        <div className="flex flex-col gap-[35px]">
          <strong className="text-[24.71px] leading-[29.65px]">Log In </strong>
          <div className="flex flex-col gap-[28px]">
            <Link
              href={"/signup"}
              className="w-[63px] font-bold h-[20px] cursor-pointer border-b-[2px] border-black"
            >
              Go back
            </Link>
            {(validateemail === false || validatepassword === false) && (
              <p className="absolute text-black top-[171px] right-[113px] px-[14px] text-[14px] leading-[16.8px] bg-[#F1F1F1] rounded-[6px] py-[13px]">
                The credentials entered do not match{" "}
              </p>
            )}
            <div
              className={
                validateemail
                  ? "hidden text-[#D41717] bg-white left-[78px] px-[5px] text-[11.91px] leading-[14.29px] top-[221px]"
                  : "absolute text-[#D41717] bg-white left-[78px] px-[5px] text-[11.91px] leading-[14.29px] top-[221px]"
              }
            >
              Enter a valid Username{" "}
            </div>
            <input
              id="numberedInput"
              type="text"
              onChange={(e) => setloginemail(e.target.value)}
              placeholder="Username"
              className={
                validateemail
                  ? "pl-[25.71px] border-[1px] h-[62px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                  : "pl-[25.71px] border-[1px] h-[62px] border-[#D41717] rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              }
            />
            <div
              className={
                validatepassword
                  ? "hidden text-[#D41717] bg-white left-[78px] px-[5px] text-[11.91px] leading-[14.29px] top-[312px]"
                  : "absolute text-[#D41717] bg-white left-[78px] px-[5px] text-[11.91px] leading-[14.29px] top-[312px]"
              }
            >
              Enter a vaild Password{" "}
            </div>
            <input
              id="numberedInput"
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              className={
                validatepassword
                  ? "pl-[25.71px] border-[1px] h-[62px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                  : "pl-[25.71px] border-[1px] h-[62px] border-[#D41717] rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              }
            />
            <button
              onClick={handleSubmit}
              className="w-full pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Log In{" "}
            </button>
            {otpcheck === true && (
              <div className="text-[14px] leading-[16.8px] w-full text-center">
                Have trouble logging in?{" "}
                <strong
                  onClick={() => setContact(true)}
                  className="ml-[8px] cursor-pointer border-b-[2px] border-black"
                >
                  Contact us{" "}
                </strong>
              </div>
            )}
          </div>
        </div>
        <div>
          {otpcheck === false && (
            <div className="mb-[32px]">
              <p className="text-[16px] leading-[19.2px] w-full">
                Have trouble logging in?{" "}
              </p>
              <button
                onClick={() => setContact(true)}
                className="w-full pt-[19.93px] mt-[16px] pb-[20.07px] border-[1px] border-black bg-white text-black rounded-[6px] text-[17.95px] leading-[21.54px]"
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
        <div className="absolute w-full h-[100vh] top-0 left-0 flex justify-center items-center">
          <div className="bg-black opacity-60 w-full h-[100vh] absolute top-0 left-0 z-[20]"></div>
          <div className="w-[530px] h-[571px] bg-white rounded-[9px] pl-[36.89px] z-[22] pt-[48.17px] pb-[19px]">
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
              className="w-[425px] shadow-lg shadow-white ml-[15.61px] mt-[13.32px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Close{" "}
            </button>{" "}
          </div>
        </div>
      )}
      {contact && (
        <div className="absolute w-full h-[100vh] top-0 left-0 flex justify-center items-center">
          <div className="bg-black opacity-60 w-full h-[100vh] absolute top-0 left-0 z-[20]"></div>
          <div className="w-[530px] relative h-[571px] bg-white rounded-[9px] pl-[36.89px] pr-[50px] z-[22] pt-[44.45px] pb-[35px]">
            <strong className="text-[24.71px] leading-[29.65px]">
              Fill the form{" "}
            </strong>
            <Image
              src="/Vector (2).svg"
              className="absolute right-[50.33px] cursor-pointer top-[37.29px]"
              width={23.35}
              onClick={() => setContact(false)}
              height={23.35}
            />{" "}
            <p className="mt-[22.55px] text-[14px] leading-[16.8px] mb-[25.83px]">
              Our Associates will reach out to you shortly
            </p>
            <div
              className={
                emailchecker
                  ? "hidden text-[#D41717] bg-white left-[20px] px-[5px] text-[11.91px] leading-[14.29px] top-[50px]"
                  : "absolute text-[#D41717] bg-white left-[48.71px] px-[5px] text-[11.91px] leading-[14.29px] top-[133px]"
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
                  ? "pl-[25.71px] w-full h-[62px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                  : "pl-[25.71px] w-full h-[62px] border-[1px] border-[#D41717] rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              }
            />{" "}
            <Image
              src="/drop.svg"
              className={
                isOpen
                  ? "absolute rotate-180 h-[10.75px] w-[19.98px] right-[79px] cursor-pointer top-[248.08px]"
                  : "absolute h-[10.75px] w-[19.98px] right-[79px] cursor-pointer top-[248.08px]"
              }
              width={19.98}
              height={10.75}
              onClick={() => toggleMenu()}
            />
            <div
              placeholder="What do you need help with"
              onClick={() => toggleMenu()}
              className="pl-[25.71px] h-[62px] bg-white cursor-pointer w-full mt-[20px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
            >
              {" "}
              {help || "What do you need help with"}
            </div>{" "}
            {isOpen && (
              <div className="bg-white absolute border-[1px] border-black top-[280px] z-[22222] cursor-pointer">
                <ul>
                  <li
                    onClick={() => handleOptionSelect("Random")}
                    className="pl-[25.71px] w-[441.5px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Random
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Text")}
                    className="pl-[25.71px] w-[441.5px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Text
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Lorem")}
                    className="pl-[25.71px] w-[441.5px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
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
              className="px-[25.71px] w-full h-[132px] resize-none placeholder-black mt-[20px] border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
            ></textarea>
            <div className="text-black absolute leading-[16.8px] top-[400px] right-[67.4px] text-sm mt-2">
              {characterCount}/200
            </div>
            <button
              onClick={emailcheck}
              className="w-full shadow-lg shadow-white ml-[3px] mt-[38.17px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Submit{" "}
            </button>{" "}
          </div>
        </div>
      )}
    </main>
  );
}
