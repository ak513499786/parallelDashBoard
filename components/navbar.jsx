import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="px-[60px] flex justify-between pt-[40px] pb-[20px] bg-white shadow-nav">
        <Image src="/Frame 96.svg" width={120.92} height={22} />
        <div className="flex gap-[64px]">
          <ul className="list-none flex gap-[32px]">
            <Link
              href={"/dashboard"}
              className="text-[16px] leading-[19.2px] py-[2.5px]"
            >
              Dashboard
            </Link>
            <Link
              href={"/learn"}
              className="text-[16px] leading-[19.2px] py-[2.5px]"
            >
              Learn
            </Link>
            <Link
              href={"/ranking"}
              className="text-[16px] leading-[19.2px] py-[2.5px]"
            >
              Ranking
            </Link>
            <Link
              href={"/jobs"}
              className="text-[16px] leading-[19.2px] py-[2.5px]"
            >
              Jobs
            </Link>
          </ul>
          <div className="flex gap-[32px]">
            <Link href={"/notifications"}>
              <Image src="/c.svg" width={24} height={24} />
            </Link>
            <div className="flex gap-[8px]">
              <Image src="/codicon_account.svg" width={24} height={24} />
              <Link
                href={"/profile"}
                className="text-[16px] leading-[19.2px] py-[2.5px]"
              >
                My Account
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
