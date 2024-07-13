import { useScroll } from "framer-motion";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

export default function Section8() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1140px] flex justify-center">
        <div className="w-[92%] flex flex-col">
          <Part1 />
          <Part2 />
          <Part3 />
        </div>
      </div>
    </div>
  );
}
