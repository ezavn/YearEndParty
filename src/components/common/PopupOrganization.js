import React, { useRef } from "react";
import { usePopup } from "../../contexts/popupContext";

const PopupOrganization = () => {
  const { showOrganization, setShowOrganization } = usePopup();
  return (
    <>
      {showOrganization ? (
        <div className="fixed bg-[rgba(0,0,0,0.5)] inset-0 z-[999] flex items-center justify-center">
          <div className="relative w-[300px] md:w-[550px] md:h-[580px] bg-black text-white flex flex-col mt-[30px]">
            <img
              className="w-[40px] h-[40px] top-[-40px] right-[-40px] md:w-auto md:h-auto absolute md:top-[-85px] md:right-[-80px] cursor-pointer"
              src="/images/btn-close.png"
              alt=""
              onClick={() => setShowOrganization(false)}
            />
            <div className="pl-[20px] md:pl-[40px] pr-[15px] md:pr-[30px] pt-[30px] pb-[30px] md:pb-[50px] flex-1">
              <h3 className="text-[20px] font-medium leading-[1.2] border-b-[4px] border-white pb-[10px] mb-[20px]">
                <span className="text-[24px] md:text-[36px] text-yellow uppercase">
                  Gói Tổ chức Year End Party
                </span>{" "}
                <br /> của WOW Multimedia
              </h3>
              <p className="text-justify">
                Khách hàng có thể tùy ý lựa chọn khu vực tiệc trong nhà hoặc
                ngoài trời và trang trí decor không gian tiệc theo yêu cầu.{" "}
                <br /> *Đặc quyền của Khách hàng:
              </p>
              <ul className="popup-check text-[14px] md:text-[20px]">
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Tặng gói chụp hình moment chuyên nghiệp trong 02 tiếng.
                </li>
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Trả 100 file hình đã được chỉnh sửa.
                </li>
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Tặng Video khoảnh khắc Year End Party
                </li>
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Tặng kèm gói chăm sóc Fanpage trị giá 5.000.000/1 tháng WOW
                  Multimedia sẽ định hướng ý tưởng và xây dựng kịch bản để phù
                  hợp nhất với bản sắc của Doanh nghiệp.
                </li>
              </ul>
            </div>
            <a
              href="#register-form"
              className="flex bg-black flex-shrink-0 h-[60px] flex-col"
              onClick={() => setShowOrganization(false)}
            >
              <div className="flex items-center justify-center flex-1 bg-yellow gap-x-[10px]">
                <span className="font-medium text-black">LIÊN HỆ NGAY</span>
                <span>
                  <img srcSet="/icons/arrow-icon.png 2x" alt="" />
                </span>
              </div>
              <div>
                <img src="/images/popup-line.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PopupOrganization;
