import { motion, useScroll, useTransform } from "framer-motion";
import TitleBox from "./TitleBox";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { isLoadedAtom } from "@/app/atoms";

export default function Section2() {
  const isLoaded = useRecoilValue(isLoadedAtom);

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const transformPx = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0px", "-650px"]
  );
  const transformVw = useTransform(scrollYProgress, [0.8, 1], ["0vw", "100vw"]);

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
    <div className="w-full overflow-hidden flex justify-center">
      <div className="w-full sm:h-[1687px] max-w-[1140px] flex justify-center">
        <motion.div
          ref={ref}
          className="responsive-width h-full relative max-sm:py-[100px]"
          initial="hidden"
          whileInView={isLoaded ? "visible" : ""}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            staggerChildren: 0.5,
          }}
        >
          <motion.div
            variants={contentVariants}
            className="sm:mt-[250px] default-title-container"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <TitleBox
              category="홈 · 소비"
              content={"내 돈 관리,\n지출부터 일정까지\n똑똑하게"}
            />
          </motion.div>
          <motion.div
            style={{
              translateX: isScreenSm ? transformPx : 0,
              x: isScreenSm ? transformVw : 0,
            }}
            className="max-sm:relative max-sm:h-[587px] max-sm:w-max max-sm:flex max-sm:justify-center max-sm:-ml-6 max-sm:shrink-0 max-sm:overflow-hidden"
          >
            <motion.div
              variants={contentVariants}
              className="max-sm:relative absolute h-auto w-[600px] sm:-right-[104px] sm:top-[250px] -z-10 max-sm:w-full max-sm:max-w-[375px]"
              transition={{ type: "tween", duration: 0.5 }}
            >
              <div className="img-container">
                <Image
                  className="inner-img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_01.png"
                  alt="img1-2"
                  loading="lazy"
                />
              </div>
              <img
                className="img"
                src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
                alt="iphoneImg"
              />
            </motion.div>
            <motion.div
              variants={contentVariants}
              className="max-sm:relative absolute h-auto w-[600px] sm:-left-[104px] sm:top-[586px] max-sm:w-full max-sm:max-w-[375px] max-sm:-ml-[100px]"
              transition={{ type: "tween", duration: 0.5 }}
            >
              <div className="img-container">
                <Image
                  className="inner-img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_02.png"
                  alt="img2-2"
                  loading="lazy"
                />
              </div>
              <img
                className="img"
                src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
                alt="iphoneImg"
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={contentVariants}
            className="sm:absolute sm:bottom-[331px] sm:right-[30px]"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <h2 className="text-[23px] max-sm:text-[17px] font-medium leading-normal text-toss-gray-800">
              {
                "토스에 계좌와 카드를 연결해 보세요.\n계좌 잔액, 대출·투자 내역은 기본,\n일자별 소비와 수입까지 한 번에 볼 수 있어요."
              }
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
