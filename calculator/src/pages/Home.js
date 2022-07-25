import React from "react";
import backgroundVideo from "../video/backgroundVideo.mp4";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="main">
      <div className="home">
        <div className="overlay"></div>
        <video src={backgroundVideo} autoPlay loop muted id="video" />
        <div className="content">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
