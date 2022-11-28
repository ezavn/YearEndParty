import React from "react";
import { usePopup } from "../../contexts/popupContext";

const PopupFanpage = () => {
  const { showFanpage, setShowFanpage } = usePopup();
  return (
    <>
      {showFanpage ? (
        <div className="fixed bg-[rgba(0,0,0,0.5)] inset-0 z-[999] flex items-center justify-center">
          <div className="relative w-[300px] md:w-[550px] bg-black text-white flex flex-col mt-[65px]">
            <img
              className="w-[40px] h-[40px] top-[-40px] right-[-40px] md:w-auto md:h-auto absolute md:top-[-85px] md:right-[-80px] cursor-pointer"
              src="/images/btn-close.png"
              alt=""
              onClick={() => setShowFanpage(false)}
            />
            <div className="pl-[20px] md:pl-[40px] pr-[15px] md:pr-[30px] pt-[30px] pb-[15px] md:pb-[30px] flex-1">
              <h3 className="text-[20px] font-medium leading-[1.2] border-b-[4px] border-white pb-[10px] mb-[20px]">
                <span className="text-[24px] md:text-[36px] text-yellow uppercase">
                  Gói Chăm sóc Fanpage
                </span>{" "}
                <br /> của WOW Multimedia
              </h3>
              <p className="md:text-[20px] text-[14px]">
                - Hợp đồng tối thiểu 03 tháng.{" "}
              </p>
              <p className="md:text-[20px] text-[14px]">
                - Bảng giá áp dụng cho những ngành nghề phổ thông: du lịch, mỹ
                phẩm, thời trang...
              </p>
              <p className="md:text-[20px] text-[14px]">
                - Đối với những ngành có chuyên môn cao cần kiến thức chuyên sâu
                trong bài viết sẽ có tính giá riêng, ví dụ: y khoa, kỹ thuật
                chuyên ngành... Xin vui lòng liên hệ.
              </p>
              <p className="font-medium uppercase text-yellow py-[10px]">
                Đặc quyền của Khách hàng
              </p>
              <ul className="popup-check md:text-[20px] text-[14px]">
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Bảng KẾ HOẠCH chủ đề chi tiết và TIMELINE cho bài đăng.
                </li>
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Đa dạng bài viết bao gồm: Bài viết tương tác, Bài viết sản
                  phẩm, Bài viết quảng cáo.
                </li>
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Hỗ trợ thiết kế hình ảnh.
                </li>
                <li>
                  <span>
                    <img srcSet="/icons/check-icon2.png 2x" alt="" />
                  </span>
                  Hỗ trợ đăng bài viết lên Fanpage.
                </li>
              </ul>
            </div>
            <a
              href="#register-form"
              className="flex bg-black flex-shrink-0 h-[60px] flex-col"
              onClick={() => setShowFanpage(false)}
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

export default PopupFanpage;
