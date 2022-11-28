import React from "react";
import Slider from "react-slick";

const Client = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img srcSet={`/images/client-m${i + 1}.png 2x`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ClientNext />,
    prevArrow: <ClientPrev />,
    fade: true,
  };
  return (
    <section className="client py-[50px] bg-black px-[15px] md:px-0">
      <h2 className="text-[24px] md:text-[48px] text-white uppercase text-center leading-[1.1] mb-[50px]">
        CÁC{" "}
        <span className="text-[48px] md:text-[76px] text-yellow">
          FANPAGE CỦA KHÁCH HÀNG
        </span>{" "}
        <br /> WOW MULTIMEDIA CHĂM SÓC
      </h2>
      <div className="client-slide">
        <Slider {...settings}>
          <div className="client-item">
            <div className="content">
              <img src="/images/client-l1.png" />
              <div className="block">
                <div className="name">
                  <p>TND INTERIOR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="client-item">
            <div className="content">
              <img src="/images/client-l2.png" />
              <div className="block">
                <div className="name">
                  <p>FRANCHISE SUCCESS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="client-item">
            <div className="content">
              <img src="/images/client-l3.png" />
              <div className="block">
                <div className="name">
                  <p>LÚA SPA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="client-item">
            <div className="content">
              <img src="/images/client-l4.png" />
              <div className="block">
                <div className="name">
                  <p>BNI HCM6</p>
                </div>
              </div>
            </div>
          </div>
          <div className="client-item">
            <div className="content">
              <img src="/images/client-l5.png" />
              <div className="block">
                <div className="name">
                  <p>SOU SEOUL</p>
                </div>
              </div>
            </div>
          </div>
          <div className="client-item">
            <div className="content">
              <img src="/images/client-l6.png" />
              <div className="block">
                <div className="name">
                  <p>GENTING DREAM</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

function ClientNext(props) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute justify-between bottom-[130px] md:right-[520px] right-[50px] flex items-center w-[100px] md:w-[160px] z-10">
      <span className="text-[14px] md:text-[20px] font-bold">TIẾP THEO</span>
      <div
        className={`client-next ${className}`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
      <img
        className="md:w-auto w-[30px]"
        srcSet="/icons/arrow-icon.png 2x"
        alt=""
      />
    </div>
  );
}

function ClientPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute justify-between bottom-[130px] md:left-[220px] left-[5px] flex items-center w-[100px] md:w-[160px] z-10">
      <img
        className="md:w-auto w-[30px] rotate-180"
        srcSet="/icons/arrow-icon.png 2x"
        alt=""
      />
      <span className="text-[14px] md:text-[20px] font-bold">VỀ TRƯỚC</span>
      <div
        className={`client-prev ${className}`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
    </div>
  );
}

export default Client;
