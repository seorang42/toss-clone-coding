"use client";

import MainBanner from "@/components/MainBanner";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";
import Section5 from "@/components/Section5/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8/Section8";
import TopBar from "@/components/TopBar";
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
      <TopBar />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}
