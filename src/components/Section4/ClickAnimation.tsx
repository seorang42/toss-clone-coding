import { motion } from "framer-motion";

export default function ClickAnimation({ index }: { index: number }) {
  return (
    <div
      className={`w-full h-[9%] ${
        index !== 1 ? "bottom-[3%]" : "bottom-[9.5%]"
      } absolute z-20 flex justify-center`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          times: [0, 0.5, 1],
          duration: 0.7,
          delay: index !== 0 ? 1.6 : 2.4,
        }}
        className="w-[92%] h-full bg-white"
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: [0, 0.2, 0.2, 0.2, 0.2, 0.2, 0],
          scale: [0.5, 1, 1, 0.5, 1, 1, 1],
        }}
        transition={{
          times: [0, 0.1, 0.4, 0.6, 0.8, 0.9, 1],
          delay: index !== 0 ? 0.6 : 1.4,
          duration: 2,
        }}
        className="absolute top-1/2 left-1/2 w-[20%] aspect-square rounded-full bg-blue-400"
      />
      <motion.div
        initial={{
          opacity: 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: [0, 0.3, 0.3, 0.3, 0.3, 0.3, 0],
          scale: [0.5, 1, 1, 0.5, 1, 1, 1],
        }}
        transition={{
          times: [0, 0.3, 0.4, 0.6, 0.8, 0.9, 1],
          delay: index !== 0 ? 0.6 : 1.4,
          duration: 2,
        }}
        className="absolute top-1/2 left-1/2 w-[10%] aspect-square rounded-full bg-white"
      />
    </div>
  );
}
