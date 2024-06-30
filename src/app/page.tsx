"use client";

import MainBanner from "@/components/MainBanner";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4";
import { useEffect } from "react";

export default function Home() {
  const scrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };
  scrollToTop();

  return (
    <div className="flex flex-col w-screen items-center">
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
