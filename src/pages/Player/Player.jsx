import "./Player.css";

const Player = () => {
  return (
    <div className="player">
      <iframe
        width={800}
        height={500}
        src="https://www.youtube.com/embed/_inKs4eeHiI?si=WPNn1ZhNypC5HwdN"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Player;
