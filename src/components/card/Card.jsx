import CardStyle from "./card.module.scss";
// import CardImage from "../../assets/img/cardImage.jpg";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <>
      <div className={CardStyle.card}>
        <Link to="#" className={CardStyle.cardLink}>
          <img
            src={data.image}
            alt={`${data.title}`}
            className={CardStyle.cardImage}
          />
          <div className={CardStyle.cardText}>
            <button className={CardStyle.cardTextChip}>{data.category}</button>
            <p className={CardStyle.cardTextTime}>{data.time}</p>
            <p className={CardStyle.cardTextPostTitle}>{data.title}</p>
            <p className={CardStyle.cardTextAuthor}>{data.author}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
