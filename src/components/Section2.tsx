import { motion } from "framer-motion";
import TitleBox from "./TitleBox";

export default function Section2() {
  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div className="w-full sm:h-[1687px] max-w-[1140px] flex justify-center max-sm:py-[100px]">
        <motion.div
          className="responsive-width h-full relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            staggerChildren: 0.5,
          }}
        >
          <motion.div
            variants={contentVariants}
            className="sm:mt-[250px] gap-[30px] max-sm:gap-[10px] flex flex-col"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <TitleBox
              category="홈  ·  소비"
              content={"내 돈 관리,\n지출부터 일정까지\n똑똑하게"}
            />
          </motion.div>
          <div className="max-sm:relative max-sm:h-[587px] max-sm:flex max-sm:justify-center">
            <motion.div
              variants={contentVariants}
              className="max-sm:relative absolute w-[600px] sm:-right-[104px] sm:top-[250px] shrink-0 -z-10 max-sm:h-full max-sm:w-fit"
              transition={{ type: "tween", duration: 0.5 }}
            >
              <img
                className="phone-img"
                src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
                alt="img1-1"
              />
              <img
                className="screen-img"
                src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_01.png"
                alt="img1-2"
              />
            </motion.div>
            <motion.div
              variants={contentVariants}
              className="max-sm:relative absolute w-[600px] sm:-left-[104px] sm:top-[586px] shrink-0 max-sm:h-full max-sm:w-fit max-sm:-ml-[100px]"
              transition={{ type: "tween", duration: 0.5 }}
            >
              <img
                className="phone-img"
                src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
                alt="img2-1"
              />
              <img
                className="screen-img"
                src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_02.png"
                alt="img2-2"
              />
            </motion.div>
          </div>
          <motion.div
            variants={contentVariants}
            className="sm:absolute sm:bottom-[331px] sm:right-[30px]"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <h2 className="text-[23px] max-sm:text-[17px] font-medium leading-normal text-gray-700">
              {
                "토스에 계좌와 카드를 연결해 보세요.\n계좌 잔액, 대출 · 투자 내역은 기본,\n일자별 소비와 수입까지 한 번에 볼 수 있어요."
              }
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
