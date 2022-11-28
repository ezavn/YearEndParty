import React from "react";
import Slider from "react-slick";

const RealLife = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: <RealtimeNext />,
    prevArrow: <RealtimePrev />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <section className="bg-[url('../public/images/yellow-bg.png')] bg-center bg-no-repeat bg-cover pb-[150px] pt-[50px] overflow-x-hidden">
      <h2 className="text-center text-[30px] md:text-[48px] text-white leading-[1.1] mb-[40px]">
        <span className="text-[52px] md:text-[76px] font-extrabold text-black uppercase">
          Hình ảnh thực tế
        </span>{" "}
        <br />
        các sự kiện WOW tổ chức
      </h2>
      <div className="realtime-slide">
        <Slider {...settings}>
          <div>
            <div className="realtime-item">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt=""
              />
              <div className="realtime-content">
                <h4 className="title">Sự kiện</h4>
                <p className="desc">GALA DINNER</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="realtime-item">
              <img
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="realtime-content">
                <h4 className="title">Sự kiện</h4>
                <p className="desc">GALA DINNER</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="realtime-item">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="realtime-content">
                <h4 className="title">Sự kiện</h4>
                <p className="desc">GALA DINNER</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="realtime-item">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="realtime-content">
                <h4 className="title">Sự kiện</h4>
                <p className="desc">GALA DINNER</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="realtime-item">
              <img
                src="https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="realtime-content">
                <h4 className="title">Sự kiện</h4>
                <p className="desc">GALA DINNER</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="realtime-item">
              <img
                src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="realtime-content">
                <h4 className="title">Sự kiện</h4>
                <p className="desc">GALA DINNER</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

function RealtimeNext(props) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute justify-between bottom-[-105px] right-[30px] flex items-center w-[120px] md:w-[160px]">
      <span className="text-[16px] md:text-[20px] font-bold">TIẾP THEO</span>
      <img
        className="md:w-auto w-[40px]"
        srcSet="/icons/arrow-icon.png 2x"
        alt=""
      />
      <div
        className={`realtime-next ${className}`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
    </div>
  );
}

function RealtimePrev(props) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute justify-between bottom-[-105px] left-[30px] flex items-center w-[120px] md:w-[160px]">
      <img
        className="rotate-180 md:w-auto w-[40px]"
        srcSet="/icons/arrow-icon.png 2x"
        alt=""
      />
      <span className="text-[16px] md:text-[20px] font-bold">VỀ TRƯỚC</span>
      <div
        className={`realtime-prev ${className}`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
    </div>
  );
}

export default RealLife;
