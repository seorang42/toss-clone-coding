import Image from "next/image";
import logo from "../../public/Toss_Logo_Primary.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

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
        <div className="w-[92%] flex justify-between">
          <div className="flex shrink-0 items-center">
            <Image src={logo} alt="로고" className="w-fit h-14" />
          </div>
          <div className="flex items-center">
            <ul className="flex gap-4">
              <li className="navbar-button">회사 소개</li>
              <li className="navbar-button">고객센터</li>
              <li className="navbar-button">자주 묻는 질문</li>
              <li className="navbar-button">토스인증서</li>
              <li className="navbar-button">채용</li>
            </ul>
            <div className="flex gap-2 items-center">
              <div className="ml-[52px] navbar-button">KOR</div>
              <div className="w-[1px] h-4 bg-gray-400" />
              <div className="navbar-button">ENG</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
