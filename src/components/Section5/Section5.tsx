import { motion } from "framer-motion";
import TitleBox from "../TitleBox";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLoadedAtom } from "@/app/atoms";

export default function Section5() {
  const isLoaded = useRecoilValue(isLoadedAtom);

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [isScreenSm, setIsScreenSm] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsScreenSm(false);
      } else {
        setIsScreenSm(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardList = [
    {
      img: "https://static.toss.im/icons/png/4x/icon-credit-grade-check-2.png",
      title: "내 신용점수",
      content: `언제 어디서든, 원할 때 간편하게\nKCB, NICE 신용점수를 한 곳에서 확인할 수${
        !isScreenSm ? "\n" : " "
      }있어요.`,
    },
    {
      img: "https://static.toss.im/icons/png/4x/icon-credit-grade-up-2.png",
      title: "신용점수 올리기",
      content: `통신비, 일반 납부내역 등의 서류를\n토스에서 바로 제출해 신용점수를 올릴 수${
        !isScreenSm ? "\n" : " "
      }있어요.`,
    },
    {
      img: "https://static.toss.im/icons/png/4x/icon-alarm-3.png",
      title: "신용관리 알림",
      content:
        "신용점수에 변동이 생기면 토스가 알람을 보내드려요.\n나의 신용점수가 바뀔 때마다 바로 확인하세요.",
    },
    {
      img: "https://static.toss.im/icons/png/4x/icon-bulb-2.png",
      title: "신용관리 팁",
      content:
        "신용점수 관리가 막막하다면?\n신용관리 팁 콘텐츠를 한번 읽어보세요. ",
    },
  ];

  return (
    <section className="w-full flex justify-center bg-toss-gray-100 py-[250px] max-sm:py-[100px]">
      <div className="w-full max-w-[1140px] flex justify-center">
        <motion.div
          className="responsive-width flex flex-col "
          initial="hidden"
          whileInView={isLoaded ? "visible" : ""}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ staggerChildren: 1 }}
        >
          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.5 }}
            className="default-title-container"
          >
            <TitleBox
              category="신용"
              content={
                "금융 생활의 첫 걸음,\n신용점수를 미리\n무료로 관리하세요"
              }
            />
          </motion.div>
          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap basis-[calc(100%+30px)] max-w-[calc(100%+30px)] max-sm:basis-[calc(100%+20px)] max-sm:max-w-[calc(100%+20px)] mt-20 max-sm:mt-[60px] -mr-[30px] -mb-[-30px] max-sm:-mr-5 max-sm:-mb-5 "
          >
            {cardList.map((el, index) => (
              <Card
                key={index}
                img={el.img}
                title={el.title}
                content={el.content}
                variants={contentVariants}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
