import { motion, Variants } from "framer-motion";
import { WonIcon } from "../icons";

interface ITextBox {
  icon: JSX.Element;
  iconText: string;
  title: string;
  subText: string;
  img: string;
  reversed?: boolean;
  variants: Variants;
}

export default function TextBox({
  icon,
  iconText,
  title,
  subText,
  img,
  reversed,
  variants,
}: ITextBox) {
  const TextContainer = () => (
    <motion.div
      variants={variants}
      transition={{ delay: 0.5, type: "tween", duration: 0.5 }}
      className="sm:basis-[calc(50%-30px)] sm:max-w-[calc(50%-30px)] max-sm:basis-[calc(100%-20px)] max-sm:max-w-[calc(100%-20px)] flex flex-col pl-[38px]"
    >
      <div className="flex gap-1 items-center w-fit">
        <div className="relative w-6 h-6 max-sm:w-4 max-sm:h-4">{icon}</div>
        <h2 className="text-toss-blue-1 text-xl font-medium max-sm:text-[15px]">
          {iconText}
        </h2>
      </div>
      <h2 className="w-fit mt-[10px] max-sm:mt-2 text-[40px] max-sm:text-2xl font-semibold text-toss-gray-800 leading-snug">
        {title}
      </h2>
      <h3 className="w-fit mt-[20px] max-sm:mt-[10px] text-[22px] max-sm:text-[15px] text-toss-gray-600 font-medium">
        {subText}
      </h3>
    </motion.div>
  );

  const ImgContainer = () => (
    <motion.img
      src={img}
      variants={variants}
      transition={{ delay: 0.75, type: "tween", duration: 0.5 }}
      className="sm:basis-[calc(50%-30px)] sm:max-w-[calc(50%-30px)] max-sm:basis-[100%-20px] max-sm:w-[calc(100%-20px)] h-auto"
    />
  );
  return (
    <div
      className={`w-[calc(100%+30px)] max-sm:w-[calc(100%+20px)] mt-[150px] max-sm:mt-[60px] flex sm:items-center ${
        !reversed ? "max-sm:flex-col" : "max-sm:flex-col-reverse"
      } sm:gap-[60px]`}
    >
      {!reversed ? TextContainer() : ImgContainer()}
      {!reversed ? ImgContainer() : TextContainer()}
    </div>
  );
}
