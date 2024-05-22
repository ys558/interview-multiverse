import Header from "./layout/Header";
import "./App.scss";
import Borders from "./widgets/Borders";
import introVideoBackground from "./assets/intro.mp4";
import AwardsRibbon from "./widgets/AwardsRibbon";
import ScrollingText from "./widgets/ScrollingTexts";

const Main = () => {
  return (
    <div className="app">
      <Borders />
      <AwardsRibbon />
      <video autoPlay loop muted className="video-background">
        <source src={introVideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <ScrollingText />
    </div>
  );
};

export default Main;
