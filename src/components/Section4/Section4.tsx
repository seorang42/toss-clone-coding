import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import TitleBox from "../TitleBox";
import { imgUrl } from "./imgUrl";

export default function Section4() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let interval: NodeJS.Timeout;
      let sliderInterval: NodeJS.Timeout;
      if (counter === 0) {
        interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % imgUrl.length);
        }, 3000);
      } else if (counter === 1 || counter === 2 || counter === 3) {
        interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % imgUrl.length);
        }, 2000);
      } else if (counter === 4) {
        interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % imgUrl.length);
        }, 4000);
      }

      return () => {
        clearInterval(interval);
        clearInterval(sliderInterval);
      };
    }
  }, [counter, isInView]);

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full flex justify-center py-[250px] max-sm:py-[100px]">
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.5,
        }}
        className="w-full h-full max-w-[1140px] flex justify-center relative"
      >
        <motion.div
          variants={contentVariants}
          className="w-[92%] flex flex-col"
          transition={{ type: "tween", duration: 0.5 }}
        >
          {/* 제목 및 설명 */}
          <div className="flex flex-col gap-[20px]">
            <TitleBox
              category="대출"
              content={"여러 은행의 조건을\n1분 만에\n확인해보세요"}
            />
          </div>
          {/* 모바일 화면 */}
          <motion.div
            variants={contentVariants}
            className="relative sm:absolute sm:w-[600px] sm:h-[936px] max-sm:max-w-[375px] max-sm:self-center sm:right-0 -z-10 overflow-hidden sm:-mr-[60px] sm:-mt-[55px]"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="w-[57%] h-[79%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 overflow-hidden">
              <AnimatePresence>
                <motion.img
                  className="w-full"
                  key={counter}
                  src={imgUrl[counter]}
                  initial={{
                    x: counter !== 0 ? "100%" : 0,
                  }}
                  animate={{ x: 0, y: counter === 4 ? "-45%" : 0 }}
                  transition={{ duration: 0.3, y: { delay: 1, duration: 2 } }}
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
            </div>
            <img
              className="w-full h-fit"
              src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
            />
          </motion.div>
          {/* 하단 텍스트 */}
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
            <span className="text-gray-400">낮게,</span>
          </motion.span>
          <motion.span
            variants={contentVariants}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-5x max-sm:text-[28px] font-semibold leading-normal"
          >
            부담은{` `}
            <span className="text-gray-300">적게.</span>
          </motion.span>
          <motion.span
            variants={contentVariants}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-2xl max-sm:text-[17px] font-medium leading-normal text-gray-700 mt-[30px]"
          >
            {
              "앉은 자리에서 여러 은행의 한도와 금리를 비교하고\n내게 꼭 맞는 대출을 찾아보세요.\n신용, 비상금, 대환, 주택담보대출 모두 가능해요."
            }
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
