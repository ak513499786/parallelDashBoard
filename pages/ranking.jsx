import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Ranking() {
  return (
    <>
      <Navbar />
      <div className="flex gap-[20px] px-[60px] pb-[96px] pt-[51.08px]">
        <div className="w-[calc(100%-558px)]">
          <h1 className="text-black text-[20px] leading-[26px] font-semibold">
            Ranking
          </h1>
          <div className="bg-white mt-[35.92px] relative pb-[21px] rounded-[5px]">
            <div className="flex">
              <h1 className="w-[33%] h-[53px] flex justify-center items-center text-[16px] leading-[19.2px] cursor-pointer font-semibold border-b-[1px] border-[#211EA8]">
                Daily
              </h1>
              <h1 className="w-[33%] h-[53px] flex justify-center items-center text-[16px] leading-[19.2px] cursor-pointer">
                Weekly
              </h1>
              <h1 className="w-[33%] h-[53px] flex justify-center items-center text-[16px] leading-[19.2px] cursor-pointer">
                Lifetimes
              </h1>
            </div>
            <div className="pl-[23px] pr-[30px] pt-[16px]">
              <div className="border-b-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center">
                <div className="flex items-center gap-[18px]">
                  <p className="text-[14px] leading-[18.2px]">1.</p>
                  <h1 className="text-[20px] leading-[26px]">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px]">15,000 pts</p>
                </div>{" "}
              </div>
              <div className="border-b-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center">
                <div className="flex items-center gap-[18px]">
                  <p className="text-[14px] leading-[18.2px]">2.</p>
                  <h1 className="text-[20px] leading-[26px]">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px]">14,800 pts</p>
                </div>{" "}
              </div>
              <div className="border-b-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center">
                <div className="flex items-center gap-[18px]">
                  <p className="text-[14px] leading-[18.2px]">3.</p>
                  <h1 className="text-[20px] leading-[26px]">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px]">14,653 pts</p>
                </div>{" "}
              </div>
              <div className="border-b-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center">
                <div className="flex items-center gap-[18px]">
                  <p className="text-[14px] leading-[18.2px]">4.</p>
                  <h1 className="text-[20px] leading-[26px]">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px]">14,556 pts</p>
                </div>{" "}
              </div>
              <div className="border-b-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center">
                <div className="flex items-center gap-[18px]">
                  <p className="text-[14px] leading-[18.2px]">5.</p>
                  <h1 className="text-[20px] leading-[26px]">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px]">13,200 pts</p>
                </div>{" "}
              </div>
              <div className="border-b-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center">
                <div className="flex items-center gap-[18px]">
                  <p className="text-[14px] leading-[18.2px]">6.</p>
                  <h1 className="text-[20px] leading-[26px]">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px]">13,000 pts</p>
                </div>{" "}
              </div>
              <div className="border-b-[1px] h-[44px] pr-[30px] pl-[27px] flex justify-between items-center">
                <div className="flex items-center gap-[18px]">
                  <p className="text-[14px] leading-[18.2px]">7.</p>
                  <h1 className="text-[20px] leading-[26px]">
                    Sit tellus ultrices
                  </h1>
                </div>
                <div className="flex gap-[5px] h-[26px]">
                  <Image
                    src="/Subtract.svg"
                    className="py-[0.82px]"
                    width={24.37}
                    height={24.37}
                  />
                  <p className="text-[20px] leading-[26px]">12,800 pts</p>
                </div>{" "}
              </div>
            </div>
            <div className="w-[177px] border-[1px] border-black rounded-[4px] h-[38px] ml-[23px] mt-[43px] cursor-pointer flex gap-[12px] justify-center items-center">
              <p className="text-[16px] capitalize">Go to your position</p>
            </div>
            <div className="flex gap-[16px] absolute right-[30px] bottom-[24px]">
              <div className="w-[32px] h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image
                  src="/Group 4.svg"
                  width={14.13}
                  height={14.13}
                />
              </div>
              <div className="flex gap-[8px]">
                <p className="w-[32px] text-[17.23px] cursor-pointer bg-[#31E39E] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#31E39E]">
                  1
                </p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  2
                </p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  3
                </p>
                <p className="w-[25px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                .....
                </p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  42
                </p>
              </div>
              <div className="w-[32px] rotate-180 h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image
                  src="/Group 4.svg"
                  width={14.13}
                  height={14.13}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[588px] bg-white w-[538px] mt-[64.92px] pt-[38.5px] pl-[28.5px] pr-[18px]">
          <h1 className="text-[20px] leading-[26px] font-semibold">
            Your Stats
          </h1>
          <section className="pl-[0.5px] mt-[14.5px]">
            <div className="w-[100%] mt-[17px] pt-[19.29px] pb-[32px] border-[1px] border-[#898989] rounded-[4px] pl-[18.16px] h-[145px]">
              <p className="text-[14px] leading-[16.94px] mb-[11.71px] capitalize">
                Total Questions Solved{" "}
              </p>
              <div className="flex gap-[11px] h-[65px]">
                <p className="text-[54px] leading-[65.34px]">3,560</p>
              </div>
            </div>
            <div className="w-[100%] mt-[17px] pt-[19.29px] pb-[32px] border-[1px] border-[#898989] rounded-[4px] pl-[18.16px] h-[145px]">
              <p className="text-[14px] leading-[16.94px] mb-[11.71px] capitalize">
                Total points{" "}
              </p>
              <div className="flex gap-[11px] h-[65px]">
                <Image
                  src="/Subtract.svg"
                  className="py-[6px]"
                  width={53}
                  height={53}
                />
                <p className="text-[54px] leading-[65.34px]">10,560</p>
              </div>
            </div>
            <div className="w-[100%] mt-[17px] pt-[19.29px] pb-[32px] border-[1px] border-[#898989] rounded-[4px] pl-[18.16px] h-[145px]">
              <p className="text-[14px] leading-[16.94px] mb-[11.71px] capitalize">
                Best all time rank{" "}
              </p>
              <div className="flex items-end h-[50px]">
                <p className="text-[54px] leading-[39px] mr-[14px]">#15</p>
                <Image src="/Subtract.svg" width={24.37} height={24.37} />
                <p className="text-[24.83px] leading-[30.04px] ml-[5.06px]">
                  12,240
                </p>
              </div>
              <div className="flex gap-[4px] mt-[18px]">
                <p className="opacity-70 text-[14px] leading-[16.94px]">
                  Date:{" "}
                </p>
                <p className="opacity-70 text-[14px] leading-[16.94px]">
                  12/08/24
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
