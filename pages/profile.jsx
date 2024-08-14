import Navbar from "../components/navbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Profile() {
  const [allLocation, setAllLocation] = useState(false);
  const [remote, setRemote] = useState(false);
  const [bangalore, setBangalore] = useState(false);
  const [hyderabad, setHyderabad] = useState(false);
  const [chennai, setChennai] = useState(false);
  const [delhi, setDelhi] = useState(false);
  const [mumbai, setMumbai] = useState(false);
  const [gurgaon, setGurgaon] = useState(false);
  const [ahmedabad, setAhmedabad] = useState(false);
  const [noida, setNoida] = useState(false);
  const [pune, setPune] = useState(false);
  const [nashik, setNashik] = useState(false);
  const [chattisgarh, setChattisgarh] = useState(false);

  useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/platform/account/route");
  //       const data = response.data;
  //       if (data.length > 0) {
  //         const lastData = data[data.length - 1];
  //         setAllLocation(lastData.allLocation || false);
  //         setRemote(lastData.remote || false);
  //         setBangalore(lastData.bangalore || false);
  //         setHyderabad(lastData.hyderabad || false);
  //         setChennai(lastData.chennai || false);
  //         setDelhi(lastData.delhi || false);
  //         setMumbai(lastData.mumbai || false);
  //         setGurgaon(lastData.gurgaon || false);
  //         setAhmedabad(lastData.ahmedabad || false);
  //         setNoida(lastData.noida || false);
  //         setPune(lastData.pune || false);
  //         setNashik(lastData.nashik || false);
  //         setChattisgarh(lastData.chattisgarh || false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
   }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "all":
        setAllLocation(checked);
        break;
      case "Remote":
        setRemote(checked);
        break;
      case "Bangalore":
        setBangalore(checked);
        break;
      case "Hyderbad":
        setHyderabad(checked);
        break;
      case "Chennai":
        setChennai(checked);
        break;
      case "Delhi":
        setDelhi(checked);
        break;
      case "Mumbai":
        setMumbai(checked);
        break;
      case "Gurgaon":
        setGurgaon(checked);
        break;
      case "Ahmedabad":
        setAhmedabad(checked);
        break;
      case "Noida":
        setNoida(checked);
        break;
      case "Pune":
        setPune(checked);
        break;
      case "Nashik":
        setNashik(checked);
        break;
      case "Chhattisgarh":
        setChattisgarh(checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        allLocation,
        remote,
        bangalore,
        hyderabad,
        chennai,
        delhi,
        mumbai,
        gurgaon,
        ahmedabad,
        noida,
        pune,
        nashik,
        chattisgarh,
      };
      console.log("payload data", payload);
      const response = await axios.post("/api/platform/account/route", payload);
      console.log("Preferences updated:", response.data);
    } catch (error) {
      console.error("Error updating preferences:", error);
    }
  };
  return (
    <>
      <Navbar />
      <main className="pl-[60px] max-xl:px-[60px] max-md:px-[40px] max-sm:px-[20px] pt-[51.08px] pb-[67px]">
        <h1 className="capitalize text-[20px] leading-[26px] font-bold mb-[35.92px]">
          your account
        </h1>
        <div className="w-[1097px] max-sm:px-[20px] max-hamburger:pr-[60px] max-md:pr-[20px] pb-[39px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pt-[38.5px] pl-[28.5px] bg-white rounded-[5px]">
          <h1 className="text-[20px] leading-[26px] font-semibold">
            User Information
          </h1>
          <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[28.5px] mb-[23px]">
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Name</p>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setName(e.target.value)}
                disabled
                className="w-[309px] bg-[#EDEDED] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[1px] border-[#00000080]"
              />
            </div>
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">SID</p>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setUserName(e.target.value)}
                disabled
                className="w-[309px] bg-[#EDEDED] border-[#00000080] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Email</p>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setUserName(e.target.value)}
                disabled
                className="w-[309px] bg-[#EDEDED] border-[#00000080] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
          <div className="flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
            <div className="max-hamburger:w-full relative">
              <p className="text-[14px] leading-[15px] mb-[10px]">Password</p>
              <Image
                src="edit.svg"
                className="mt-[0.61px] absolute top-[35px] right-[14.67px] cursor-pointer"
                width={18.83}
                height={18.83}
              />{" "}
              <input
                type="password"
                name=""
                id=""
                onChange={(e) => setCollege(e.target.value)}
                className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
          <div className="border-[1px] w-[134px] mt-[24px] h-[41px] text-[14px] border-black py-[12px] px-[19px] rounded-[4px] cursor-pointer">
            Save Changes
          </div>
        </div>
        <section className="mt-[25px] max-sm:px-[20px] pr-[21px] max-hamburger:h-auto max-hamburger:pb-[40px] max-hamburger:pr-[40px] max-xl:w-full bg-white rounded-[5px] w-[1097px] h-[335px] pt-[38.5px] pl-[23.5px]">
          <div className="flex justify-between mb-[28.5px]">
            <h1 className="capitalize text-[20px] leading-[26px] font-semibold">
              Job preferences{" "}
            </h1>
            <button
              className="border-[1px] w-[206px] h-[41px] text-[14px] border-black py-[12px] px-[19px] rounded-[4px] cursor-pointer"
              onClick={handleSubmit}
            >
              Update Placement Profile
            </button>
          </div>
          <div className="w-[673px] max-md:w-full">
            <p className="text-[14px] leading-[15.4px] mb-[10px]">Resume </p>
            <div className="flex max-sm:flex-col max-sm:items-start gap-[12.5px] items-center">
              <input type="file" id="fileupload" className="hidden" />
              <label
                htmlFor="fileupload"
                className="cursor-pointer max-sm:text-[11px] max-sm:pr-[20px] max-sm:w-full italic text-[14px] leading-[16.8px] pr-[102.73px] py-[11.5px] pl-[16.27px] rounded-[4px] h-[40px] border-[0.5px] text-[#000000B3] border-[#00000080]"
              >
                Click to upload your resume
              </label>
              <p className="opacity-70 text-[14px] leading-[16.8px] capitalize">
                max file size: 2 MB
              </p>
            </div>
          </div>
          <div className="w-[673px] max-md:w-full mt-[28.5px]">
            <p className="text-[14px] leading-[15.4px] mb-[10px]">
              Location preference
            </p>
            <div className="flex flex-wrap gap-[11px]">
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  checked={allLocation}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="all"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  All Locations
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Remote"
                  id="Remote"
                  checked={remote}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Remote"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Remote
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Bangalore"
                  id="Bangalore"
                  checked={bangalore}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Bangalore"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Bangalore
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Hyderbad"
                  id="Hyderbad"
                  checked={hyderabad}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Hyderbad"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Hyderbad
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Chennai"
                  id="Chennai"
                  checked={chennai}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Chennai"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Chennai
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Delhi"
                  id="Delhi"
                  checked={delhi}
                  onChange={handleCheckboxChange}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                />
                <label
                  htmlFor="Gurgaon"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Gurgaon
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Ahmedabad"
                  id="Ahmedabad"
                  checked={ahmedabad}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Ahmedabad"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Ahmedabad
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Noida"
                  id="Noida"
                  checked={noida}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Noida"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Noida
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Pune"
                  id="Pune"
                  checked={pune}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Pune"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Pune
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Nashik"
                  id="Nashik"
                  checked={nashik}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Nashik"
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Nashik
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input
                  type="checkbox"
                  name="Chhattisgarh"
                  id="Chhattisgarh"
                  checked={chattisgarh}
                  onChange={handleCheckboxChange}
                />
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
        <h1 className="capitalize text-[20px] leading-[26px] font-bold mt-[54px] mb-[25.92px]">
          Billing information
        </h1>
        <div className="w-[1097px] max-sm:px-[20px] max-hamburger:pr-[60px] max-md:pr-[20px] pb-[67.8px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pt-[33.71px] pl-[23.5px] bg-white rounded-[5px]">
          <p className="text-base mb-[6px]">Course Opted</p>
          <h1 className="text-[39px] leading-[46.8px] mb-[11.86px]">
            Frontend Mastery
          </h1>
          <p className="text-base mb-[43.96px]">Total Fee: INR 9,999</p>

          <p className="text-base mb-[6px]">Pending Fees</p>
          <div className="flex gap-[31.5px] mb-[24px]">
            <h1 className="text-[39px] leading-[46.8px]">INR 5,000 </h1>
            <button className="w-[99px] font-semibold h-[43px] max-sm:w-full bg-[#30E29D] rounded-[6px] text-[16px] leading-[19.2px]">
              Pay now{" "}
            </button>
          </div>
          <table>
            <tr className="bg-[#D3D3D3]">
              <td className="text-base w-[142px] pl-[25px] py-[16px]">Date</td>
              <td className="text-base w-[218px] pl-[25px] py-[16px]">Payment number</td>
              <td className="text-base w-[184px] pl-[25px] py-[16px]">Payment method</td>
              <td className="text-base w-[196px] pl-[25px] py-[16px]">Amount</td>
            </tr>
            <tbody className="border-b-[0.2px] border-[#00000080]">
              <td className="text-base text-[#1D1D1D] w-[142px] pl-[25px] py-[16px]">28/08/23</td>
              <td className="text-base text-[#1D1D1D] w-[218px] pl-[25px] py-[16px]">947u60749862766</td>
              <td className="text-base text-[#1D1D1D] w-[184px] pl-[25px] py-[16px]">Credit Card</td>
              <td className="text-base text-[#1D1D1D] w-[196px] pl-[25px] py-[16px]">INR 5,000</td>
            </tbody>
          </table>
        </div>
        <button className="w-[96px] font-semibold h-[43px] max-sm:w-full mt-[41px] bg-[#30E29D] rounded-[6px] text-[16px] leading-[19.2px]">
          Log out{" "}
        </button>
        <section className="w-[1097px] mt-[54px] max-sm:px-[20px] max-xl:w-full mt-[25px] pt-[25.4px] border-[2px] border-[#672B094D] rounded-[6px] pb-[36px] pl-[22.32px] h-[131px] bg-[#FFEAC9]">
          <p className="text-[20px] leading-[26px] pl-[2.78px] mb-[27px] max-smallerphone:mb-[7px] font-bold capitalize text-[#672B09]">
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
