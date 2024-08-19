import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ICard {
  title: string;
  content: string;
  btnText: string;
  link: string;
}

export default function Card({ title, content, btnText, link }: ICard) {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col max-w-[300px] max-lg:mb-[80px] max-sm:mb-0">
      <span className="text-[30px] max-sm:text-[26px] leading-[1.3] text-white font-semibold mb-3 max-sm:mb-[10px]">
        {title}
      </span>
      <span className="text-gray-400 text-[20px] max-sm:text-[18px] leading-[1.6] font-medium mb-[38px] max-sm:mb-[20px]">
        {content}
      </span>
      <motion.button
        whileHover={{ backgroundColor: "rgb(27, 100, 218)" }}
        transition={{ type: "tween", duration: 0.1 }}
        className="bg-primary-blue-1 text-white w-fit px-4 pb-[8px] pt-[10px] rounded-lg text-[15px] font-medium"
        onClick={() => router.push(link)}
      >
        {btnText}
      </motion.button>
    </div>
  );
}
