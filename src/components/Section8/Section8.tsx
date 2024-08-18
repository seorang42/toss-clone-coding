import { useScroll } from "framer-motion";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

export default function Section8() {
  return (
    <div className="w-full flex flex-col items-center py-[250px] max-sm:py-[100px]">
      <div className="w-full max-w-[1140px] flex justify-center">
        <div className="responsive-width flex flex-col gap-[210px] max-sm:gap-[100px]">
          <Part1 />
          <Part2 />
          <Part3 />
        </div>
      </div>
    </div>
  );
}
