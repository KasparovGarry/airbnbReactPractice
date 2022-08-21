import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import cardData from "./data";
import styles from "./App.css";

function App() {
    const cards = cardData.map((card) => {
        return <Card key={card.id} {...card} />;
    });

    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <section className="cards-list">{cards}</section>
            </main>
        </div>
    );
}

export default App;
