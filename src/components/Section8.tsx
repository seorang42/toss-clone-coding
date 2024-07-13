export default function Section8() {
  return (
    <div className="w-full flex flex-col items-center pb-[250px]">
      <div className="w-full max-w-[1140px] flex justify-center">
        <div className="w-[92%] flex flex-col">
          <div className="w-full mt-[80px] flex flex-col">
            <span className="whitespace-pre-wrap text-6xl font-semibold leading-[1.4]">
              {"토스로\n나에게 딱 맞게"}
            </span>
            <img
              className="mt-[140px] w-full max-w-[740px] self-center"
              src="https://static.toss.im/assets/homepage/newtossim/section2_1_document.jpg"
            />
            <div className="w-full flex flex-col gap-6 mt-[60px] whitespace-pre-wrap break-keep">
              <span className="flex gap-3 text-[40px] font-semibold">
                <span>내 문서함</span>
                <span className="text-gray-400">
                  공공문서 확인부터 납부까지 한 번에
                </span>
              </span>
              <span className="text-[20px] font-medium leading-normal">
                {
                  "건강검진, 국가장학금 신청, 교통범칙금·과태료 납부.\n그동안 종이로 받았던 문서들 꼼꼼히 챙기느라 고생했어요.\n앞으로는 토스 내 문서함에서 간단히 받아보고 납부할 수 있어요."
                }
              </span>
            </div>
          </div>
          <div className="mt-[210px] w-full flex flex-col">
            <div className="w-full flex gap-10">
              <div
                className="flex flex-col gap-10"
                style={{ width: "calc((100% - 40px) / 3 * 2)" }}
              >
                <img
                  className="w-full"
                  src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_01.jpg"
                />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-[40px] font-semibold">보험</span>
                  <span className="text-[40px] font-semibold text-gray-400 leading-[1.3] break-keep whitespace-pre-wrap">
                    {"조회부터 상담,\n병원비 돌려받기를 간편하게"}
                  </span>
                </div>
              </div>
              <div
                className="flex flex-col gap-[35px] whitespace-pre-wrap mt-[122px]"
                style={{ width: "calc((100% - 40px) / 3)" }}
              >
                <img src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_02.jpg" />
                <span className="text-[20px] leading-normal font-medium">
                  {
                    "또래보다 보험료는 적절하게 내고 있는지, 낸 만큼 보장받고 있는지 확인해 보세요.\n전문가와의 상담을 통해 내게 딱 맞는 보험을 추천 받고, 병원비를 간편하게 청구할 수 있어요."
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[220px] w-full flex flex-col gap-[50px]">
            <img src="https://static.toss.im/assets/homepage/newtossim/section2_3_apt_01.jpg" />
            <div className="flex whitespace-pre-wrap break-keep">
              <div className="w-full flex flex-col grow">
                <span className="text-[40px] font-semibold">
                  내 부동산 · 자동차
                </span>
                <span className="text-[40px] font-semibold text-gray-400">
                  정기적으로 관리해보세요
                </span>
              </div>
              <span className="w-full grow text-[20px] font-medium">
                {
                  "집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는 것.\n시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과 자동차 관리도 토스에서 시작해 보세요."
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
