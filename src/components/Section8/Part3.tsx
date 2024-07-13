import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Part3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const imgY = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.7, 1], [10, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  return (
    <div ref={ref} className="w-full flex flex-col gap-[50px] pb-[250px]">
      <motion.img
        style={{ translateY: imgY, opacity: imgOpacity }}
        src="https://static.toss.im/assets/homepage/newtossim/section2_3_apt_01.jpg"
      />
      <motion.div
        style={{ translateY: textY, opacity: textOpacity }}
        className="flex whitespace-pre-wrap break-keep"
      >
        <div className="w-full flex flex-col grow">
          <span className="text-[40px] font-semibold">내 부동산 · 자동차</span>
          <span className="text-[40px] font-semibold text-gray-400">
            정기적으로 관리해보세요
          </span>
        </div>
        <span className="w-full grow text-[20px] font-medium">
          {
            "집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는 것.\n시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과 자동차 관리도 토스에서 시작해 보세요."
          }
        </span>
      </motion.div>
    </div>
  );
}
