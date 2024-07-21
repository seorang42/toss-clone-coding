import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Part1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // 이미지 애니메이션 처리 부분
  const imgY = useTransform(scrollYProgress, [0.1, 0.7], [60, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  // 텍스트 박스 애니메이션 처리 부분
  const textY = useTransform(scrollYProgress, [0.82, 1], [10, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.82, 1], [0, 1]);
  return (
    <div ref={ref} className="w-full mt-[80px] flex flex-col pb-[210px]">
      <span className="text-6xl font-semibold leading-[1.4]">
        {"토스로\n나에게 딱 맞게"}
      </span>
      <motion.img
        style={{ translateY: imgY, opacity: imgOpacity }}
        className="mt-[140px] w-full max-w-[740px] self-center"
        src="https://static.toss.im/assets/homepage/newtossim/section2_1_document.jpg"
      />
      <motion.div
        style={{ translateY: textY, opacity: textOpacity }}
        className="w-full flex flex-col gap-6 mt-[60px] "
      >
        <span className="flex gap-3 text-[40px] font-semibold">
          <span>내 문서함</span>
          <span className="text-gray-400">
            공공문서 확인부터 납부까지 한 번에
          </span>
        </span>
        <span className="text-[20px] font-medium leading-normal">
          {
            "건강검진, 국가장학금 신청, 교통범칙금·과태료 납부.\n그동안 종이로 받았던 문서들 꼼꼼히 챙기느라 고생했어요.\n앞으로는 토스 내 문서함에서 간단히 받아보고 납부할 수 있어요."
          }
        </span>
      </motion.div>
    </div>
  );
}
