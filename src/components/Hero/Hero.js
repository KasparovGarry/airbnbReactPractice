import React from "react";
import Styles from "./Hero.css";
import HeroImage from "../images/hero-images.png";

function Hero() {
    return (
        <div>
            <div className="hero--image">
                <img src={HeroImage} />
            </div>
            <h1>Online experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    );
}

export default Hero;
