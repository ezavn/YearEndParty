import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header className="header absolute top-0 left-0 right-0 flex items-center py-[18px] md:py-[25px] px-[15px] md:px-[35px] bg-black md:bg-transparent">
        <div>
          <a href="/">
            <img srcSet="/images/logo.png 2x" alt="" />
          </a>
        </div>
        <div className="items-center ml-auto gap-x-[50px] hidden md:flex">
          <div className="flex items-center gap-x-[50px]">
            <a
              className="text-[#fff] font-bold opacity-70 transition-all duration-300 hover:opacity-100 hover:text-yellow"
              href="#services"
            >
              GÓI DỊCH VỤ
            </a>
            <a
              className="text-[#fff] font-bold opacity-70 transition-all duration-300 hover:opacity-100 hover:text-yellow"
              href="#contact"
            >
              LIÊN HỆ
            </a>
          </div>
          <div className="relative z-10">
            <a
              className="relative z-[2] w-[250px] h-[50px] bg-white inline-flex items-center justify-center"
              href="tel:0909 123 456"
            >
              HOT LINE :{" "}
              <span className="text-[18px] md:text-[24px] font-bold ml-[3px]">
                0909 123 456
              </span>
            </a>
            <img
              className="absolute z-[1] bottom-[-17px] right-[-20px]"
              srcSet="/images/yellow-line.png 2x"
              alt=""
            />
          </div>
        </div>
        <div className="block ml-auto md:hidden">
          <img
            onClick={() => setShowNav(!showNav)}
            src="/icons/hamburger.png"
            alt=""
          />
        </div>
      </header>
      {showNav ? (
        <div className="bg-black h-[100vh] absolute right-0 left-0 mt-[107px] items-center ml-auto gap-x-[50px] flex md:hidden flex-col py-[50px]">
          <div className="flex items-center gap-[50px] flex-col">
            <a
              className="text-[#fff] font-bold opacity-70 transition-all duration-300 hover:opacity-100 hover:text-yellow"
              href="#services"
              onClick={() => setShowNav(false)}
            >
              GÓI DỊCH VỤ
            </a>
            <a
              className="text-[#fff] font-bold opacity-70 transition-all duration-300 hover:opacity-100 hover:text-yellow"
              href="#contact"
              onClick={() => setShowNav(false)}
            >
              LIÊN HỆ
            </a>
          </div>
          <div className="relative z-10 mt-[50px]">
            <a
              className="relative z-[2] w-[250px] h-[50px] bg-white inline-flex items-center justify-center"
              href="tel:0909 123 456"
              onClick={() => setShowNav(false)}
            >
              HOT LINE :{" "}
              <span className="text-[18px] md:text-[24px] font-bold ml-[3px]">
                0909 123 456
              </span>
            </a>
            <img
              className="absolute z-[1] bottom-[-17px] right-[-20px]"
              srcSet="/images/yellow-line.png 2x"
              alt=""
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
