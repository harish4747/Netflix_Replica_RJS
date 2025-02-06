import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useNavigate } from "react-router-dom";

const TitleCards = ({ title, category }) => {

  const navigate=useNavigate();

  const handleClick=(name)=> {
    // let temp = name.replace(" ","+");
    // let url=`results?search_query=${temp}+trailer`
    navigate("/player");
  }

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index} onClick={()=> handleClick(card.name)}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
