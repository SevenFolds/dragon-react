import React from "react";
import "./PageCss/Home.css";
import "./PageCss/Subscription.css";
import UpperTitle from "./homepage/UpperTitle";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import CollegeData from "./Data.json";
// import Bot from "./components/Bot.js"; <---- TODO: @nikhilhvr Hume chahiye bhi ye
import Slider from "./homepage/Slider";
function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="Home">
        <UpperTitle />
      </div>
      <SearchBar placeholder="Search a College Name" data={CollegeData} />
      <div className="slider">
      <Slider/>
      </div>

        <Subscription />
        <Footer/>
    </>
  );
}

export default Home;
