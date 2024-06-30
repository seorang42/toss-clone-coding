interface ITitleBox {
  category: string;
  content: string;
}

export default function TitleBox({ category, content }: ITitleBox) {
  return (
    <>
      <h2 className="text-toss-blue font-semibold text-[28px]">{category}</h2>
      <h2 className="whitespace-pre-wrap text-5xl font-semibold leading-normal">
        {content}
      </h2>
    </>
  );
}
