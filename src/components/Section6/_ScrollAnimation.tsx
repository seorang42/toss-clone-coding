// 토스 메인 페이지 개편으로 인해 사용되지 않음

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const firstBoxes = useTransform(scrollYProgress, [0.77, 0.86], [0, 1]);
  const secondBoxes = useTransform(scrollYProgress, [0.86, 0.92], [0, 1]);
  const thirdBoxes = useTransform(scrollYProgress, [0.92, 1], [0, 1]);

  const boxList = [
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_06.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_08.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_07.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_05.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_02.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_04.png",
    "https://static.toss.im/assets/homepage/newtossim/section1_5_stock_03.png",
  ];
  return (
    <div className="absolute flex gap-4 bottom-[124px] -z-10 left-0 justify-center">
      {boxList.map((el, index) => {
        let newProgress;
        if (Math.abs(index - 3) === 0) {
          newProgress = 1;
        } else if (Math.abs(index - 3) === 1) {
          newProgress = firstBoxes;
        } else if (Math.abs(index - 3) === 2) {
          newProgress = secondBoxes;
        } else if (Math.abs(index - 3) === 3) {
          newProgress = thirdBoxes;
        }
        return (
          <motion.img
            style={{ opacity: newProgress }}
            key={index}
            className="w-[178px] h-[178px]"
            src={el}
            transition={{ duration: 0 }}
          />
        );
      })}
    </div>
  );
}
