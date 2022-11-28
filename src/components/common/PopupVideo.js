import React from "react";
import { usePopup } from "../../contexts/popupContext";

const PopupVideo = () => {
  const { showVideo, setShowVideo } = usePopup();
  return (
    <>
      {showVideo ? (
        <div className="fixed bg-[rgba(0,0,0,0.5)] inset-0 z-[999] flex items-center justify-center">
          <div className="relative video-popup">
            <img
              className="absolute top-[-85px] right-[-80px] cursor-pointer"
              src="/images/btn-close.png"
              alt=""
              onClick={() => setShowVideo(false)}
            />
            <iframe
              width="956"
              height="538"
              src="https://www.youtube.com/embed/NnIC_0iXLR8?autoplay=1"
              title="Tổ chức Year End Party | WOW Multimedia"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PopupVideo;
