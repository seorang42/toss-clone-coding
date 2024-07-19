import Image from "next/image";
import logo from "../../public/Toss_Logo_Primary.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

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

  return (
    <nav
      className={`w-full h-[60px] fixed left-0 top-0 z-50 flex justify-center bg-white ${
        isScrolled && "border-b border-[#E6E8EA]"
      }`}
    >
      <div className="w-full h-[59px] max-w-[1140px] flex justify-center">
        <div className="w-[92%] flex justify-between items-center">
          <a
            href="/"
            className="flex shrink-0 items-center h-fit relative w-[68px] overflow-hidden"
          >
            <Image src={logo} alt="로고" className="w-fit h-14 object-cover" />
          </a>
          <div className="flex items-center">
            <ul className="flex gap-4">
              <li className="navbar-button">회사 소개</li>
              <li className="navbar-button">고객센터</li>
              <li className="navbar-button">자주 묻는 질문</li>
              <li className="navbar-button">토스인증서</li>
              <li className="navbar-button">채용</li>
            </ul>
            <div className="flex gap-2 items-center font-light">
              <div className="ml-[52px] navbar-button">KOR</div>
              <div className="w-[1px] h-[14px] bg-gray-300" />
              <div className="navbar-button text-gray-300">ENG</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
