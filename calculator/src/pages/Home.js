import React from "react";
import '../App.css';
import './Home.css';
import backgroundVideo from '../videos/backgroundVideo.mp4';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="home">
        <div className='hero-container'>
        <video src={backgroundVideo} autoPlay loop muted />
        <h1>All in One Calculator</h1>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Home;
