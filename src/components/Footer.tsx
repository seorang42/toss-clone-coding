import { motion } from "framer-motion";

export default function Footer() {
  const menuList = [
    {
      title: "서비스",
      list: [
        "공지사항",
        "자주 묻는 질문",
        "공동인증서 관리",
        "계정 일시잠금",
        "고객센터",
        "브랜드 리소스센터",
        "토스의 개인정보 보호",
        "토스유스카드",
      ],
    },
    {
      title: "회사",
      list: [
        "회사 소개",
        "토스페이먼츠",
        "토스인슈어런스",
        "토스증권",
        "토스씨엑스",
        "토스뱅크",
        "토스플레이스",
        "토스모바일",
        "채용",
        "블로그",
        "공고",
      ],
    },
    {
      title: "문의",
      list: [
        "사업 제휴",
        "토스쇼핑 입점문의",
        "광고 문의",
        "인증 사업 문의",
        "마케팅·PR",
        "IR",
      ],
    },
    {
      title: "고객센터",
      list: [
        "전화: 1599-4905 (24시간 연중무휴)",
        "이메일(고객전용): support@toss.im",
        "이메일(외부기관전용): safe@toss.im",
        "민원 접수",
      ],
    },
  ];

  const termsList = [
    { text: "서비스 이용약관", isBright: false },
    { text: "통합 금융정보 서비스 약관", isBright: false },
    { text: "마이데이터 서비스 이용약관", isBright: false },
    { text: "이용자의 권리 및 유의사항", isBright: false },
    { text: "개인정보 처리방침", isBright: true },
    { text: "채용팀 개인정보 처리방침", isBright: true },
    { text: "어드민 서비스 개인정보 처리방침", isBright: true },
    { text: "영상정보처리기기 운영 관리 방침", isBright: false },
    { text: "위치기반서비스 이용약관", isBright: true },
    { text: "가맹점 고지사항", isBright: false },
    { text: "토스 전자서명인증업무준칙", isBright: false },
    { text: "토스 전자인증서비스 약관", isBright: false },
    { text: "금융소비자보호", isBright: false },
    { text: "토스비즈니스 개인정보 처리방침", isBright: true },
  ];

  const snsList = [
    "https://static.toss.im/assets/homepage/safety/icn-facebook.svg",
    "https://static.toss.im/assets/homepage/safety/icn-blog.svg",
    "https://static.toss.im/assets/homepage/safety/icn-naver.svg",
    "https://static.toss.im/assets/homepage/safety/icn-twitter.svg",
    "https://static.toss.im/assets/homepage/safety/icn-instagram.svg",
  ];
  return (
    <div
      className="w-full bg-[#1A1F27]
     pt-[50px] max-sm:pt-[60px] pb-[100px] max-sm:pb-[80px] flex justify-center"
    >
      <div className="w-full max-w-[1064px] px-[67px] flex flex-col max-sm:px-10">
        <div className="w-full flex pb-[50px] max-sm:flex-col max-sm:gap-10">
          {menuList.map((el, index) => (
            <ul
              key={index}
              className="w-full max-w-[170px] flex flex-col last:grow last:max-w-none max-sm:max-w-none"
            >
              <li className="w-full h-[35px] text-gray-400 font-semibold text-[15px] flex items-center">
                {el.title}
              </li>
              {el.list.map((el, index) => (
                <a
                  key={index}
                  href="/"
                  className="flex items-center w-full min-h-[30px] leading-[30px] text-[15px] text-gray-500 hover:underline"
                >
                  {el}
                </a>
              ))}
            </ul>
          ))}
        </div>
        <div className="w-full flex flex-col">
          <span className="w-full h-9 text-gray-400 font-semibold text-[15px]">
            ㈜비바리퍼블리카
          </span>
          <div className="w-full flex flex-col text-[13px] text-gray-500 ">
            <span>사업자 등록번호 : 120-88-01280 | 대표 : 이승건</span>
            <span>
              호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 :
              2014-서울강남-03377{" "}
              <a href="/" className="hover:underline text-gray-600">
                사업자정보확인
              </a>
            </span>
            <span>
              06236 서울특별시 강남구 테헤란로 142, 4층, 10층, 11층, 12층, 13층,
              22층, 23층 (역삼동, 아크플레이스)
            </span>
            <span>
              고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (역삼동,
              한국타이어빌딩)
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[34px] gap-y-1 pt-6 pb-[31px] max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-y-[6px]">
          {termsList.map((el, index) => (
            <a
              key={index}
              href="/"
              className={`w-fit text-[13px] hover:underline leading-[18px] ${
                el.isBright ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {el.text}
            </a>
          ))}
        </div>
        <ul className="flex gap-2">
          {snsList.map((el, index) => (
            <motion.li
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.1 }}
              key={index}
              className="w-9 h-9 rounded-full"
            >
              <a className="w-full h-full" href="/">
                <img className="w-full h-full" src={el} />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
