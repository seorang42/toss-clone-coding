import { useEffect, useRef, useState } from "react";

export default function ProgressNoAnimation({ counter }: { counter: number }) {
  const [circumference, setCircumference] = useState(2 * Math.PI * 240 * 0.335);

  const [viewBox, setViewBox] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setViewBox(240);
        setCircumference(2 * Math.PI * 240 * 0.335);
      } else {
        setViewBox(150);
        setCircumference(2 * Math.PI * 150 * 0.335);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${
        counter === 1 ? "block" : "hidden"
      } absolute -z-10 max-sm:w-[375px] w-[600px] max-sm:h-[585.12px] h-[936.2px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      {/* Percent Text */}
      <div className="flex items-center absolute top-[41.6%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white text-toss-blue-1 overflow-hidden max-sm:scale-[0.625]">
        <span className="percent-number">
          <span>9</span>
        </span>
        <span className="percent-number">
          <span>9</span>
        </span>
        <span className="w-[22px] h-6 text-[25px] font-bold flex justify-center items-center">
          %
        </span>
      </div>

      {/* Progress Bar */}
      <svg
        className="absolute left-[50.1%] -translate-x-1/2 top-[27.51%] aspect-square"
        width={viewBox}
        viewBox={`0 0 ${viewBox} ${viewBox}`}
      >
        <defs>
          <linearGradient id="gradient" x1="50%" y1="0%" x2="100%" y2="40%">
            <stop offset="0%" stopColor="#4980EE" />
            <stop offset="100%" stopColor="#D7E3FB" />
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r="33.5%"
          stroke="url(#gradient)"
          strokeWidth="8.9%"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - 74 / 100)}
          style={{
            transform: "rotate(137deg)",
            transformOrigin: `${viewBox / 2}px ${viewBox / 2}px`,
          }}
        />
      </svg>
    </div>
  );
}
