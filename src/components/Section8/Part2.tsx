import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Part2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // 첫번째 이미지 애니메이션 처리 부분
  const img1Y = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  // 두번째 이미지 애니메이션 처리 부분
  const img2Y = useTransform(scrollYProgress, [0.4, 0.85], [60, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.4, 0.85], [0, 1]);
  // 첫번째 이미지 밑 텍스트 박스 애니메이션 처리 부분
  const textY = useTransform(scrollYProgress, [0.77, 1], [10, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.77, 1], [0, 1]);
  return (
    <div ref={ref} className="w-full flex flex-col pb-[220px]">
      <div className="w-full flex gap-10">
        <motion.div
          className="flex flex-col gap-10"
          style={{
            width: "calc((100% - 40px) / 3 * 2)",
            translateY: img1Y,
            opacity: img1Opacity,
          }}
        >
          <img
            className="w-full"
            src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_01.jpg"
          />
          <motion.div
            style={{ translateY: textY, opacity: textOpacity }}
            className="flex flex-col gap-[6px]"
          >
            <span className="text-[40px] font-semibold">보험</span>
            <span className="text-[40px] font-semibold text-gray-400 leading-[1.3] break-keep whitespace-pre-wrap">
              {"조회부터 상담,\n병원비 돌려받기를 간편하게"}
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[35px] whitespace-pre-wrap mt-[122px]"
          style={{
            width: "calc((100% - 40px) / 3)",
            translateY: img2Y,
            opacity: img2Opacity,
          }}
        >
          <img src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_02.jpg" />
          <span className="text-[20px] leading-normal font-medium">
            {
              "또래보다 보험료는 적절하게 내고 있는지, 낸 만큼 보장받고 있는지 확인해 보세요.\n전문가와의 상담을 통해 내게 딱 맞는 보험을 추천 받고, 병원비를 간편하게 청구할 수 있어요."
            }
          </span>
        </motion.div>
      </div>
    </div>
  );
}
