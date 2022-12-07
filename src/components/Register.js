import React from "react";
import FormRegister from "./FormRegister";

const Register = () => {
  return (
    <section
      id="contact"
      className="register bg-[url('../public/images/register-dark.png')] py-[40px] md:py-[50px] bg-center bg-no-repeat bg-cover"
    >
      <div className="page-container md:mx-[60px]">
        <h2 className="text-[32px] md:text-[64px] text-white mb-[20px] leading-[1] text-center">
          Tết{" "}
          <span className="text-[40px] md:text-[76px] leading-[1] font-extrabold text-yellow">
            KẾT NỐI - ẤN TƯỢNG - KHỞI SẮC
          </span>
        </h2>
        <div className="max-w-[800px] max-h-[30px] mx-auto mb-0 md:mb-[20px]">
          <img
            className="object-cover w-full h-full"
            src="/images/line-h.png"
            alt=""
          />
        </div>
        <h3 className="text-[42px] md:text-[48px] uppercase text-white text-center">
          Liên hệ ngay
        </h3>
        <p className="text-white md:mb-[15px] text-center">
          Để được tư vấn chi tiết về Gói dịch vụ Tết 2023!
        </p>
        <div id="register-form">
          {/* <p className="text-center text-[18px] md:text-[20px] uppercase text-white">
            ANH/CHỊ HÃY ĐỂ LẠI THÔNG TIN WOW SẼ TƯ VẤN NHANH CHÓNG NHẤT
          </p> */}
          <FormRegister></FormRegister>
        </div>
      </div>
    </section>
  );
};

export default Register;
