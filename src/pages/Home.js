import React from "react";
import "../styles/Home.css";
import Header from "../components/common/Header";
import SearchBar from "../components/common/SearchBar";
import Carrouselxl from "../components/common/Carrousel/Carrouselxl";
import Carrouselxs from "../components/common/Carrousel/Carrouselxs";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <header>
        <Header />
        <div className="Welcome-div">
          <h1>Cherchez et triomphez</h1>
          <p>Trouvez guides, solutions, astuces, et plus encore.</p>
        </div>
        <SearchBar />
      </header>

      <div className="lot-carrousel">
        <div className="body-carrousel c1">
          <container className="carrousel c-feature">
            <h1>Nouveauté</h1>
            <Carrouselxl />
          </container>
        </div>
        <div className="body-carrousel c2 ">
          <container className="carrousel c-categories">
            <h1>Catégories</h1>
            <Carrouselxs />
          </container>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
