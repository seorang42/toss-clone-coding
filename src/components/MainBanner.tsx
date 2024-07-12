import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollIcon } from "@/components/icons";

export default function MainBanner() {
  return (
    <div
      className="w-full h-screen relative"
      style={{
        backgroundImage:
          "url('https://static.toss.im/assets/homepage/newtossim/new_main.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[500px] white-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-0 left-0 w-full flex flex-col items-center"
      >
        <div className="mt-[170px] whitespace-pre-wrap text-center text-[66px] font-bold leading-[1.4]">
          {"금융의 모든 것\n토스에서 쉽고 간편하게"}
        </div>
        <div className="flex gap-1 mt-[50px]">
          <a
            href="#"
            className="px-4 py-3 bg-black bg-opacity-80 text-white flex gap-2 rounded-lg"
          >
            <Image
              src="https://static.toss.im/png-icons/timeline/applekorea.png"
              alt="애플 로고"
              width="24"
              height="24"
            />
            App Store
          </a>
          <a
            href="#"
            className="px-4 py-3 bg-black bg-opacity-80 text-white flex gap-2 rounded-lg"
          >
            <Image
              src="https://static.toss.im/png-icons/timeline/googleplay.png"
              alt="구글 로고"
              width="24"
              height="24"
            />
            Google Play
          </a>
        </div>
      </motion.div>
      <div
        onClick={() => {
          scrollTo({ top: window.innerHeight - 60, behavior: "smooth" });
        }}
        className="absolute bottom-[30px] left-1/2 -translate-x-1/2 h-[50px] w-[50px] cursor-pointer"
      >
        <motion.div
          animate={{
            y: [-20, 0, 0, -10, 0, -20],
            opacity: [0, 1, 1, 1, 1, 0],
            scale: [0.8, 1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            type: "tween",
          }}
          className="absolute bottom-0 w-full flex justify-center"
        >
          <ScrollIcon />
        </motion.div>
      </div>
    </div>
  );
}
