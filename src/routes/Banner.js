import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import ContactImg from "../image/2.jpg";
function Banner() {
  return (
    <>
      <Navbar />
      <Top cName="hero" topImg={ContactImg} title="Banner" text="Carosel" />
      <About />
      <Footer />
    </>
  );
}

export default Banner;
