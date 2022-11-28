import React, { useRef, useState } from "react";

const FormRegister = () => {
  const form = useRef();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const { name, phone, email, company, message } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ethannguyen/google_sheets/HVBhJJTAvwVrgdZn?tabId=Trang tính1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              new Date().toLocaleDateString(),
              name,
              phone,
              email,
              company,
              message,
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });
      setLoad(false);
      alert("Đăng ký thành công!");
    } catch (error) {
      console.log(error);
      alert("Đã có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row md:w-[1215px] mx-auto items-center">
          <div className="h-[100%] flex-shrink-0 hidden md:block">
            <img className="h-[100%]" src="/images/popup-1.png" alt="" />
          </div>
          <div className="flex-1 py-[20px] px-[10px] md:px-[20px] h-[100%] w-[100%] relative">
            <div>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-[20px]">
                  <div className="flex-1 field">
                    <div className="field-item">
                      <input
                        className="px-[17px]  bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[20px] text-white h-[64px] md:h-[88px] text-[20px] border border-blue"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Họ và Tên"
                        required
                        value={data.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field-item">
                      <input
                        className="px-[17px]  border border-blue bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[20px] text-white h-[64px] md:h-[88px] text-[20px]"
                        id="phone"
                        name="phone"
                        placeholder="Số điện thoại"
                        type="phone"
                        required
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="field-item">
                      <input
                        className="px-[17px]  border border-blue bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[20px] text-white h-[64px] md:h-[88px] text-[20px]"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={data.email}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field-item">
                      <input
                        className="px-[17px]  border border-blue bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[20px] text-white h-[64px] md:h-[88px] text-[20px]"
                        id="company"
                        name="company"
                        placeholder="Công ty"
                        type="text"
                        required
                        value={data.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      className=" border border-blue bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:text-[20px] text-white p-[15px] resize-none h-[145px] text-[20px]"
                      id="message"
                      name="message"
                      placeholder="Lời nhắn"
                      value={data.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="text-right mt-[30px]">
                  {load === false ? (
                    <div className="relative inline-block">
                      <button
                        type="submit"
                        className="w-[148px] h-[50px] font-bold bg-red bg-white inline-flex flex-col items-center justify-center leading-[0.8] relative z-[10] group"
                      >
                        GỬI
                        <img
                          className="group-hover:translate-x-[10px] transition-all"
                          srcSet="/icons/arrow-icon.png 2x"
                          alt=""
                        />
                      </button>
                      <img
                        className="absolute bottom-[-14px] h-[25px] right-[-17px] z-[5]"
                        srcSet="/images/yellow-line.png 2x"
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="relative inline-block">
                      <button
                        type="submit"
                        className="w-[148px] h-[50px] font-bold bg-red bg-white inline-flex items-center justify-center leading-[0.8] relative z-[10]"
                      >
                        <svg
                          class="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>ĐANG GỬI</span>
                      </button>
                      <img
                        className="absolute bottom-[-14px] h-[25px] right-[-17px] z-[5]"
                        srcSet="/images/yellow-line.png 2x"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
