import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title, url, className }) {
  return (
    <Link
      className={
        className +
        " card_container flex flex-col justify-center items-center grey-300 sf-font-medium text-dark-black"
      }
    >
      <img
        src={`http://localhost:5000/public/assets/images/${url}`}
        alt={title}
        className="icon lg"
      />
      <span className="title text-base">{title}</span>
    </Link>
  );
}

export default Card;
