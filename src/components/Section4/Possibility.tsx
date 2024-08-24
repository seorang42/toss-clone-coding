import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Possibility({ progress }: { progress: number }) {
  const [circumference, setCircumference] = useState(0);

  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState(0);
  useEffect(() => {
    if (svgRef.current !== null) {
      setViewBox(svgRef.current.clientWidth);
    }
  }, [svgRef]);

  const circleRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (circleRef.current !== null) {
      const radius = circleRef.current.r.baseVal.value;
      setCircumference(2 * Math.PI * radius);
    }
  }, [circleRef]);

  return (
    <svg
      ref={svgRef}
      className="absolute left-[50.1%] -translate-x-1/2 top-[27.51%] aspect-square"
      width="40%"
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
      <defs>
        <linearGradient id="gradient" x1="50%" y1="0%" x2="100%" y2="40%">
          <stop offset="0%" stopColor="#4980EE" />
          <stop offset="100%" stopColor="#D7E3FB" />
        </linearGradient>
      </defs>
      <motion.circle
        key={viewBox}
        ref={circleRef}
        cx="50%"
        cy="50%"
        r="33.5%"
        stroke="url(#gradient)"
        strokeWidth="8.9%"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress / 100)}
        initial={{ strokeDashoffset: circumference }}
        animate={{
          strokeDashoffset: circumference * (1 - progress / 100),
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          transform: "rotate(137deg)",
          transformOrigin: `${viewBox / 2}px ${viewBox / 2}px`,
        }}
      />
    </svg>
  );
}
