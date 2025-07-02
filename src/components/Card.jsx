import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({img, title,reviews, prevPrice,newPrice}) => {
  return (
    <section className="card">
      <img
        className="card-img"
        src={img}
        alt="Shoe"
      />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <AiFillStar className="ratings-start" />
          <AiFillStar className="ratings-start" />
          <AiFillStar className="ratings-start" />
          <AiFillStar className="ratings-start" />
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <del>{prevPrice}</del> {newPrice}
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
