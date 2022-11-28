import Fanpage from "./components/Fanpage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Organization from "./components/Organization";
import RealLife from "./components/RealLife";
import Register from "./components/Register";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from "./components/Client";
import Footer from "./components/Footer";
import { PopupProvider } from "./contexts/popupContext";
import PopupOrganization from "./components/common/PopupOrganization";
import PopupFanpage from "./components/common/PopupFanpage";
import PopupVideo from "./components/common/PopupVideo";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <>
      <PopupProvider>
        <Header></Header>
        <Hero></Hero>
        <Organization></Organization>
        <Fanpage></Fanpage>
        <Register></Register>
        <RealLife></RealLife>
        <Client></Client>
        <Footer></Footer>
        <PopupOrganization></PopupOrganization>
        <PopupFanpage></PopupFanpage>
        <PopupVideo></PopupVideo>
        <BackToTop></BackToTop>
      </PopupProvider>
    </>
  );
}

export default App;
