import { Variants, motion } from "framer-motion";

interface ICard {
  img: string;
  title: string;
  content: string;
  variants: Variants;
}

export default function Card({ img, title, content, variants }: ICard) {
  return (
    <div className="flex flex-col grow h-[400px] pr-[30px] pb-[30px]">
      <motion.div
        variants={variants}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <img className="w-[120px] h-fit mb-[30px]" src={img} />
      </motion.div>
      <span className="font-semibold text-[28px] text-gray-700">{title}</span>
      <span className="mt-[10px] text-[22px] text-gray-500 font-medium whitespace-pre-wrap break-words grow">
        {content}
      </span>
    </div>
  );
}
