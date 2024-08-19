import TitleBox from "../TitleBox";

export default function Section9() {
  return (
    <div className="w-full flex flex-col items-center py-[250px] max-sm:py-[100px] bg-gray-50 -z-20 overflow-hidden">
      <div className="w-full max-w-[1140px] flex justify-center">
        <div className="responsive-width">
          <div className="w-full sm:h-[1272px] flex flex-col relative">
            <section className="flex flex-col gap-[20px] max-sm:gap-[10px]">
              <TitleBox
                category="결제"
                content={"결제는 간편하게,\n할인과 적립은 두둑히"}
              />
            </section>
            <span className="max-sm:hidden mt-[71px] text-[23px] font-medium text-gray-600">
              {
                "온라인과 오프라인 모두\n국내는 물론, 해외에서도\n토스로 간편하게 결제해요."
              }
            </span>
            <span className="max-sm:hidden absolute w-[480px] text-[23px] font-medium text-gray-600 bottom-[280px] left-[640px]">
              {
                "결제할 땐, 혜택이 빠질 수 없죠.\n쿠폰과 포인트 써서 할인 받고\n토스프라임 적립까지 또 받아요."
              }
            </span>
            <section className="w-[600px] max-sm:w-full max-sm:max-w-[375px] max-sm:self-center h-auto absolute max-sm:relative sm:bottom-0 sm:-left-[124px] -z-10">
              <div className="img-container">
                <img
                  className="img"
                  src="https://static.toss.im/assets/homepage/newtossim/chekout_screen_01.png"
                />
              </div>
              <img
                className="img"
                src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
              />
            </section>
            <span className="sm:hidden text-center text-[17px] font-medium text-gray-600 mb-8">
              {
                "온라인과 오프라인 모두 국내는 물론,\n해외에서도 토스로 간편하게 결제해요."
              }
            </span>
            <section className="w-[600px] max-sm:w-full max-sm:max-w-[375px] max-sm:self-center h-auto absolute max-sm:relative sm:-top-[70px] sm:-right-[70px] -z-10">
              <div className="img-container">
                <img
                  className="img"
                  src="https://static.toss.im/assets/homepage/newtossim/chekout_screen_02.png"
                />
              </div>
              <img
                className="img"
                src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
              />
            </section>
            <span className="sm:hidden text-center text-[17px] font-medium text-gray-600 mb-8">
              {
                "결제할 땐, 혜택이 빠질 수 없죠. 쿠폰과 포인트\n써서 할인 받고 토스프라임 적립까지 또 받아요."
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
