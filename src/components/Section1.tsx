export default function Section1() {
  return (
    <section className="w-full bg-gray-50 py-[200px] max-sm:py-[100px]">
      <h2 className="font-semibold text-[32px] max-sm:text-[22px] mb-[50px] max-sm:mb-[30px] text-center leading-[1.6] max-sm:leading-[1.5] max-sm:font-medium">
        <span className="max-sm:hidden">
          {
            "내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던 쉽고 편리한 금융 서비스,\n토스와 함께라면 당신의 일상이 새로워질 거예요."
          }
        </span>
        <span className="sm:hidden">
          {
            "내 모든 금융 내역을 한눈에\n조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던\n쉽고 편리한 금융 서비스,\n토스와 함께라면\n당신의 일상이 새로워질 거예요."
          }
        </span>
      </h2>
    </section>
  );
}
