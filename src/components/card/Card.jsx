import CardStyle from "./card.module.scss";
// import CardImage from "../../assets/img/cardImage.jpg";
import { Link } from "react-router-dom";
// import post from "../../../src/pages/posts/Posts"
import { useState } from "react";
export default Card;

function Card({ data }) {
  return (
    <>
      <div className={CardStyle.card}>
        <Link to={`/posts/${data.id}`} className={CardStyle.cardLink}>
          <div className={CardStyle.cardImageContainer}>
            <img
              src={data.imageEvent}
              alt={`${data.title}`}
              className={CardStyle.cardImage}
            />
          </div>
          <div className={CardStyle.cardText}>
            <button className={CardStyle.cardTextChip}>{data.category}</button>
            <p className={CardStyle.cardTextTime}>{data.createdAt}</p>
            <p className={CardStyle.cardTextPostTitle}>{data.title}</p>
            <p
              className={
                CardStyle.cardTextAuthor
              }>{`${data.firstName} ${data.lastName}`}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
