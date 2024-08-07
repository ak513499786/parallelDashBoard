import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import style from "../styles/style.module.css";
import axios from "axios"
//import { fetchAssignments, fetchGuestSession, fetchModules, fetchSchedules, fetchSupportSection, fetchVideos } from '../pages/utils/platformApi';



export default function Dashboard() {

  const [fold, setFold] = useState("");

  const [assignments, setAssignments] = useState([]);
  const [guestSession, setGuestSession] = useState([]);
  const [modules, setModules] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [supportSection, setSupportSection] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('/api/platform/assignments/route');
        setAssignments(response.data.data);
        console.log(assignments);
        console.log("response assignment", response.data.data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };


    

    const fetchGuestSession = async () => {
      try {
        const response = await axios.get('/api/platform/guestSession/route');
        setGuestSession(response.data.data);
        console.log(guestSession);
        console.log("response guestSession", response.data.data);
      } catch (error) {
        console.error('Error fetching guestSession:', error);
      }
    };

    const fetchModules = async () => {
      try {
        const response = await axios.get('/api/platform/modules/route');
        setModules(response.data.data);
        console.log(modules);
        console.log("response modules", response.data.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    const fetchSchedules = async () => {
      try {
        const response = await axios.get('/api/platform/schedules/route');
        setSchedules(response.data.data);
        console.log(schedules);
        console.log("response schedules", response.data.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    const fetchSupportSection = async () => {
      try {
        const response = await axios.get('/api/platform/supportSection/route');
        setSupportSection(response.data.data);
        console.log(supportSection);
        console.log("response supportSection", response.data.data);
      } catch (error) {
        console.error('Error fetching supportSection:', error);
      }
    };

    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/platform/videos/route');
        setVideos(response.data.data);
        console.log(videos);
        console.log("response videos", response.data.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchAssignments();
    fetchGuestSession();
    fetchModules();
    fetchSchedules();
    fetchSupportSection();
    fetchVideos();
  }, []);






  return (
    <>
      <Navbar />
      {fold === "" && (
        <main className="px-[60px] max-md:px-[40px] max-sm:px-[20px] max-hamburger:flex-col pb-[31px] pt-[42px] flex gap-[20px]">
          <div className="w-[58.61%] max-hamburger:w-full">
            <section className="pl-[25px] bg-white rounded-[6px] pr-[40px] pb-[28px] pt-[27.96px]">
              <h1 className="pb-[24.04px] text-[20px] border-[#C4C4C4] border-b-[1px] leading-[24px] font-bold">
                Schedule
              </h1>
              {schedules.map((schedule) => (
                <div key={schedule._id} className="py-[18.5px] border-b-[1px] border-[#C4C4C4] pl-[18.3px] pr-[15.6px] flex justify-between">
                  <h1 className="text-base opacity-70">{new Date(schedule.date).toLocaleDateString()}</h1>
                  <div className="w-[478.35px]">

                    <p className="text-[20px]">{schedule.description}</p>
                  </div>
                </div>
              ))}
            </section>
            <section className="mt-[24.62px] h-[659px] rounded-[6px] bg-white">
              <div className="pt-[30px] max-sm:p-[15px] max-sm:items-center pb-[23px] pl-[25.1px] pr-[43px] border-b-[1px] flex justify-between">
                <h1 className="py-[1.5px] text-[20px] leading-[24px] font-bold">Modules</h1>
                <div onClick={() => setFold('curriculum')} className="border-[1px] cursor-pointer border-black py-[5px] px-[10px] rounded-[4px]">
                  View curriculum
                </div>
              </div>
              <div className="pt-[33px] max-md:px-[20px] max-sm:px-[15px] pl-[25px] pr-[41.64px]">
                {modules.map((module, index) => (
                  <div key={index} className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                    <Image src="/Frame 18.svg" className="w-[28.64px] h-[28.64px]" width={28.6} height={28.64} />
                    <div className="flex justify-between gap-[12px] max-sm:w-full">
                      <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                        <p className="py-[4px] text-[14px] leading-[18.2px]">{module.id}</p>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">{module.title}</h1>
                      </div>
                      <div onClick={() => setFold('video')} className="cursor-pointer border-[1px] border-black py-[px] px-[15px] rounded-[4px]">
                        Watch Video
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="w-[41.4%] max-hamburger:w-full">
            <section className="w-[100%] rounded-[6px] max-xl:h-auto max-sm:px-[16px] py-[22.5px] flex justify-between pl-[24px] pr-[26px] h-[77px] bg-white">
              <div className="flex gap-[9px]">
                <Image src="/whatsapp.svg" width={26.53} height={26.67} />
                <p className="text-[16px] max-sm:text-sm leading-[20.8px] py-[5.5px] font-bold capitalize">
                  Clear doubts, connect with your peers and more
                </p>
              </div>
              <Image src="/open.svg" width={16.53} height={16.67} />
            </section>
            <section className="w-[100%] rounded-[6px] mt-[22px] h-[339px] bg-white overflow-y-auto">
              <div className=" pl-[23.5px] pt-[27.36px] pb-[29.64px] flex justify-between pr-[38px]">
                <h1 className="text-[20px] font-bold leadng-[26px] block w-full">
                  Assignments
                </h1>


                <p className="text-[14px] text-white p-[8px] bg-[#0C6926] rounded-[24px] w-[46px] ">
                  New
                </p>
              </div>

              <div className="pl-[23px] pr-[38px]">
                {assignments.length > 0 ? (
                  assignments.map((assignment) => (
                    <div key={assignment.id} className="border-b-[1px] h-[188px] max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                      <div className="w-[268px]">
                        <p className="text-[16px] leading-[20.8px] opacity-70 max-smallerphone:text-sm">{assignment.dueDate}</p>
                        <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">{assignment.title}</h1>
                        {/* <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">{assignment.description}</h1> */}

                      </div>
                      <button className="h-[43px] mt-[14px] w-[168px] max-sm:w-full border-[1px] border-black rounded-[4px] text-base">
                        View Assignment
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No assignments available</p>
                )}
              </div>
            </section>
            <section className="w-[100%] mt-[22px] rounded-[6px] h-[404px] bg-white overflow-y-auto">
              <div className="">
                <h1 className="text-[20px] font-bold leadng-[26px] pl-[23.5px] pt-[27.36px] pb-[17.64px] block w-full">
                  Guest sessions
                </h1>
              </div>
              <div className="zoom">
                {guestSession.length > 0 ? (
                  guestSession.map((session) => (
                    <div key={session._id} className="border-b-[1px] h-[108px] flex justify-between items-center max-xl:h-[150px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col">
                      <div className="w-[268px]">
                        <p className="text-[16px] leading-[20.8px] opacity-70 max-smallerphone:text-sm">
                          {session.date}{" "}
                          {/* <span className="ml-[17px]">{session.time}</span> */}
                        </p>
                        <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                          {session.topic}
                        </h1>
                      </div>
                      <button className="h-[43px] w-[134px] max-sm:w-full border-[1px] border-black rounded-[6px] text-base" onClick={() => window.open("https://meet.google.com/landing", "_blank")}>
                        Join in Meet
                      </button>{" "}
                    </div>
                  ))
                ) : (
                  <p className="text-center">No guest sessions available</p>
                )}
              </div>
            </section>
            <section className="w-[100%] rounded-[6px] mt-[22px] pt-[25.4px] pb-[36px] pl-[22.32px] h-[189px] bg-white">
              <p className="text-[20px] leading-[26px] pl-[2.78px] mb-[27px] max-sm:mb-[7px] font-bold capitalize">
                Support{" "}
              </p>
              <p className="text-[16px] leading-[20.8px]">
                Facing Issues? Get Help At{" "}
              </p>
              <button className="font-bold mt-[16px] w-[111px] h-[43.07px] rounded-[6px] bg-[#30E29D]">
                Support
              </button>
            </section>
          </div>
        </main>
      )}
      {fold === "curriculum" && (
        <main className="px-[60px] pb-[30px] pt-[56.02px]">
          <div className="flex items-center">
            <Image
              src="back.svg"
              className="mt-[0.61px] cursor-pointer"
              onClick={() => setFold("")}
              width={44.97}
              height={44.97}
            />
            <p
              className="ml-[30px] text-base opacity-60 cursor-pointer"
              onClick={() => setFold("")}
            >
              Class
            </p>
            <p className="ml-[5px]">&gt;</p>
            <p className="ml-[5px] text-base underline font-semibold">
              Curriculum
            </p>
          </div>

          <section className="mt-[24.62px] h-[659px] rounded-[6px] bg-white">
            <div className="pt-[30px] max-sm:p-[15px] max-sm:items-center pb-[23px] pl-[25.1px] pr-[43px] border-b-[1px] flex justify-between">
              <h1 className="py-[1.5px] text-[20px] leading-[24px] font-bold">
                Modules
              </h1>
              <div className="border-[1px] border-black py-[5px] px-[10px] rounded-[4px]">
                View curriculum
              </div>
            </div>
            <div className={style.module}>
              <div className="pt-[33px] max-md:px-[20px] max-sm:px-[15px] pl-[25px] pr-[73px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 01
                </p>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 02
                </p>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 03
                </p>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                  Module 04
                </p>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
                <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                  <Image
                    src="/Frame 18.svg"
                    className="w-[28.64px] h-[28.64px]"
                    width={28.6}
                    height={28.64}
                  />
                  <div className="flex justify-between w-full gap-[12px] max-sm:w-full">
                    <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                      <p className="py-[4px] text-[14px] leading-[18.2px]">
                        01
                      </p>
                      <div>
                        <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                          Justo est urna pellentesque c...
                        </h1>
                        <p className="w-[840px] mt-[6.8px]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setFold("video")}
                      className="border-[1px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                    >
                      Watch Video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
      {fold === "video" && (
        <main className="px-[60px] pb-[30px] pt-[56.02px]">
          <div className="flex items-center">
            <Image
              src="back.svg"
              className="mt-[0.61px] cursor-pointer"
              onClick={() => setFold("curriculum")}
              width={44.97}
              height={44.97}
            />
            <p
              className="ml-[30px] text-base opacity-60 cursor-pointer"
              onClick={() => setFold("")}
            >
              Class
            </p>
            <p className="ml-[5px]">&gt;</p>
            <p
              className="ml-[5px] text-base opacity-60 cursor-pointer"
              onClick={() => setFold("curriculum")}
            >
              Curriculum
            </p>
            <p className="ml-[5px]">&gt;</p>
            <p className="ml-[5px] text-base underline font-bold">
              Class Title
            </p>
          </div>

          <div className="mt-[24.62px] h-[543px] rounded-[6px] bg-black rounded-[6.27px]"></div>
          <div className="mt-[29px] bg-white rounded-[6px] px-[30.14px] pt-[32px] pb-[29px]">
            <div className="flex justify-between pb-[25px] border-b-[1px] border-[#00000033]">
              <div>
                <h1 className="text-base mb-[9px]">Module { }</h1>
                <p className="text-[24px] leading-[31.2px]">
                  Bit manipulation and complexity
                </p>
              </div>
              <div className="flex gap-[8px] items-center border-[1px] h-[48px] border-black py-[14.5px] px-[32px] rounded-[4px]">
                <div>I Have A Doubt</div>
                <Image src="/open.svg" width={16.53} height={16.67} />
              </div>
            </div>
            <div className="pt-[25px]">
              <p className="text-base mb-[9px]">Assignments given</p>
              <div className="flex gap-[9px] mb-[9px]">
                <p className="text-[20px] underline leading-[26px]">
                  Bit manipulation and complexity
                </p>
                <Image src="/open.svg" width={16.53} height={16.67} />
              </div>
              <div className="flex gap-[9px] mb-[64.54px]">
                <p className="text-[20px] underline leading-[26px]">
                  Bit manipulation and complexity
                </p>
                <Image src="/open.svg" width={16.53} height={16.67} />
              </div>
              <p className="text-black opacity-60">
                Class taken on : Tuesday 18 June, 11:30AM to 1:00PM{" "}
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
