"use client";

import { motion } from "framer-motion";
import TitleBox from "../TitleBox";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { isLoadedAtom } from "@/app/atoms";

export default function Section6() {
  const isLoaded = useRecoilValue(isLoadedAtom);

  const ref = useRef(null);

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

  return (
    <section className="w-full flex justify-center py-[250px] max-sm:py-[100px] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView={isLoaded ? "visible" : ""}
        viewport={{ once: true, amount: 0.08 }}
        ref={ref}
        className="w-full flex flex-col items-center"
      >
        <motion.div
          variants={contentVariants}
          className="default-title-container max-sm:mb-5 responsive-width max-w-[1140px]"
          transition={{ duration: 0.5 }}
        >
          <TitleBox category="투자" content={"투자,\n모두가 할 수 있도록"} />
        </motion.div>
        <motion.span
          variants={contentVariants}
          transition={{ duration: 0.5 }}
          className="responsive-width sm:hidden text-[17px] font-medium text-toss-gray-800"
        >
          {
            "이해하기 쉬운 용어, 설명이 필요 없는 직관적인 화면 구성, 송금처럼 쉬운 구매 경험 그리고 투자 판단에 도움을 주는 콘텐츠까지"
          }
        </motion.span>
        <div className="w-full max-w-[1140px] flex justify-center relative">
          <div className="relative h-auto sm:w-[600px] max-sm:max-w-[375px] overflow-hidden">
            <div className="img-container">
              <Image
                className="inner-img"
                width={0}
                height={0}
                sizes="100vw"
                src="https://static.toss.im/assets/homepage/newtossim/invest_screen.png"
                alt="section6Img"
              />
            </div>
            <Image
              className="img"
              width={0}
              height={0}
              sizes="100vw"
              src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
              alt="iphoneImg"
            />
          </div>
          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.5, delay: 1 }}
            className="max-sm:hidden w-full absolute flex justify-end top-[228px] max-w-[900px]"
          >
            <span className="text-[23px] font-medium text-toss-gray-800">
              {
                "송금처럼 쉬운 구매 경험\n그리고 투자 판단에\n도움을 주는 콘텐츠까지"
              }
            </span>
          </motion.div>
          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-sm:hidden w-full absolute top-[428px] max-w-[900px]"
          >
            <span className="text-[23px] font-medium text-toss-gray-800">
              {"이해하기 쉬운 용어\n설명이 필요 없는\n직관적인 화면 구성"}
            </span>
          </motion.div>
        </div>
        <motion.span
          variants={contentVariants}
          transition={{ duration: 0.5, delay: !isScreenSm ? 2 : 1 }}
          className="mt-3 max-sm:mt-[14px] text-center text-[23px] max-sm:text-[20px] font-medium max-sm:font-normal text-toss-gray-800 max-sm:text-toss-gray-700"
        >
          {`별도 앱 설치 없이 토스에서 바로,\n토스증권으로 나만의 ${
            isScreenSm ? "\n" : ""
          }투자를 시작해 보세요.`}
        </motion.span>
      </motion.div>
    </section>
  );
}
