import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import TitleBox from "../TitleBox";
import { imgUrl } from "./imgUrl";
import ClickAnimation from "./ClickAnimation";
import Possibility from "./Possibility";
import Percent from "./Percent";

export default function Section4() {
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  useEffect(() => {
    if (isInView) {
      let interval: NodeJS.Timeout;
      let progressInterval: NodeJS.Timeout;
      if (counter === 0) {
        interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % imgUrl.length);
        }, 3000);
        setProgress(74);
      } else if (counter === 1 || counter === 2 || counter === 3) {
        interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % imgUrl.length);
        }, 2000);
      } else if (counter === 4) {
        setProgress(0);
        interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % imgUrl.length);
        }, 4000);
      }

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [counter, isInView]);

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full flex justify-center py-[250px] max-sm:py-[100px] overflow-hidden">
      <div className="w-full h-full max-w-[1140px] flex justify-center relative">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-[92%] flex flex-col"
          transition={{ staggerChildren: 0.5 }}
        >
          {/* 제목 및 설명 */}
          <motion.div
            variants={contentVariants}
            className="default-title-container sm:gap-5"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <TitleBox
              category="대출"
              content={"여러 은행의 조건을\n1분 만에\n확인해보세요"}
            />
          </motion.div>
          {/* 모바일 화면 */}
          <motion.div
            variants={contentVariants}
            className="relative sm:absolute h-auto sm:w-[600px] max-sm:max-w-[375px] max-sm:self-center sm:right-0 -z-10 overflow-hidden sm:-mr-[60px] sm:-mt-[55px]"
            transition={{ type: "tween", duration: 0.5 }}
          >
            {counter === 0 && (
              <>
                <Possibility progress={progress} />
                <Percent />
              </>
            )}
            <div className="img-container">
              <AnimatePresence>
                <motion.img
                  className="img"
                  key={counter}
                  src={imgUrl[counter]}
                  initial={{
                    x: counter !== 0 ? "100%" : 0,
                  }}
                  animate={{ x: 0, y: counter === 4 ? "-45%" : 0 }}
                  transition={{
                    duration: 0.3,
                    y: { delay: 1, duration: 1.8, ease: "easeOut" },
                  }}
                />
                <motion.img
                  className="absolute top-0 w-full -z-10"
                  key={counter - 1}
                  src={imgUrl[counter - 1]}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                />
              </AnimatePresence>
              {isInView && counter !== 4 && (
                <ClickAnimation key={counter} index={counter} />
              )}
            </div>
            <img
              className="img"
              src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
            />
          </motion.div>
          {/* 하단 텍스트 */}
          <motion.div className="flex flex-col text-toss-gray-800">
            <motion.span
              variants={contentVariants}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="sm:mt-[210px] max-sm:mt-[2px] text-5xl max-sm:text-[28px] font-semibold leading-normal"
            >
              한도는 높게,
            </motion.span>
            <motion.span
              variants={contentVariants}
              transition={{ delay: 2, duration: 0.5 }}
              className="text-5xl max-sm:text-[28px] font-semibold leading-normal"
            >
              금리는{` `}
              <span className="text-toss-gray-500">낮게,</span>
            </motion.span>
            <motion.span
              variants={contentVariants}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="text-5xl max-sm:text-[28px] font-semibold leading-normal"
            >
              부담은{` `}
              <span className="text-toss-gray-300">적게.</span>
            </motion.span>
            <motion.span
              variants={contentVariants}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-[23px] max-sm:text-[17px] font-medium leading-normal text-toss-gray-800 mt-[30px]"
            >
              {`앉은 자리에서 여러 은행의 한도와 금리를 비교하고${
                !isScreenSm ? "\n" : " "
              }내게 꼭 맞는 대출을 찾아보세요.\n신용, 비상금, 대환, 주택담보대출 모두 가능해요.`}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
