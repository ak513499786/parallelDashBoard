import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";

export default function Jobs() {
  const [active, setactive] = useState("assignments");
  const [addmodule, setaddmodule] = useState(false);
  const [addassessment, setaddassessment] = useState(false);
  const [viewprofile, setviewprofile] = useState(false);
  const [count, setcount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sessionTime, setsessionTime] = useState(false);
  const [item, setItem] = useState("Select session type");
  const [inputValue, setInputValue] = useState("");
  const [SessionTimeValue, setSessionTimeValue] = useState("PM");
  const characterCount = inputValue.length;

  const handleSelect = (value) => {
    setItem(value);
    setIsOpen(false);
  };
  const handleTimeSelect = (value) => {
    setSessionTimeValue(value);
    setsessionTime(false);
  };
  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };
  const handleChangeTextArea = (e) => {
    setcount(e.target.value.length);
  };
  return (
    <>
      <TrainerNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        
      </main>
    </>
  );
}
