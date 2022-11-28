import React from "react";
import { usePopup } from "../contexts/popupContext";

const Fanpage = () => {
  const { setShowFanpage } = usePopup();
  return (
    <section className="fanpage bg-[url('../public/images/yellow-bg.png')] bg-center bg-no-repeat bg-cover md:pt-[80px] pt-[40px] pb-[40px] md:pb-[105px]">
      <div className="relative flex flex-col items-start md:flex-row page-container">
        <div className="flex flex-col flex-wrap flex-1">
          <h2 className="font-bold text-[40px] md:text-[80px] text-white leading-[1]">
            GÓI CHĂM SÓC
          </h2>
          <h3 className="font-extrabold text-[60px] md:text-[128px] underline leading-[0.7] mb-[45px]">
            FANPAGE
          </h3>
          <div className="">
            <p>
              Theo thống kê số liệu từ khảo sát do Facebook thực hiện trên người
              dùng ở các lứa tuổi vào mùa Tết năm 2021 thì:{" "}
            </p>
            <ul className="fanpage-list">
              <li className="fanpage-item">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                8/10 người nói rằng quyết định mua hàng của họ chịu ảnh hưởng từ
                Facebook.
              </li>
              <li className="fanpage-item">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                Có ý định, tìm hiểu mua trước Tết khoảng 1 tháng. 52% mua 2 tuần
                trước Tết.
              </li>
              <li className="fanpage-item">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                60% sẽ sử dụng Facebook nhiều hơn mùa Tết.
              </li>
              <li className="fanpage-item">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                75% mua hàng online vì thuận tiện hơn ra cửa hàng.
              </li>
              <li className="fanpage-item">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                79% mọi người cho biết họ muốn thử brand mới/ chưa từng thử bao
                giờ trong mùa Tết.
              </li>
            </ul>
            <p>
              Người trẻ thích những sản phẩm tạo cảm hứng, người già thích những
              sản phẩm dùng tiếng Việt.
            </p>
            <p>
              Do đó, đây là thời điểm Vàng để Doanh nghiệp gia tăng tương tác
              với khách hàng.{" "}
              <span className="font-extrabold">"Tết chơi Hết mình"</span>,
              Fanpage đã có
            </p>
            <div className="inline-flex w-full items-center justify-center max-w-[620px] h-[84px] border border-black font-bold text-[20px] md:text-[28px] mb-[25px] mt-[30px] flex-wrap">
              GIÁ DỊCH VỤ:{" "}
              <span className="text-[28px] md:text-[32px] ml-[10px]">
                Từ 5,899,000VNĐ/
                <span className="text-[20px] md:text-[24px]">Khách</span>
              </span>
            </div>
            <div></div>
            <div className="w-[278px] relative z-10 inline-block">
              <button
                className="relative z-[2] w-[250px] h-[50px] bg-white inline-flex items-center justify-center  text-black font-bold gap-x-[14px] group"
                onClick={() => setShowFanpage(true)}
              >
                TÌM HIỂU THÊM
                <span className="group-hover:translate-x-[10px] transition-all">
                  <img srcSet="/icons/arrow-icon.png 2x" alt="" />
                </span>
              </button>
              <img
                className="absolute z-[1] bottom-[-17px] right-[5px] w-[278px]"
                srcSet="/images/black-line.png 2x"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 md:w-[40%] relative mt-[30px] md:mt-0">
          <img className="block md:hidden" src="/images/fanpage-1.png" alt="" />
        </div>
        <img
          className="absolute top-0 right-0 w-[700px] md:block hidden"
          src="/images/fanpage-1.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Fanpage;
