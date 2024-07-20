import Image from "next/image";
import logo from "../../public/Toss_Logo_Primary.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

export default function TopBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <nav
      className={`w-full h-[60px] fixed left-0 top-0 z-50 flex justify-center bg-white ${
        isScrolled && "border-b border-[#E6E8EA]"
      }`}
    >
      <div className="w-full h-[59px] max-w-[1140px] flex justify-center relative">
        <div className="sm:w-[92%] flex justify-between items-center max-sm:w-full max-sm:px-6">
          <a
            href="/"
            className="flex shrink-0 items-center h-fit relative w-[68px] mr-8 overflow-hidden"
          >
            <Image src={logo} alt="로고" className="w-fit h-14 object-cover" />
          </a>
          <div className="sm:hidden flex gap-3 items-center mt-[1px] -mr-[14px]">
            <button className="w-[76px] h-[30px] mt-[2px] opacity-80 hover:opacity-100 rounded-[15px] flex justify-center items-center text-[11.5px] text-white bg-toss-blue">
              앱 다운로드
            </button>
            <button
              onClick={() => setIsMenuOpened((prev) => !prev)}
              className="w-10 h-[26px] flex justify-center items-center focus:bg-gray-100"
            >
              {!isMenuOpened ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>
          <ul
            className={`${
              isMenuOpened ? "max-sm:flex" : "max-sm:hidden"
            } max-sm:absolute max-sm:w-full max-sm:top-full max-sm:left-0 max-sm:flex-col flex items-center h-full`}
          >
            <li className="navbar-button-container">
              <a href="/" className="navbar-button">
                회사 소개
              </a>
            </li>
            <li className="navbar-button-container">
              <a href="/" className="navbar-button">
                고객센터
              </a>
            </li>
            <li className="navbar-button-container">
              <a href="/" className="navbar-button">
                자주 묻는 질문
              </a>
            </li>
            <li className="navbar-button-container">
              <a href="/" className="navbar-button">
                토스인증서
              </a>
            </li>
            <li className="navbar-button-container">
              <a href="/" className="navbar-button">
                채용
              </a>
            </li>
            <ul className="flex max-sm:gap-0 items-center font-light max-sm:w-full bg-white">
              <li className="sm:px-2 h-full flex items-center sm:pl-[52px] max-sm:hover:bg-gray-100">
                <a href="/" className="navbar-language-button">
                  KOR
                </a>
              </li>
              <li className="mt-[1px] w-1 h-4 text-gray-300 text-[11px] font-medium">
                |
              </li>
              <li className="sm:px-2 h-full flex items-center max-sm:hover:bg-gray-100">
                <a href="/" className="navbar-language-button text-gray-300">
                  ENG
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}
