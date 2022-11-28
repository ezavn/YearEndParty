import React from "react";
import { usePopup } from "../contexts/popupContext";

const Organization = () => {
  const { setShowOrganization, setShowVideo } = usePopup();
  return (
    <section
      id="services"
      className="relative organization bg-[url('../public/images/or-mb.png')] md:bg-[url('../public/images/organization.png')] md:bg-center bg-no-repeat bg-cover md:h-[1000px] pt-[60px] overflow-hidden"
    >
      <div className="page-container mb-[40px] md:mb-0">
        <div>
          <h2 className="font-bold text-[40px] md:text-[80px] text-white leading-[1] mb-[15px] md:mb-0">
            GÓI TỔ CHỨC
          </h2>
          <p className="mb-[30px] md:mb-0 text-style text-yellow text-[55px] md:text-[170px] lowercase leading-[0.7] ml-[60px]">
            YEAR END PARTY
          </p>
          <div className="ml-[75px] md:ml-[125px] px-[25px] h-[64px] bg-yellow inline-flex items-center text-[18px] md:text-[30px] font-light">
            Gắn kết cùng vươn xa
          </div>
        </div>
      </div>
      <div className="bg-black md:h-[555px] md:left-[130px] md:absolute md:bottom-0 md:right-0 z-10 py-[50px] md:px-[80px]">
        <div className="hidden md:block line-h absolute top-[-38px] left-[-44px] w-[calc(100% + 20px)]">
          <img srcSet="/images/line-h.png 2x" className="h-[30px]" alt="" />
        </div>
        <div className="hidden md:block line-v absolute top-[-11px] left-[-44px]">
          <img srcSet="/images/line-v.png 2x" className="w-[30px]" alt="" />
        </div>
        <div className="flex gap-x-[50px] items-start flex-col-reverse md:flex-row mx-[15px] md:mx-0">
          <div className="flex-1 text-white">
            <p className="text-justify mb-[30px] md:mb-[80px]">
              Các đại lý, đối tác, nhân viên là "
              <span className="text-yellow">cánh tay nối dài</span>" của Doanh
              nghiệp, giúp doanh nghiệp đưa sản phẩm tới tay khách hàng nhanh
              chóng hơn. Do đó, việc gắn kết mối quan hệ này là điều cần thiết
              để doanh nghiệp phát triển mạnh mẽ. Một bữa tiệc cuối năm ấn tượng
              và ý nghĩa chắc chắn sẽ là hoạt động lý tưởng, là chất keo gắn kết
              bền chặt.
            </p>
            <div className="inline-flex w-full items-center justify-center md:max-w-[620px] h-[84px] border border-yellow font-bold text-[20px] md:text-[28px] mb-[18px] flex-wrap leading-[0]">
              GIÁ DỊCH VỤ:{" "}
              <span className="text-[28px] md:text-[32px] text-yellow ml-[10px]">
                Từ 1,000,000VNĐ/
                <span className="text-[20px] md:text-[24px]">Khách</span>
              </span>
            </div>
            <p className="text-[20px] font-semibold text-yellow flex items-center gap-x-[10px] mb-[30px]">
              <span>
                <img srcSet="/icons/flower-icon.png 2x" alt="" />
              </span>
              Tặng kèm gói chăm sóc Fanpage trị giá 5.000.000/1 tháng
            </p>
            <div className="w-[278px] relative z-10 inline-block">
              <button
                className="relative z-[2] w-[250px] h-[50px] bg-white inline-flex items-center justify-center text-[20px] text-black font-bold gap-x-[14px] cursor-pointer group"
                onClick={() => setShowOrganization(true)}
              >
                TÌM HIỂU THÊM
                <span className="group-hover:translate-x-[10px] transition-all">
                  <img srcSet="/icons/arrow-icon.png 2x" alt="" />
                </span>
              </button>
              <img
                className="w-[278px] absolute z-[1] bottom-[-17px] right-[5px]"
                srcSet="/images/yellow-line.png 2x"
                alt=""
              />
            </div>
          </div>
          <div
            className="relative flex-shrink-0 md:w-[50%] md:max-w-[789px] cursor-pointer video-player mb-[30px] md:mb-0"
            onClick={() => setShowVideo(true)}
          >
            <img src="/images/video-bg.png" alt="" />
            <img
              className="z-[10] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] player"
              srcSet="/icons/play-icon.png 2x"
              alt=""
            />
            <div className="bg-[rgba(0,0,0,0.4)] absolute inset-0 background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
