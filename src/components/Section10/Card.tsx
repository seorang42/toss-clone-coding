import { useRouter } from "next/navigation";

interface ICard {
  title: string;
  content: string;
  btnText: string;
  link: string;
}

export default function Card({ title, content, btnText, link }: ICard) {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col max-w-[300px] max-lg:mb-[80px] max-sm:mb-0">
      <span className="text-[30px] text-white font-semibold mb-3">{title}</span>
      <span className="text-gray-400 text-[20px] leading-[1.6] font-medium whitespace-pre-wrap break-keep mb-[38px]">
        {content}
      </span>
      <button
        className="bg-blue-500 text-white w-fit px-4 py-[9px] rounded-lg text-[15px] font-medium"
        onClick={() => router.push(link)}
      >
        {btnText}
      </button>
    </div>
  );
}
