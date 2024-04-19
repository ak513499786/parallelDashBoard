import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Onboarding() {
  const [help, sethelp] = useState("");
  const [activeSection, setActiveSection] = useState("frame0");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (activeSection === "frame2") {
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
    sethelp(option);
    setIsOpen(false);
  };
  return (
    <main>
      {activeSection === "frame0" && (
        <div className="w-[598px] relative bg-[white] h-[100vh] flex flex-col justify-between pl-[60px] pb-[48.07px] pt-[98px] pr-[113px]">
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
              <label className="flex w-[216px] cursor-pointer items-center">
                <input type="radio" name="educationStatus" value="option1" />
                <p className="ml-[8px]"> Enrolled in college</p>
              </label>
              <label className="flex w-[216px] cursor-pointer items-center">
                <input type="radio" name="educationStatus" value="option2" />
                <p className="ml-[8px]">A passed out student</p>
              </label>
            </div>
            <button
              onClick={() => setActiveAndSection("frame1")}
              className="w-[425px] absolute bottom-[75px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
      {activeSection === "frame1" && (
        <div className="w-[598px] relative bg-[white] h-[100vh] flex flex-col pl-[60px] pb-[48.07px] pt-[98px] pr-[113px]">
          <div className="flex flex-col gap-[51px]">
            <strong className="text-[24.71px] h-[60px] leading-[29.65px]">
              Select The Course You Are Interested In{" "}
            </strong>
            <Image
              src="/drop.svg"
              className={
                isOpen
                  ? "absolute rotate-180 right-[138px] cursor-pointer top-[235.25px]"
                  : "absolute right-[138px] cursor-pointer top-[235.25px]"
              }
              width={19.98}
              height={10.75}
              onClick={() => toggleMenu()}
            />
            <div
              placeholder="What do you need help with"
              onClick={() => toggleMenu()}
              className="pl-[25.71px] h-[62px] bg-white cursor-pointer w-full border-[1px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
            >
              {" "}
              {help || "Select course"}
            </div>{" "}
            {isOpen && (
              <div className="bg-white absolute border-[1px] border-black top-[267px] z-[22222] cursor-pointer">
                <ul>
                  <li
                    onClick={() => handleOptionSelect("Random")}
                    className="pl-[25.71px] w-[423.2px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Random
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Text")}
                    className="pl-[25.71px] w-[423.2px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Text
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Lorem")}
                    className="pl-[25.71px] w-[423.2px] cursor-pointer mt-[8px] pt-[11px] pb-[11px] text-[17.95px] leading-[21.54px]"
                  >
                    Lorem
                  </li>
                </ul>
              </div>
            )}
            <button
              onClick={() => setActiveAndSection("frame2")}
              className="w-[425px] pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
      {activeSection === "frame2" && (
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
