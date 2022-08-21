import React from "react";
import Styles from "./Card.css";
import StarIcon from "../icons/star.png";

function Card({coverImg, stats, location, title, price, openSpots}) {
    let badgeName;
    if (openSpots === 0) {
        badgeName = "SOLD OUT";
    } else if (location === "Online") {
        badgeName = "ONLINE";
    }

    return (
        <div className="card">
            {badgeName && <div className="card--badge">{badgeName}</div>}
            <img className="card--image" src={`./images/${coverImg}`} />
            <div className="card-stats">
                <img className="card--star" src={StarIcon} />
                <span className="rating--rating">{stats.rating}</span>
                <span className="reviewCount">({stats.reviewCount})</span>
                <span className="coutry"> - {location}</span>
            </div>

            <span className="card--title">{title}</span>
            <span className="card--price">
                <strong>From ${price}</strong> / person
            </span>
        </div>
    );
}

export default Card;
