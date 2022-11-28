import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [showOrganization, setShowOrganization] = useState(false);
  const [showFanpage, setShowFanpage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const value = {
    showOrganization,
    setShowOrganization,
    showFanpage,
    setShowFanpage,
    showVideo,
    setShowVideo,
  };
  return (
    <PopupContext.Provider value={value} {...props}></PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (typeof context === "undefined")
    throw new Error("usePopup must be used within a PopupProvider");
  return context;
}

export { PopupProvider, usePopup };
