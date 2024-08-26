import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Part1() {
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
    offset: !isScreenSm ? ["start 63%", "end 67%"] : ["start 80%", "end 84%"],
  });
  // 이미지 애니메이션 처리 부분
  const imgY = useTransform(
    scrollYProgress,
    !isScreenSm ? [0, 0.5] : [0, 0.5],
    [50, 0]
  );
  const imgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // 텍스트 박스 애니메이션 처리 부분
  const textY = useTransform(scrollYProgress, [0.75, 1], [10, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
  return (
    <div ref={ref} className="w-full flex flex-col">
      <span className="text-toss-gray-900 text-6xl max-sm:text-[36px] font-semibold leading-[1.4]">
        {"금융을 넘어\n일상을 더 편리하게"}
      </span>
      <motion.div
        style={{ translateY: imgY, opacity: imgOpacity }}
        className="mt-[140px] max-sm:mt-16 w-full max-w-[740px] self-center"
      >
        <Image
          className="img"
          width={0}
          height={0}
          sizes="100vw"
          src="https://static.toss.im/assets/homepage/newtossim/section2_1_document.jpg"
          alt="part1Img"
        />
      </motion.div>
      <motion.div
        style={{ translateY: textY, opacity: textOpacity }}
        className="w-full flex flex-col gap-6 max-sm:gap-5 mt-[60px] max-sm:mt-[30px]"
      >
        <span className="flex flex-col gap-[5px] max-sm:gap-[3px] text-[40px] max-sm:text-[26px] font-semibold leading-[1.3]">
          <span className="text-toss-gray-900">세금 납부, 등본 발급까지</span>
          <span className="text-toss-gray-400">토스로 한 번에</span>
        </span>
        <span className="text-[20px] max-sm:text-[18px] font-medium text-toss-gray-800">
          {
            "놓치기 쉬운 세금 납부 및 환급은 물론\n발급을 받을 때마다 귀찮았던 주민등록 등초본까지.\n이제 토스로 편하게 신청하고 받아보세요."
          }
        </span>
      </motion.div>
    </div>
  );
}
