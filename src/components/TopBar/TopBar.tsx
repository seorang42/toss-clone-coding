import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AppleLogoIcon, CloseIcon, GoogleLogoIcon, MenuIcon } from "../icons";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { TossLogoIcon } from "../TossLogoIcon";

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

  const [isScreenSm, setIsScreenSm] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsScreenSm(false);
      } else {
        setIsScreenSm(true);
        setIsBtnClicked(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const buttonRef = useRef(null);
  const dropdownRef = useOutsideClick(() => setIsBtnClicked(false), buttonRef);
  const menuRef = useOutsideClick(() => setIsMenuOpened(false));

  const menuList = [
    { text: "회사 소개", url: "/" },
    { text: "공지사항", url: "/" },
    { text: "고객센터", url: "/" },
    { text: "자주 묻는 질문", url: "/" },
    { text: "토스인증서", url: "/" },
    { text: "채용", url: "/" },
  ];

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.nav
          ref={menuRef}
          animate={{ height: isMenuOpened ? "auto" : "60px" }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          className={`w-full fixed left-0 top-0 z-50 flex justify-center bg-white overflow-hidden border-b ${
            isScrolled && !isMenuOpened
              ? "border-[#E6E8EA]"
              : "border-transparent"
          }`}
        >
          <div className="w-full max-w-[1140px] flex justify-center">
            <div className="sm:w-[92%] flex items-center max-sm:w-full max-sm:px-6 max-sm:flex-col">
              <div className="flex w-full min-h-[60px] items-center z-10">
                <section className="flex items-center mr-6">
                  <a href="/" className="flex w-[76px] items-center">
                    <span className="h-auto w-auto min-w-[24px] sm:mt-[0.5px]">
                      <TossLogoIcon />
                    </span>
                  </a>
                </section>
                <div className="sm:hidden absolute top-4 right-5 flex gap-3 items-center">
                  <motion.button
                    ref={buttonRef}
                    onClick={() => setIsBtnClicked((prev) => !prev)}
                    whileHover={{ backgroundColor: "rgb(27, 100, 218)" }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="w-[76px] h-[30px] rounded-[15px] flex justify-center items-center text-[12px] text-white bg-toss-blue-1"
                  >
                    앱 다운로드
                  </motion.button>
                  <button
                    onClick={() => setIsMenuOpened((prev) => !prev)}
                    className="h-[26px] flex px-2 -mr-2 focus:bg-[#F3F4F5]"
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
                <ul className="flex max-sm:gap-0 items-center max-sm:w-full bg-white">
                  <li className="sm:px-2 h-full flex items-center sm:pl-[52px] max-sm:hover:bg-[#F3F4F5]">
                    <a href="/" className="navbar-language-button">
                      KOR
                    </a>
                  </li>
                  <li className="w-1 h-4 text-toss-gray-300 center flex items-center font-light">
                    |
                  </li>
                  <li className="sm:px-2 h-full flex items-center max-sm:hover:bg-[#F3F4F5]">
                    <a
                      href="/"
                      className="navbar-language-button text-toss-gray-400"
                    >
                      ENG
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
      {isBtnClicked && isScreenSm && (
        <div
          ref={dropdownRef}
          className="absolute top-[46px] right-0 my-2 px-[6px] py-2 min-w-[120px] rounded-lg z-50 bg-white dropdown-shadow"
        >
          <ul>
            <li>
              <motion.a
                whileHover={{ backgroundColor: "rgb(243, 244, 245)" }}
                transition={{ type: "tween", duration: 0.2 }}
                className="px-4 py-3 flex gap-2 items-center rounded-lg bg-white font-medium text-4 text-toss-gray-700"
                href="/"
              >
                <AppleLogoIcon isSmall />
                App Store 다운로드
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ backgroundColor: "rgb(243, 244, 245)" }}
                transition={{ type: "tween", duration: 0.2 }}
                className="px-4 py-3 flex gap-2 items-center rounded-lg bg-white font-medium text-4 text-toss-gray-700"
                href="/"
              >
                <GoogleLogoIcon isSmall />
                Google Play 다운로드
              </motion.a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
