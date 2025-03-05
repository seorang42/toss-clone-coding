import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import RecoilProvider from "@/components/RecoilProvider";

export const metadata: Metadata = {
  title: "토스 클론 코딩",
  description: "토스 클론 코딩 연습 웹 페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed w-screen h-screen z-[99] flex flex-col gap-2 justify-center items-center text-3xl font-semibold text-gray-400 pointer-events-none">
          <span>연습용 클론 코딩 웹 페이지입니다</span>
          <span>정식 사이트가 아닙니다</span>
        </div>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
