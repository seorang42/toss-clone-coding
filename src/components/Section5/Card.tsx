import { Variants, motion } from "framer-motion";
import Image from "next/image";

interface ICard {
  img: string;
  title: string;
  content: string;
  variants: Variants;
}

export default function Card({ img, title, content, variants }: ICard) {
  return (
    <div className="flex flex-col basis-[calc(50%-30px)] max-w-[calc(50%-30px)] max-sm:basis-[calc(100%-20px)] max-sm:max-w-[calc(100%-20px)] h-[400px] max-sm:h-[220px] mr-[30px] mb-[30px] max-sm:mr-5 max-sm:mb-5">
      <motion.div
        variants={variants}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <Image
          className="w-[120px] max-sm:w-[80px] h-auto mb-[30px] max-sm:mb-[22px]"
          width={0}
          height={0}
          sizes="100vw"
          src={img}
          alt="cardImg"
        />
      </motion.div>
      <span className="font-semibold text-[28px] max-sm:text-2xl text-toss-gray-800">
        {title}
      </span>
      <span className="mt-[10px] text-[22px] max-sm:text-[15px] text-toss-gray-600 font-medium break-words leading-normal">
        {content}
      </span>
    </div>
  );
}
