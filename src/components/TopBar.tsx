import Image from "next/image";
import logo from "../../public/Toss_Logo_Primary.png";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
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

  const menuList = [
    { text: "회사 소개", url: "/" },
    { text: "공지사항", url: "/" },
    { text: "고객센터", url: "/" },
    { text: "자주 묻는 질문", url: "/" },
    { text: "토스인증서", url: "/" },
    { text: "채용", url: "/" },
  ];

  return (
    <AnimatePresence initial={false}>
      <motion.nav
        animate={{ height: isMenuOpened ? "auto" : "60px" }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
        className={`w-full fixed left-0 top-0 z-50 flex justify-center bg-white overflow-hidden ${
          isScrolled && !isMenuOpened && "border-b border-[#E6E8EA]"
        }`}
      >
        <div className="w-full max-w-[1140px] flex justify-center">
          <div className="sm:w-[92%] flex items-center max-sm:w-full max-sm:px-6 max-sm:flex-col">
            <div className="flex w-full min-h-[60px] justify-between items-center z-10">
              <a
                href="/"
                className="flex shrink-0 items-center h-fit relative w-[68px] mr-8 overflow-hidden"
              >
                <Image
                  src={logo}
                  alt="로고"
                  className="w-fit h-14 object-cover"
                />
              </a>
              <div className="sm:hidden flex gap-3 items-center mt-[1px] -mr-[14px]">
                <button className="w-[76px] h-[30px] mt-[2px] hover:bg-primary-blue-2 rounded-[15px] flex justify-center items-center text-[11.5px] text-white bg-primary-blue-1">
                  앱 다운로드
                </button>
                <button
                  onClick={() => setIsMenuOpened((prev) => !prev)}
                  className="w-10 h-[26px] flex justify-center items-center focus:bg-gray-100"
                >
                  {!isMenuOpened ? <MenuIcon /> : <CloseIcon />}
                </button>
              </div>
            </div>
            <ul className="max-sm:w-[calc(100%+48px)] max-sm:left-0 max-sm:flex-col flex items-center">
              {menuList.map((el, index) => (
                <li key={index} className="navbar-button-container">
                  <a href={el.url} className="navbar-button">
                    {el.text}
                  </a>
                </li>
              ))}
              <ul className="flex max-sm:gap-0 items-center font-light max-sm:w-full bg-white">
                <li className="sm:px-2 h-full flex items-center sm:pl-[52px] max-sm:hover:bg-gray-100">
                  <a href="/" className="navbar-language-button">
                    KOR
                  </a>
                </li>
                <li className="w-1 h-4 text-gray-300 center flex items-center">
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
      </motion.nav>
    </AnimatePresence>
  );
}
