import { motion } from "framer-motion";

export default function Section2() {
  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full h-[1687px] max-w-[1140px] flex justify-center">
      <motion.div
        className="w-[92%] h-full relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          staggerChildren: 0.5,
        }}
      >
        <motion.div
          variants={contentVariants}
          className="mt-[250px] gap-[30px] flex flex-col"
          transition={{ type: "tween", duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-toss-blue">홈 · 소비</h2>
          <h2 className="text-5xl font-semibold whitespace-pre-wrap leading-normal">
            {"내 돈 관리,\n지출부터 일정까지\n똑똑하게"}
          </h2>
        </motion.div>
        <div className="absolute w-full max-h-[1000px] h-full -z-10 top-[250px] overflow-hidden">
          <motion.div
            variants={contentVariants}
            className="absolute w-[600px] right-0 -mr-28"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <img
              src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
              alt="img1-1"
            />
            <img
              className="w-[342px] h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
              src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_01.png"
              alt="img1-2"
            />
          </motion.div>
        </div>
        <motion.div
          variants={contentVariants}
          className="absolute w-[600px] -z-10 left-0 top-[586px] -ml-28"
          transition={{ type: "tween", duration: 0.5 }}
        >
          <img
            src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
            alt="img2-1"
          />
          <img
            className="w-[342px] h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_02.png"
            alt="img2-2"
          />
        </motion.div>
        <motion.div
          variants={contentVariants}
          className="absolute bottom-[331px] right-[30px]"
          transition={{ type: "tween", duration: 0.5 }}
        >
          <h2 className="whitespace-pre-wrap text-[22px] font-medium leading-normal">
            {
              "토스에 계좌와 카드를 연결해 보세요.\n계좌 잔액, 대출 · 투자 내역은 기본,\n일자별 소비와 수입까지 한 번에 볼 수 있어요."
            }
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
