import Image from "next/image";
import logo from "../../public/Toss_Logo_Primary.png";
import banner from "../../public/banner.jpg";

export default function Home() {
  return (
    <div>
      <nav className="w-full h-[60px] fixed z-50 flex justify-center bg-white">
        <div className="w-full h-full max-w-[1140px] flex justify-center">
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
      <div className="h-screen">
        <Image
          src="https://static.toss.im/assets/homepage/newtossim/new_main.png"
          alt="배너"
          fill
          unoptimized
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[500px] white-overlay" />
        <div className="absolute top-0 w-full flex flex-col items-center">
          <div className="mt-[170px] whitespace-pre-wrap text-center text-[66px] font-bold leading-[1.4]">
            {"금융의 모든 것\n토스에서 쉽고 간편하게"}
          </div>
          <div className="flex gap-1 mt-[50px]">
            <a
              href="#"
              className="px-4 py-3 bg-gray-900 bg-opacity-80 text-white flex"
            >
              <Image
                src="https://static.toss.im/png-icons/timeline/applekorea.png"
                alt="애플 로고"
                width="24"
                height="24"
              />
              App Store
            </a>
            <a href="#">Google Play</a>
          </div>
        </div>
      </div>
    </div>
  );
}
