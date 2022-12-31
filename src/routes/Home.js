import Navbar from "../components/Navbar";
import Top from "../components/Top";
import HomeImg from "../image/7.jpg";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Top
        cName="hero"
        topImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourine Destination"
        buttonText="Travel Plan"
        url="/service"
        btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
