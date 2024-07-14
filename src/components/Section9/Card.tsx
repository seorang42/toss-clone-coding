interface ICard {
  icon: JSX.Element;
  bgColor: string;
  title: string;
  content: string;
}

export default function Card({ icon, bgColor, title, content }: ICard) {
  return (
    <div className="w-full max-w-[350px] flex flex-col gap-[30px] mr-[200px] mb-[100px]">
      <div
        style={{ backgroundColor: bgColor }}
        className="flex justify-center items-center w-[120px] h-[120px] rounded-[26px]"
      >
        <div className="flex justify-center items-center w-[60px] h-[60px]">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <span className="text-[20px] font-medium text-gray-700">{title}</span>
        <span className="whitespace-pre-wrap text-gray-400 leading-[1.6] text-lg">
          {content}
        </span>
      </div>
    </div>
  );
}
