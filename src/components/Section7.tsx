import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section7() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end end"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div ref={ref} className="w-full pb-[170px]">
      <div
        className="w-full h-[800px] bg-no-repeat flex justify-center items-center relative"
        style={{
          backgroundImage:
            "url(https://static.toss.im/assets/homepage/newtossim/section2_4_big.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="text-[100px] font-bold text-white">
          꼭 필요했던 금융
        </span>
        <motion.div
          style={{
            width: "calc((100vw - 1024px) / 2)",
            scaleX,
          }}
          className="h-full bg-white absolute top-0 left-0 origin-left"
        />
        <motion.div
          style={{
            width: "calc((100vw - 1024px) / 2)",
            scaleX,
          }}
          className="h-full bg-white absolute top-0 right-0 origin-right"
        />
      </div>
    </div>
  );
}
