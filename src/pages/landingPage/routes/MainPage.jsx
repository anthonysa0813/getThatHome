import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Poster from "../components/Poster";
import Team from "../components/Team";
import Search from "./Search";

function MainPage() {
  return (
    <div>
      <Header />
      <Search />
      <Carousel />
      <Poster />
      <Team />
      <Footer />
    </div>
  );
}

export default MainPage;
