import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Part3() {
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
    offset: ["start end", "end 85%"],
  });
  const imgY = useTransform(
    scrollYProgress,
    !isScreenSm ? [0, 0.5] : [0, 0.35],
    [60, 0]
  );
  const imgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const textY = useTransform(
    scrollYProgress,
    !isScreenSm ? [0.9, 1] : [0.5, 1],
    [10, 0]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    !isScreenSm ? [0.75, 1] : [0.7, 1],
    [0, 1]
  );
  return (
    <div
      ref={ref}
      className="w-full flex flex-col gap-[50px] max-sm:gap-[30px] mt-[10px]"
    >
      <motion.div style={{ translateY: imgY, opacity: imgOpacity }}>
        <Image
          className="img"
          width={0}
          height={0}
          sizes="100vw"
          src="https://static.toss.im/assets/homepage/newtossim/section2_3_apt_01.jpg"
          alt="part3Img"
        />
      </motion.div>
      <motion.div
        style={{ translateY: textY, opacity: textOpacity }}
        className="flex max-sm:flex-col max-sm:gap-[30px]"
      >
        <div className="w-full flex flex-col leading-[1.3]">
          <span className="text-toss-gray-900 text-[40px] max-sm:text-[26px] font-semibold">
            내 부동산 · 자동차
          </span>
          <span className="text-[40px] max-sm:text-[26px] font-semibold text-toss-gray-400 leading-[1.3]">
            정기적으로 관리해보세요
          </span>
        </div>
        <span className="text-toss-gray-800 w-full grow text-[20px] max-sm:text-[18px] font-medium">
          {
            "집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는 것.\n시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과 자동차 관리도 토스에서 시작해 보세요."
          }
        </span>
      </motion.div>
    </div>
  );
}
