import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Part2() {
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: !isScreenSm ? ["start end", "end 80%"] : ["start end", "end end"],
  });
  // 첫번째 이미지 애니메이션 처리 부분
  const img1Y = useTransform(
    scrollYProgress,
    !isScreenSm ? [0, 0.5] : [0, 0.65],
    !isScreenSm ? [60, 0] : [48, 0]
  );
  const img1Opacity = useTransform(
    scrollYProgress,
    !isScreenSm ? [0, 0.5] : [0, 0.6],
    [0, 1]
  );
  // 두번째 이미지 애니메이션 처리 부분
  const img2Y = useTransform(
    scrollYProgress,
    !isScreenSm ? [0.3, 0.8] : [0.4, 1],
    [100, 0]
  );
  const img2Opacity = useTransform(
    scrollYProgress,
    !isScreenSm ? [0.3, 0.65] : [0.35, 0.8],
    [0, 1]
  );
  // 첫번째 이미지 밑 텍스트 박스 애니메이션 처리 부분
  const textY = useTransform(
    scrollYProgress,
    !isScreenSm ? [0.72, 1] : [0, 0],
    [10, 0]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    !isScreenSm ? [0.72, 0.97] : [0, 0.4],
    [0, 1]
  );
  return (
    <div ref={ref} className="w-full flex flex-col">
      <div className="w-full flex gap-10 max-sm:flex-col max-sm:gap-[50px]">
        <motion.div
          className="flex flex-col gap-10 max-sm:gap-[30px]"
          style={{
            width: !isScreenSm ? "calc((100% - 40px) / 3 * 2)" : "100%",
            translateY: img1Y,
            opacity: img1Opacity,
          }}
        >
          <div className="w-full h-auto max-sm:max-w-[240px]">
            <Image
              src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_01.jpg"
              className="img"
              width={0}
              height={0}
              sizes="100vw"
              alt="part2Img-1"
            />
          </div>
          <motion.div
            style={{ translateY: textY, opacity: textOpacity }}
            className="flex flex-col gap-[5px] text-[40px] max-sm:text-[26px] font-semibold leading-[1.3]"
          >
            <span className="text-toss-gray-900">보험</span>
            <span className="text-toss-gray-400">
              {"조회부터 상담,\n병원비 돌려받기를 간편하게"}
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[35px] sm:mt-[122px] max-sm:max-w-[240px] max-sm:self-end"
          style={{
            width: !isScreenSm ? "calc((100% - 40px) / 3)" : "100%",
            translateY: img2Y,
            opacity: img2Opacity,
          }}
        >
          <Image
            className="img"
            width={0}
            height={0}
            sizes="100vw"
            src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_02.jpg"
            alt="part2Img-2"
          />
          <span className="text-[20px] max-sm:text-[18px] leading-normal font-medium text-toss-gray-800">
            {
              "또래보다 보험료는 적절하게 내고 있는지, 낸 만큼 보장받고 있는지 확인해 보세요.\n전문가와의 상담을 통해 내게 딱 맞는 보험을 추천 받고, 병원비를 간편하게 청구할 수 있어요."
            }
          </span>
        </motion.div>
      </div>
    </div>
  );
}
