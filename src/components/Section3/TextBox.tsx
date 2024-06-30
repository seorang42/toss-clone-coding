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
      className="w-full flex flex-col grow pl-[38px]"
    >
      <div className="flex gap-1 items-center">
        <div className="relative w-6 h-6">{icon}</div>
        <h2 className="text-toss-blue text-xl">{iconText}</h2>
      </div>
      <h2 className="mt-[10px] whitespace-pre-wrap text-[40px] font-semibold leading-normal break-keep">
        {title}
      </h2>
      <h3 className="mt-[20px] whitespace-pre-wrap text-[22px] text-gray-500 font-medium break-keep">
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
      className="mt-20 flex items-center gap-[60px]"
      style={{ width: "calc(100% + 30px)" }}
    >
      {!reversed ? TextContainer() : ImgContainer()}
      {!reversed ? ImgContainer() : TextContainer()}
    </div>
  );
}
