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
      className="w-full sm:max-w-[calc(50%-30px)] flex flex-col pl-[38px]"
    >
      <div className="flex gap-1 items-center w-fit">
        <div className="relative w-6 h-6 max-sm:w-4 max-sm:h-4">{icon}</div>
        <h2 className="text-toss-blue text-xl max-sm:text-[15px]">
          {iconText}
        </h2>
      </div>
      <h2 className="w-fit mt-[10px] text-[40px] max-sm:text-2xl font-semibold text-gray-700 leading-snug">
        {title}
      </h2>
      <h3 className="w-fit mt-[20px] text-[22px] max-sm:text-[15px] text-gray-500 font-medium">
        {subText}
      </h3>
    </motion.div>
  );

  const ImgContainer = () => (
    <motion.div
      variants={variants}
      transition={{ delay: 0.75, type: "tween", duration: 0.5 }}
      className="w-full flex grow"
    >
      <img className="w-full h-fit" src={img} />
    </motion.div>
  );
  return (
    <div
      className={`w-full mt-20 flex ${
        !reversed ? "max-sm:flex-col" : "max-sm:flex-col-reverse"
      } items-center sm:gap-[60px] max-sm:mt-[60px]`}
    >
      {!reversed ? TextContainer() : ImgContainer()}
      {!reversed ? ImgContainer() : TextContainer()}
    </div>
  );
}
