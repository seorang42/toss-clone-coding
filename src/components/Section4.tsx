import { useEffect, useState } from "react";
import TitleBox from "./TitleBox";
import { AnimatePresence, motion } from "framer-motion";

export default function Section4() {
  const img = [
    "https://static.toss.im/assets/homepage/newtossim/section1_3_loan_01.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_3_loan_02.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_3_loan_03.png",
  ];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (counter === 0 || counter === 1) {
      interval = setInterval(() => {
        setCounter((prev) => (prev + 1) % img.length);
      }, 3000);
    } else if (counter === 2) {
      interval = setInterval(() => {
        setCounter((prev) => (prev + 1) % img.length);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <section className="w-full flex justify-center py-[250px]">
      <div className="w-full max-w-[1140px] flex justify-center relative">
        <div className="w-[92%] flex flex-col">
          <div className="flex flex-col gap-[20px]">
            <TitleBox
              category="대출"
              content={"여러 은행의 조건을\n1분 만에\n확인해보세요"}
            />
          </div>
          <span className="mt-[210px] text-5xl font-semibold leading-normal">
            한도는 높게,
          </span>
          <span className="text-5xl font-semibold leading-normal">
            금리는{` `}
            <span className="text-gray-400">낮게,</span>
          </span>
          <span className="text-5xl font-semibold leading-normal">
            부담은{` `}
            <span className="text-gray-300">적게.</span>
          </span>
          <span className="whitespace-pre-wrap text-2xl font-medium leading-normal text-gray-700 mt-[30px]">
            {
              "앉은 자리에서 여러 은행의 한도와 금리를 비교하고\n내게 꼭 맞는 대출을 찾아보세요.\n신용, 비상금, 대환, 주택담보대출 모두 가능해요."
            }
          </span>
        </div>
        <div className="absolute right-0 -z-10 overflow-hidden">
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
            </AnimatePresence>
            <img
              className="w-[600px] h-fit"
              src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* <motion.div>
            <img
              className="screen-img"
              src="https://static.toss.im/assets/homepage/newtossim/section1_3_loan_02.png"
            />
          </motion.div>
          <motion.div>{/* animation 3s 3s 4s }</motion.div>
          <motion.div>
            <img
              className="screen-img"
              src="https://static.toss.im/assets/homepage/newtossim/section1_3_loan_03.png"
            />
          </motion.div> */
