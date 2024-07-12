"use client";

import { motion, useScroll } from "framer-motion";
import TitleBox from "./TitleBox";
import { useEffect, useRef, useState } from "react";

export default function Section6() {
  const boxList = [
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_06.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_08.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_07.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_05.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_02.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_04.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_03.png",
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setProgress(scrollYProgress.get());
    });
  }, []);

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full flex justify-center py-[250px] overflow-hidden">
      <div className="w-full max-w-[1140px] flex justify-center">
        <motion.div
          className="w-[92%] flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 1 }}
          ref={ref}
        >
          <motion.div
            variants={contentVariants}
            className="flex flex-col gap-[30px]"
            transition={{ duration: 0.5 }}
          >
            <TitleBox category="투자" content={"투자\n모두가 할 수 있도록"} />
          </motion.div>
          <div className="w-full flex justify-center relative">
            <img
              className="w-[600px] h-fit"
              src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
            />
            <img
              className="w-[342px] h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
              src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_01.png"
            />
            <motion.div
              variants={contentVariants}
              transition={{ duration: 0.5, staggerChildren: 0.5 }}
              className="absolute top-[342px] w-full max-w-[900px] flex justify-between self-center pl-[30px]"
            >
              <motion.span
                variants={contentVariants}
                transition={{ duration: 0.5 }}
                className="whitespace-pre-wrap text-[23px] font-medium"
              >
                {"이해하기 쉬운 용어\n설명이 필요 없는\n직관적인 화면 구성"}
              </motion.span>
              <motion.span
                variants={contentVariants}
                transition={{ duration: 0.5 }}
                className="whitespace-pre-wrap text-[23px] font-medium"
              >
                {
                  "송금처럼 쉬운 구매 경험\n그리고 투자 판단에\n도움을 주는 콘텐츠까지"
                }
              </motion.span>
            </motion.div>
            <div className="absolute flex gap-4 bottom-[124px] -z-10 left-0 justify-center">
              {boxList.map((el, index) => {
                let newProgress;
                if (Math.abs(index - 3) === 0) {
                  newProgress = 1;
                } else if (Math.abs(index - 3) === 1) {
                  if (progress - 0.3 > 0) {
                    newProgress = (progress - 0.3) / 0.4;
                  }
                } else if (Math.abs(index - 3) === 2) {
                  if (progress - 0.7 > 0) {
                    newProgress = (progress - 0.7) / 0.2;
                  }
                } else if (Math.abs(index - 3) === 3) {
                  if (progress - 0.9 > 0) {
                    newProgress = (progress - 0.9) / 0.1;
                  }
                }
                return (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: newProgress }}
                    key={index}
                    className="w-[178px] h-[178px]"
                    src={el}
                    transition={{ duration: 0 }}
                  />
                );
              })}
            </div>
          </div>
          <span className="mt-3 text-center whitespace-pre-wrap text-[23px] font-medium">
            {
              "별도 앱 설치 없이 토스에서 바로,\n토스증권으로 나만의 투자를 시작해 보세요."
            }
          </span>
        </motion.div>
      </div>
    </section>
  );
}
