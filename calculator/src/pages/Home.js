import React from "react";
import '../App.css';
import './Home.css';
import backgroundVideo from '../videos/backgroundVideo.mp4'

function Home() {
  return (
    <>
      <div className="home">
        <div className='hero-container'>
        <video src={backgroundVideo} autoPlay loop muted />
        <h1>All in One Calculator</h1>
        <p>Created By Vida and Camila</p>
        </div>
      </div>
    </>
  );
}

export default Home;
