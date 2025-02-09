import "./TitleCards.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TitleCards = ({ title, category }) => {
  const navigate = useNavigate();

  let [cards_data, setCardDetails] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzU3MGE5MmY4MzYwNTE4ZTEwNmRkNGIzMmMwYmZjMSIsIm5iZiI6MTczODkzMjM2NS40NDksInN1YiI6IjY3YTYwMDhkZGYzMzZmMzhhYjg1ZTdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJcIa0SaV0K3ILcI4W1RZXxg7OMjSiZ5abrbhmvF6so",
    },
  };

  let call = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    );
    let final = await res.json();
    setCardDetails(final.results);
  };

  useEffect(() => {
    call();
  }, []);

  const handleClick = (id, title) => {
    navigate("/player", { state: { id, title } });
  };

  return (
    <div className="title-cards">
      <h2 id={category}>{title ? title : "Blockbuster Movies"}</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return (
            <div
              className="card"
              key={index}
              onClick={() => handleClick(card.id, card.original_title)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${card.poster_path}`}
                alt="not Found"
                className="posters"
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TitleCards.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

export default TitleCards;
