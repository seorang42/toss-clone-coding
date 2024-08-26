import { motion } from "framer-motion";
import { AppleLogoIcon, GoogleLogoIcon, ScrollIcon } from "@/components/icons";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://static.toss.im/assets/homepage/newtossim/new_main.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full white-overlay max-sm:sm-white-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-0 left-0 w-full flex flex-col items-center"
      >
        <div className="mt-[170px] max-sm:mt-[100px] flex flex-col gap-[50px] max-sm:gap-5 items-center">
          <div className="w-full flex justify-center text-center font-bold leading-[1.4] text-toss-gray-900">
            <span className="max-sm:hidden text-[66px] font-semibold tracking-[-0.015rem]">
              {"금융의 모든 것\n토스에서 쉽고 간편하게"}
            </span>
            <span className="sm:hidden text-[33px] font-semibold">
              {"금융의 모든 것\n토스에서\n쉽고 간편하게"}
            </span>
          </div>
          <div className="flex gap-1 justify-center">
            <motion.a
              whileHover={{ backgroundColor: "#505967" }}
              transition={{ type: "tween", duration: 0.2 }}
              href="/"
              className="appstore-button"
            >
              <AppleLogoIcon />
              App Store
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: "#505967" }}
              transition={{ type: "tween", duration: 0.2 }}
              href="/"
              className="appstore-button"
            >
              <GoogleLogoIcon />
              Google Play
            </motion.a>
          </div>
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
