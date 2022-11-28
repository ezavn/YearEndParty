import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="h-[14px] md:h-auto"
        src="/images/footer-line.png"
        alt=""
      />
      <div className="page-container pt-[40px] gap-[20px] md:gap-0 pb-[50px] flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1">
          <img srcSet="/images/logo-footer.png 2x" alt="" />
        </div>
        <div className="text-center font-medium text-[20px] flex-1">
          <p>Địa chỉ: 87-89 Hồ Bá Kiện, Phường 15, Quận 10, HCM</p>
          <p>Email: info@wowmultimedia.vn</p>
          <p>Hotline: 0386 817 399</p>
          <p>Website: wowmultimedia.vn</p>
        </div>
        <div className="flex gap-x-[20px] flex-1 items-center justify-end">
          <a href="/">
            <img srcSet="/icons/facebook-icon.png 2x" alt="" />
          </a>
          <a href="/">
            <img srcSet="/icons/tiktok-icon.png 2x" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
