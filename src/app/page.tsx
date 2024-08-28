"use client";

import Footer from "@/components/Footer";
import MainBanner from "@/components/MainBanner";
import Section1 from "@/components/Section1";
import Section10 from "@/components/Section10/Section10";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";
import Section5 from "@/components/Section5/Section5";
import Section6 from "@/components/Section6/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8/Section8";
import Section9 from "@/components/Section9/Section9";
import TopBar from "@/components/TopBar/TopBar";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 페이지가 새로고침 될 때 이전에 위치하던 곳의 애니메이션 자동재생 방지
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div ref={ref} className="flex flex-col w-screen items-center">
      <TopBar />
      <MainBanner />
      {isLoaded && (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Footer />
        </>
      )}
    </div>
  );
}
