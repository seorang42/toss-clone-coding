interface ITitleBox {
  category: string;
  content: string;
}

export default function TitleBox({ category, content }: ITitleBox) {
  return (
    <>
      <h2 className="text-toss-blue font-semibold text-[28px] tracking-wider max-sm:text-[18px]">
        {category}
      </h2>
      <h2 className="text-[50px] font-semibold leading-[1.4] max-sm:text-[28px]">
        {content}
      </h2>
    </>
  );
}
