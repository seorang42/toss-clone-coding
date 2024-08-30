import { useEffect, useState } from "react";
import TitleBox from "../TitleBox";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { isLoadedAtom } from "@/app/atoms";

export default function Section9() {
  const isLoaded = useRecoilValue(isLoadedAtom);

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

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="w-full flex flex-col items-center py-[250px] max-sm:py-[100px] bg-toss-gray-100 -z-20 overflow-hidden">
      <div className="w-full max-w-[1140px] flex justify-center">
        <motion.div
          initial="hidden"
          whileInView={isLoaded ? "visible" : ""}
          viewport={{ once: true, amount: 0.06 }}
          className="responsive-width"
        >
          <div className="w-full sm:h-[1272px] flex flex-col relative">
            <motion.section
              variants={contentVariants}
              transition={{ type: "tween", duration: 0.5 }}
              className="flex flex-col gap-[20px] max-sm:gap-[10px]"
            >
              <TitleBox
                category="결제"
                content={"결제는 간편하게,\n할인과 적립은 두둑히"}
              />
            </motion.section>
            <motion.span
              variants={contentVariants}
              transition={{ type: "tween", duration: 0.5, delay: 1 }}
              className="max-sm:hidden mt-[71px] text-[23px] font-medium text-toss-gray-700"
            >
              {
                "온라인과 오프라인 모두\n국내는 물론, 해외에서도\n토스로 간편하게 결제해요."
              }
            </motion.span>
            <motion.span
              variants={contentVariants}
              transition={{ type: "tween", duration: 0.5, delay: 1.5 }}
              className="max-sm:hidden absolute w-[480px] text-[23px] font-medium text-toss-gray-700 bottom-[280px] left-[640px]"
            >
              {
                "결제할 땐, 혜택이 빠질 수 없죠.\n쿠폰과 포인트 써서 할인 받고\n토스프라임 적립까지 또 받아요."
              }
            </motion.span>
            <motion.section
              variants={contentVariants}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: !isScreenSm ? 1 : 0.5,
              }}
              className="w-[600px] max-sm:w-full max-sm:max-w-[375px] max-sm:self-center h-auto absolute max-sm:relative sm:bottom-0 sm:-left-[124px] -z-10"
            >
              <div className="img-container">
                <Image
                  className="inner-img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="https://static.toss.im/assets/homepage/newtossim/chekout_screen_01.png"
                  alt="section9Img-1"
                />
              </div>
              <Image
                className="img"
                width={0}
                height={0}
                sizes="100vw"
                src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
                alt="iphoneImg"
              />
            </motion.section>
            <motion.span
              variants={contentVariants}
              transition={{ type: "tween", duration: 0.5, delay: 1 }}
              className="sm:hidden text-center text-[17px] font-medium text-toss-gray-700 mb-8"
            >
              {
                "온라인과 오프라인 모두 국내는 물론,\n해외에서도 토스로 간편하게 결제해요."
              }
            </motion.span>
            <motion.section
              variants={contentVariants}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: !isScreenSm ? 0.5 : 1,
              }}
              className="w-[600px] max-sm:w-full max-sm:max-w-[375px] max-sm:self-center h-auto absolute max-sm:relative sm:-top-[70px] sm:-right-[70px] -z-10"
            >
              <div className="img-container">
                <Image
                  className="inner-img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="https://static.toss.im/assets/homepage/newtossim/chekout_screen_02.png"
                  alt="section9Img-2"
                />
              </div>
              <Image
                className="img"
                width={0}
                height={0}
                sizes="100vw"
                src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
                alt="iphoneImg"
              />
            </motion.section>
            <motion.span
              variants={contentVariants}
              transition={{ type: "tween", duration: 0.5, delay: 1.5 }}
              className="sm:hidden text-center text-[17px] font-medium text-toss-gray-700 mb-8"
            >
              {
                "결제할 땐, 혜택이 빠질 수 없죠. 쿠폰과 포인트\n써서 할인 받고 토스프라임 적립까지 또 받아요."
              }
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
