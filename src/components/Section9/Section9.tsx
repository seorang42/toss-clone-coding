import TitleBox from "../TitleBox";
import {
  CardRecommendIcon,
  FindCashIcon,
  FindSubsidyIcon,
  TossPrimeIcon,
} from "../icons";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Section9() {
  const cardList = [
    {
      icon: <FindSubsidyIcon />,
      bgColor: "#F2F4F6",
      title: "숨은 정부지원금 찾기",
      content:
        "생각지도 못한 지원금이 기다리고 있어요.\n간단한 정보를 입력 후 받을 수 있는\n정부지원금을 확인해보세요.",
    },
    {
      icon: <CardRecommendIcon />,
      bgColor: "#E8CDF5",
      title: "카드 혜택 추천",
      content:
        "이제, 카드를 내 생활패턴에 맞게.\n여러 카드를 한 번에 비교하고 내게 꼭 맞는 카드를\n선택해 보세요.",
    },
    {
      icon: <TossPrimeIcon />,
      bgColor: "#EAF3FE",
      title: "토스프라임",
      content:
        "매일 토스와 함께 하신다면 가입해보세요.\n가입비 월 5,900원으로 토스 간편결제 시 최대 4%\n적립, 토스증권 국내주식 거래액 1억원까지 수수료\n캐시백 혜택을 누려보세요.\n(20만원까지 4%, 20~60만원까지 1% 구간 별\n적립)",
    },
    {
      icon: <FindCashIcon />,
      bgColor: "#BCEDD6",
      title: "ATM 현금 찾기",
      content:
        "카드 없이 휴대전화만 챙겨 나와도 됩니다.\n토스앱만 있다면 근처 ATM에서 현금을 찾을 수\n있어요.",
    },
  ];

  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full flex justify-center bg-gray-50 overflow-hidden">
      <div className="w-full max-w-[1140px] flex justify-center py-[250px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="w-[92%] flex flex-col"
        >
          <motion.div
            variants={contentVariants}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <TitleBox
              category="알면 좋은 금융"
              content={"이런 서비스도\n한번 써보세요"}
            />
          </motion.div>
          <motion.div
            variants={contentVariants}
            transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap mt-[100px] -mr-[200px] -mb-[100px]"
          >
            {cardList.map((el, index) => (
              <Card
                key={index}
                icon={el.icon}
                bgColor={el.bgColor}
                title={el.title}
                content={el.content}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
