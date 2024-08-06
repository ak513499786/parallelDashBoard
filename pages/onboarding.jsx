import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const [state, setState] = useState("3/4");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    currentOccupation: "",
    highestQualification: "",
    branchOfDegree: "",
    collegeName: "",
    panNumber: "",
    panPhoto: "",
    passportPhoto: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleNext = async (nextState) => {
    try {
      if (state === "1/4") {
        await axios.post("/api/onboarding/personalInfo/route", {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          dateOfBirth: formData.dateOfBirth,
          //userId : '669524190fd311fd0e562816',
        });
      } else if (state === "2/4") {
        await axios.post("/api/onboarding/academics/route", {
          currentOccupation: formData.currentOccupation,
          highestQualification: formData.highestQualification,
          branchOfDegree: formData.branchOfDegree,
          collegeName: formData.collegeName,
          //userId : '669524190fd311fd0e562816',

        });
      } else if (state === "3/4") {
        const formDataKyc = new FormData();
        formDataKyc.append("panNumber", formData.panNumber);
        formDataKyc.append("panPhoto", formData.panPhoto);
        formDataKyc.append("passportPhoto", formData.passportPhoto);
        formDataKyc.append('userId', formData.userId);
        



        await axios.post("/api/onboarding/kyc/route", formDataKyc, {

          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else if (state === "4/4") {
        await axios.post("/api/onboarding/course/route", {
          currentOccupation: formData.currentOccupation,
          //userId : '669524190fd311fd0e562816',

        });
      }

      setState(nextState);
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  return (
    <main className="flex">
      {state === "1/4" && (
        <div className="w-[710px] max-md:w-full max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] max-md:w-full flex-col gap-[32px]">
            <div className="flex items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                className="mt-[0.61px]"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">1/4</p>
            </div>
            <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
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
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="pl-[25.71px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[81px] p-[8px] absolute leading-[15.6px]">
                Enter your phone number
              </p>
              <div className="pl-[25.71px] max-md:w-full flex w-[421px] border-[1px] border-black rounded-[6px]">
                <p className="text-base pt-[21px]">+ 91 |</p>
                <input
                  id="phoneNumber"
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="pt-[21.5px] max-md:w-full pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[177px] p-[8px] absolute leading-[15.6px]">
                Enter your email
              </p>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="pl-[25.71px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[273px] p-[8px] absolute leading-[15.6px]">
                Enter your DOB(DD/MM/YY)
              </p>
              <input
                id="dateOfBirth"
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                placeholder="DD/MM/YY"
                className="pl-[25.71px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />

              <button
                onClick={() => handleNext("2/4")}
                className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "2/4" && (
        <div className="w-[710px] max-md:w-full max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] max-md:w-full flex-col gap-[32px]">
            <div className="flex items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                onClick={() => setState("1/4")}
                className="mb-[0.61px]"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">2/4</p>
            </div>
            <div className="absolute max-md:hidden w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
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
              <div className="flex gap-[20px] max-md:w-full w-[434px]">
                <div className="flex items-center gap-[4px]">
                  <input
                    type="radio"
                    name="currentOccupation"
                    value="Employed"
                    onChange={handleChange}
                    id="occupation-employed"
                  />
                  <label
                    htmlFor="occupation-employed"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Employed
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input
                    type="radio"
                    name="currentOccupation"
                    value="Unemployed"
                    onChange={handleChange}
                    id="occupation-unemployed"
                  />
                  <label
                    htmlFor="occupation-unemployed"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Unemployed
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input
                    type="radio"
                    name="currentOccupation"
                    value="Student"
                    onChange={handleChange}
                    id="occupation-student"
                  />
                  <label
                    htmlFor="occupation-student"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Student
                  </label>
                </div>
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[90px] p-[8px] absolute leading-[15.6px]">
                Highest qualification
              </p>
              <input
                id="highestQualification"
                type="text"
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
                placeholder="Enter your highest qualification"
                className="pl-[25.71px] mt-[40px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[193px] p-[8px] absolute leading-[15.6px]">
                Branch of degree
              </p>
              <input
                id="branchOfDegree"
                type="text"
                name="branchOfDegree"
                value={formData.branchOfDegree}
                onChange={handleChange}
                placeholder="Enter your branch of degree"
                className="pl-[25.71px] mt-[40px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[295px] p-[8px] absolute leading-[15.6px]">
                College name
              </p>
              <input
                id="collegeName"
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                placeholder="Enter your college name"
                className="pl-[25.71px] mt-[40px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />

              <button
                onClick={() => handleNext("3/4")}
                className="w-[421px] mt-[40px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "3/4" && (
        <div className="w-[710px] max-md:w-full max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] max-md:w-full flex-col gap-[32px]">
            <div className="flex items-center max-md:w-full mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                onClick={() => setState("2/4")}
                className="mb-[0.61px]"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">3/4</p>
            </div>
            <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
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
              <p className="text-black text-[13px] bg-white absolute top-[-12px] left-[18px] p-[8px] leading-[15.6px]">
              Enter your PAN number
              </p>
              <input
                id="panNumber"
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="Enter your PAN number"
                className="pl-[25.71px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] bg-white absolute top-[82px] left-[18px] p-[8px] leading-[15.6px]">
                Upload PAN Photo
              </p>
              
              <label htmlFor="panPhoto" className="pl-[25.71px] h-[62px] w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base">
                
              </label>
              <input
                id="panPhoto"
                type="file"
                name="panPhoto"
                onChange={handleFileChange}
                className="pl-[25.71px] w-[421px] hidden border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] bg-white mb-[13px] p-[8px] leading-[15.6px]">
                Upload Passport Photo
              </p>
              <input
                id="passportPhoto"
                type="file"
                name="passportPhoto"
                onChange={handleFileChange}
                className="pl-[25.71px] w-[421px] hidden border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />

              <button
                onClick={() => handleNext("4/4")}
                className="w-[421px] mt-[40px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "4/4" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] flex-col gap-[32px]">
            <div className="flex items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="back.svg"
                onClick={() => setState("3/4")}
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
              We’d like to know more about you
            </strong>
            <div className="flex flex-col relative">
              <p className="text-black text-[13px] bg-white mb-[13px] p-[8px] leading-[15.6px]">
                Current occupation
              </p>
              <div className="flex gap-[20px] w-[434px]">
                <div className="flex items-center gap-[4px]">
                  <input
                    type="radio"
                    name="currentOccupation"
                    value="Employed"
                    onChange={handleChange}
                    id="occupation-employed"
                  />
                  <label
                    htmlFor="occupation-employed"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Employed
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input
                    type="radio"
                    name="currentOccupation"
                    value="Unemployed"
                    onChange={handleChange}
                    id="occupation-unemployed"
                  />
                  <label
                    htmlFor="occupation-unemployed"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Unemployed
                  </label>
                </div>
                <div className="flex items-center gap-[4px]">
                  <input
                    type="radio"
                    name="currentOccupation"
                    value="Student"
                    onChange={handleChange}
                    id="occupation-student"
                  />
                  <label
                    htmlFor="occupation-student"
                    className="text-[14px] leading-[16.8px]"
                  >
                    Student
                  </label>
                </div>
              </div>

              <button
                onClick={() => handleNext("complete")}
                className="w-[421px] mt-[40px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "complete" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-center items-center pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <Image src="/success.svg" width={100} height={100} />
          <h1 className="text-[25px] mt-[20px] leading-[30px]">
            Thank you for submitting your information!
          </h1>
          <Link href="/class">
            <p className="w-[200px] mt-[40px] py-[10px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base text-center">
              Go to Home
            </p>
          </Link>
        </div>
      )}
    </main>
  );
}
