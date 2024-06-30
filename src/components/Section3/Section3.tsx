import { ClockIcon, ShieldIcon, WonIcon } from "../icons";
import { motion } from "framer-motion";
import TextBox from "./TextBox";

export default function Section3() {
  const contentVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <section className="w-full flex justify-center bg-gray-100 py-[250px]">
      <div className="w-full max-w-[1140px] flex justify-center">
        <motion.div
          className="w-[92%] flex flex-col "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col gap-[30px]"
            variants={contentVariants}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <h2 className="text-toss-blue font-semibold text-[26px]">송금</h2>
            <h2 className="whitespace-pre-wrap text-5xl font-semibold leading-normal">
              {"간편하고 안전하게\n수수료는 평생 무료로\n이런 송금 써보셨나요?"}
            </h2>
          </motion.div>
          <TextBox
            icon={<WonIcon />}
            iconText="평생 무료 송금"
            title={"토스 평생 무료송금으로\n모두의 금융에 자유를"}
            subText={
              "누구에게 보내든 은행 상관 없이,\n이제 토스와 함께 수수료 걱정 없이 송금하세요."
            }
            img="https://static.toss.im/assets/homepage/newtossim/section1_2_01.png"
            variants={contentVariants}
          />
          <TextBox
            icon={<ShieldIcon />}
            iconText="사기 계좌 조회"
            title={"송금 전 사기 내역 조회로\n피해를 미리 방지할 수 있어요"}
            subText={
              "송금 전 토스가 알아서 사기 내역 조회를 해드려요.\n상대방의 연락처 또는 계좌가 사기 계좌인지 조회해\n안전하게 송금할 수 있어요."
            }
            img="https://static.toss.im/assets/homepage/newtossim/section1_2_02.png"
            reversed
            variants={contentVariants}
          />
          <TextBox
            icon={<ClockIcon />}
            iconText="자동이체 예약"
            title={"은행 점검 시간,\n기다릴 필요 없어요"}
            subText={
              "은행 점검 시간에는 자동이체 예약을 이용해보세요.\n점검 시간이 끝나면 토스가 알아서 송금해드릴게요."
            }
            img="https://static.toss.im/assets/homepage/newtossim/section1_2_03.png"
            variants={contentVariants}
          />
        </motion.div>
      </div>
    </section>
  );
}
