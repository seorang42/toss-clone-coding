// 토스 메인 페이지 개편으로 인해 사용되지 않음

import { motion } from "framer-motion";

interface ICircle {
  id: number;
  counter: number;
  bgColor: string;
  content: string;
}

export default function Circle({ id, counter, bgColor, content }: ICircle) {
  return (
    <motion.div
      animate={{
        x: -64 * (counter + 1),
        scale: id === counter + 4 ? 1.5 : 1,
      }}
      transition={{ repeat: Infinity, repeatDelay: 2, type: "tween" }}
      className="relative w-10 h-10 rounded-full shrink-0 flex justify-center items-center font-black text-white text-lg"
      style={{
        backgroundColor: bgColor,
        opacity: id === counter + 4 ? 1 : 0.8,
      }}
    >
      {content}
      {id === counter + 4 && (
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <motion.circle
            initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1 }}
            fill="none"
            stroke="#5882E8"
            strokeWidth="1.5"
            cx="24"
            cy="24"
            r="22"
            strokeDasharray={`${2 * Math.PI * 22}`}
            style={{ rotate: -90 }}
          />
        </svg>
      )}
    </motion.div>
  );
}
