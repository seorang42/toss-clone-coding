import { motion } from "framer-motion";

export default function Percent() {
  return (
    <div className="flex items-center absolute top-[41.6%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-toss-blue-1 overflow-hidden max-sm:scale-[0.625]">
      <span className="percent-number">
        <motion.span
          initial={{ y: -20 }}
          animate={{ y: -294 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          {"2\n3\n4\n5\n6\n7\n8\n9"}
        </motion.span>
      </span>
      <span className="percent-number">
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: -336 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          {"1\n2\n3\n4\n5\n6\n7\n8\n9"}
        </motion.span>
      </span>
      <span className="w-[22px] h-6 text-[25px] font-bold flex justify-center items-center">
        %
      </span>
    </div>
  );
}
