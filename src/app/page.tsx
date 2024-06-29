"use client";

import MainBanner from "@/components/MainBanner";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center">
      <MainBanner />
      <Section1 />
      <Section2 />
    </div>
  );
}
