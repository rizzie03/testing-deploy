import CardStyle from "./card.module.scss";
// import CardImage from "../../assets/img/cardImage.jpg";
import { Link } from "react-router-dom";
// import post from "../../../src/pages/posts/Posts"
import { useState } from "react";
export default Card;

function Card({ data }) {
  const [comment] = useState([]);
  console.log("comment", comment);
  const move = () => {
    console.log(move);
    return (
      <>
        <div className={CardStyle.card}>
          <Link to='#' className={CardStyle.cardLink}>
            <img
              src={data.image}
              alt={`${data.title}`}
              className={CardStyle.cardImage}
            />
          </Link>
          <div className={CardStyle.cardText}>
            <Link
              to='/posts'
              style={{ textDecoration: "none", color: "black" }}
              onClick={move}>
              <button className={CardStyle.cardTextChip}>
                {data.category}
              </button>
              <p className={CardStyle.cardTextTime}>{data.time}</p>
              <p className={CardStyle.cardTextPostTitle}>{data.title}</p>
              <p className={CardStyle.cardTextAuthor}>{data.author}</p>
            </Link>
          </div>
        </div>
      </>
    );
  };
}
