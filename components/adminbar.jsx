import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function AdminNavbar() {
  return (
    <>
      <nav className="px-[60px] sticky top-0 z-[99999] relative max-md:px-[40px] max-sm:px-[20px] flex justify-between pt-[40px] pb-[20px] bg-white border-b-[0.5px] border-[#00000033]">
        <Image src="/Frame 96.svg" width={120.92} height={22} />
        <p className="text-[16px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]">
          Log out
        </p>
      </nav>
    </>
  );
}
