import { motion } from "framer-motion";

export default function Section7() {
  return (
    <div
      className="w-full h-[800px] bg-no-repeat flex justify-center items-center relative"
      style={{
        backgroundImage:
          "url(https://static.toss.im/assets/homepage/newtossim/section2_4_big.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="text-[100px] font-bold text-white">
        꼭 필요했던 금융
      </span>
      <motion.div
        style={{ width: "calc((100vw - 1024px) / 2)" }}
        className="h-full bg-white absolute top-0 left-0"
      />
      <motion.div
        style={{ width: "calc((100vw - 1024px) / 2)" }}
        className="h-full bg-white absolute top-0 right-0"
      />
    </div>
  );
}
