import { useLocation, useNavigate } from "react-router-dom";
import "./Player.css";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Player = () => {
  let location = useLocation();
  let navigate = useNavigate();

  let {
    state: { id, title },
  } = location;

  let [video, setVideo] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzU3MGE5MmY4MzYwNTE4ZTEwNmRkNGIzMmMwYmZjMSIsIm5iZiI6MTczODkzMjM2NS40NDksInN1YiI6IjY3YTYwMDhkZGYzMzZmMzhhYjg1ZTdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJcIa0SaV0K3ILcI4W1RZXxg7OMjSiZ5abrbhmvF6so",
    },
  };

  const goBack = () => {
    navigate("/home");
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setVideo(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="player">
        <IoArrowBackCircleSharp
          fill="white"
          size={50}
          className="back-arrow"
          onClick={goBack}
        />
        <iframe
          width={800}
          height={500}
          src={`https://www.youtube.com/embed/${
            video.key ? video.key : "zhbn56EwRGM?si=BiEbV0gGy9OA9rit"
          }`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Player;
