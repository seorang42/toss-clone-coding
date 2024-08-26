import Image from "next/image";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Section10() {
  const cardList = [
    {
      title: "토스결제",
      content:
        "합리적인 수수료,\n간편한 결제 경험으로 비용은\n절감하고 매출은 늘리세요.",
      btnText: "가맹점 문의하기",
    },
    {
      title: "내 매출 장부",
      content:
        "내 매출 장부 따로 관리할 필요 없어요.\n총 매출, 총 입금, 총 지출을 보기 쉽게\n알려드려요.",
      btnText: "자세히 알아보기",
    },
    {
      title: "토스페이먼츠",
      content:
        "시작하기 어려웠던 온라인 비즈니스,\n온라인 결제 토스페이먼츠와\n함께 해보세요.",
      btnText: "홈페이지 바로가기",
    },
    {
      title: "토스플레이스",
      content:
        "포스·주문·결제 시스템까지\n오프라인 매장을 위한\n모든 것이 준비되어 있어요.",
      btnText: "홈페이지 바로가기",
    },
  ];

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full flex flex-col bg-black sm:pt-[100px] sm:pb-[250px] max-sm:pb-[100px]"
    >
      <motion.img
        variants={contentVariants}
        transition={{ duration: 0.5, type: "tween" }}
        className="mb-[11px] max-sm:mb-1 max-sm:h-[600px] max-sm:w-auto max-sm:object-cover"
        src="https://static.toss.im/assets/homepage/newtossim/section4_device.jpg"
      />
      <motion.div
        variants={contentVariants}
        transition={{ duration: 0.5, type: "tween" }}
        className="w-full flex flex-col text-white items-center gap-[21px] mb-[200px] max-sm:mb-[100px]"
      >
        <span className="font-bold leading-[1.4] text-[60px] max-sm:text-[36px]">
          사업도 토스와 함께
        </span>
        <span className="text-center text-[30px] max-sm:text-[18px] font-semibold leading-[1.4] text-toss-gray-400">
          {
            "사업을 시작하셨나요?\n사업의 시작부터 관리까지\n이제 토스와 함께 하세요."
          }
        </span>
      </motion.div>
      <motion.div
        variants={contentVariants}
        transition={{ duration: 0.5, type: "tween" }}
        className="w-full flex lg:gap-5 max-sm:gap-20 px-12 max-sm:px-6 justify-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1"
      >
        {cardList.map((el, index) => (
          <Card
            key={index}
            title={el.title}
            content={el.content}
            btnText={el.btnText}
            link="/"
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
