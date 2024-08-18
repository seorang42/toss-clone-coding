import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Section7() {
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
    offset: ["start 80%", "end 80%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div ref={ref} className="w-full overflow-hidden">
      <div
        className="w-full h-[800px] max-sm:h-[665px] bg-no-repeat flex justify-center items-center relative"
        style={{
          backgroundImage: !isScreenSm
            ? "url(https://static.toss.im/assets/homepage/newtossim/section2_4_big.jpg)"
            : "url(https://static.toss.im/assets/homepage/newtossim/section2_4_big_mobile.png)",
          backgroundSize: !isScreenSm ? "cover" : "contain",
          backgroundPosition: "center",
        }}
      >
        <span className="max-sm:text-[55px] text-[100px] font-bold max-sm:font-semibold text-[#f9fafb] leading-[1.3] text-center max-sm:white-text-shadow">
          {`꼭 필요했던${!isScreenSm ? " " : "\n"}금융`}
        </span>
        <motion.div
          style={{
            width: "calc((100vw - 1040px) / 2)",
            scaleX,
          }}
          className="max-sm:hidden h-full bg-white absolute top-0 left-0 origin-left"
        />
        <motion.div
          style={{
            width: "calc((100vw - 1040px) / 2)",
            scaleX,
          }}
          className="max-sm:hidden h-full bg-white absolute top-0 right-0 origin-right"
        />
      </div>
    </div>
  );
}
