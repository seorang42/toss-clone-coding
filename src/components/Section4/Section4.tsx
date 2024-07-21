import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TitleBox from "../TitleBox";
import Circle from "./Circle";

export default function Section4() {
  const img = [
    "https://static.toss.im/assets/homepage/newtossim/section1_3_loan_01.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_3_loan_02.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_3_loan_03.png",
  ];
  const [counter, setCounter] = useState(0);
  const [sliderCounter, setSliderCounter] = useState(0);
  const slider = [
    { id: 0, bgColor: "#d98880", content: "" },
    { id: 1, bgColor: "#d98880", content: "삼" },
    { id: 2, bgColor: "#eb984e", content: "우" },
    { id: 3, bgColor: "#44b29d", content: "신" },
    { id: 4, bgColor: "#f4cf40", content: "국" },
    { id: 5, bgColor: "#e74c3c", content: "하" },
    { id: 6, bgColor: "#8d44ad", content: "카" },
    { id: 7, bgColor: "#57d68c", content: "농" },
    { id: 8, bgColor: "#5cade2", content: "우" },
    { id: 9, bgColor: "#d35400", content: "" },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let sliderInterval: NodeJS.Timeout;
    if (counter === 0) {
      interval = setInterval(() => {
        setCounter((prev) => (prev + 1) % img.length);
      }, 3000);
    } else if (counter === 1) {
      interval = setInterval(() => {
        setCounter((prev) => (prev + 1) % img.length);
      }, 4000);
      setSliderCounter(0);
      sliderInterval = setInterval(() => {
        setSliderCounter((prev) => prev + 1);
      }, 2000);
    } else if (counter === 2) {
      interval = setInterval(() => {
        setCounter((prev) => (prev + 1) % img.length);
      }, 4000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(sliderInterval);
    };
  }, [counter]);

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full flex justify-center py-[250px]">
      <motion.div
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
          <div className="flex flex-col gap-[20px]">
            <TitleBox
              category="대출"
              content={"여러 은행의 조건을\n1분 만에\n확인해보세요"}
            />
          </div>
          <motion.span
            variants={contentVariants}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-[210px] text-5xl font-semibold leading-normal"
          >
            한도는 높게,
          </motion.span>
          <motion.span
            variants={contentVariants}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-5xl font-semibold leading-normal"
          >
            금리는{` `}
            <span className="text-gray-400">낮게,</span>
          </motion.span>
          <motion.span
            variants={contentVariants}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-5xl font-semibold leading-normal"
          >
            부담은{` `}
            <span className="text-gray-300">적게.</span>
          </motion.span>
          <motion.span
            variants={contentVariants}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-2xl font-medium leading-normal text-gray-700 mt-[30px]"
          >
            {
              "앉은 자리에서 여러 은행의 한도와 금리를 비교하고\n내게 꼭 맞는 대출을 찾아보세요.\n신용, 비상금, 대환, 주택담보대출 모두 가능해요."
            }
          </motion.span>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className="absolute right-0 -z-10 overflow-hidden"
          transition={{ type: "tween", duration: 0.5 }}
        >
          <div className="-mr-[60px] -mt-[55px] relative">
            <AnimatePresence>
              <motion.img
                className="screen-img"
                key={counter}
                src={img[counter]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              {counter === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-[342px] h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 overflow-hidden"
                >
                  <div className="w-[382px] h-full flex items-center gap-6 -ml-[40px]">
                    {slider.map((el) => (
                      <Circle
                        key={el.id}
                        id={el.id}
                        bgColor={el.bgColor}
                        content={el.content}
                        counter={sliderCounter}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <img
              className="w-[600px] h-fit"
              src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
