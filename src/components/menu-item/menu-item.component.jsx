import React from "react";
import { Link } from "react-router-dom";
import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <Link to={ title === "Featured products" ? "/shop" : `/shop/${title}`} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
}

export default MenuItem;
